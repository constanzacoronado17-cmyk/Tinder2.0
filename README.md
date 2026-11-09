# Persona ideal: prototipo interactivo

Prototipo de una funcionalidad para app de citas: registro, gustos propios, "persona ideal", swipe por afinidad, likes con notificaciones, chat con respuestas naturales, sugerencia de cita con IA Tinder, tómbola de lugares, flujo de "Cita no aceptada" con tips, explorar con historias y perfil.

## Estructura

```
index.html          Página principal
assets/styles.css   Estilos
assets/app.js       Toda la lógica: datos de personas, pantallas, chat, IA, notificaciones
assets/img/         Fotos (personas, historias, lugares, perfil de Esteban)
assets/fonts/       Fuente Inter (licencia SIL OFL 1.1)
api/chat.js         Función serverless de Vercel que genera las respuestas del chat con Claude
```

## Subir a GitHub

1. Crea un repositorio nuevo en github.com (puede ser privado).
2. Opción web: "Add file" > "Upload files", arrastra **todo el contenido** de esta carpeta (incluida la carpeta `api` y `assets`) y haz commit.
3. Opción terminal:
   ```bash
   git init
   git add .
   git commit -m "Persona ideal v1"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/persona-ideal.git
   git push -u origin main
   ```

## Conectar con Vercel

1. En vercel.com: "Add New..." > "Project" > importa el repositorio.
2. Framework Preset: **Other**. Deja vacíos Build Command y Output Directory.
3. En "Environment Variables" agrega:
   - `ANTHROPIC_API_KEY` = tu API key (se crea en console.anthropic.com).
   - Opcional: `ANTHROPIC_MODEL` (por defecto `claude-haiku-5-5`).
4. Deploy. Si agregas la variable después, haz "Redeploy" para que tome efecto.

## Cómo responde el chat

1. Abierto dentro de Claude.ai: usa la IA de Claude.ai.
2. En Vercel: usa `/api/chat` con tu API key (cada mensaje consume créditos de tu cuenta de Anthropic; la función limita a 20 mensajes por minuto por IP y respuestas cortas).
3. Sin API key o sin conexión: usa el respaldo local que detecta el tema del mensaje (saludo, música, mascotas, etc.).

## Probar en tu computador

- Solo la app (chat con respaldo local): `npx serve .` y abre la URL que muestra.
- Con la función de IA: `npm i -g vercel`, copia `.env.example` a `.env.local` con tu key y ejecuta `vercel dev`.

## Dónde editar

En `assets/app.js`:
- `PEOPLE` y `BIO`: personas, edades, gustos, personalidad y fotos/historias.
- `S.chats`: conversaciones iniciales (Camila y Fernanda).
- `S.likes`: likes iniciales (Martina y Matías).
- `PLACES`: lugares que sugiere IA Tinder.
- `CATS`: categorías e intereses.
- `LIKE_MAX` y `scheduleLike`: cantidad y frecuencia de notificaciones de likes.

El registro, gustos y persona ideal se guardan en el navegador (localStorage). "Cerrar sesión y reiniciar demo" en Perfil lo borra.

## Nota sobre imágenes

Varias fotos son de películas, series o personas conocidas. Úsalas solo para fines académicos o de presentación; si el sitio será público, reemplázalas por fotos propias o con licencia (mismos nombres de archivo en `assets/img/`).
