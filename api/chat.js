// Función serverless de Vercel: genera la respuesta de la persona del chat con Claude.
// Requiere la variable de entorno ANTHROPIC_API_KEY (Vercel > Settings > Environment Variables).
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-5-5';
const hits = new Map(); // límite simple de solicitudes por IP (por instancia)

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido' });
  }
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(500).json({ error: 'Falta ANTHROPIC_API_KEY' });

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'anon';
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < 60000);
  if (recent.length >= 20) return res.status(429).json({ error: 'Demasiadas solicitudes, espera un minuto' });
  recent.push(now);
  hits.set(ip, recent);

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  const prompt = body && body.prompt;
  if (typeof prompt !== 'string' || prompt.length < 20 || prompt.length > 8000 ||
      !prompt.startsWith('Eres ') || !prompt.includes('app de citas')) {
    return res.status(400).json({ error: 'Solicitud inválida' });
  }

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({ model: MODEL, max_tokens: 200, messages: [{ role: 'user', content: prompt }] })
    });
    const data = await r.json();
    if (!r.ok) return res.status(502).json({ error: (data && data.error && data.error.message) || 'Error de la API' });
    const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('').trim();
    return res.status(200).json({ text });
  } catch (e) {
    return res.status(502).json({ error: 'No se pudo contactar a la API' });
  }
};
