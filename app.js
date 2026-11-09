const IMG = {
 "camila": "assets/img/camila.jpg",
 "cam1": "assets/img/cam1.jpg",
 "cam2": "assets/img/cam2.jpg",
 "cam3": "assets/img/cam3.jpg",
 "fernanda": "assets/img/fernanda.jpg",
 "fer1": "assets/img/fer1.jpg",
 "fer2": "assets/img/fer2.jpg",
 "fer3": "assets/img/fer3.jpg",
 "valentina": "assets/img/valentina.jpg",
 "javiera": "assets/img/javiera.jpg",
 "antonia": "assets/img/antonia.jpg",
 "martina": "assets/img/martina.jpg",
 "matias": "assets/img/matias.jpg",
 "pinsa": "assets/img/pinsa.jpg",
 "cerro": "assets/img/cerro.jpg",
 "vibra": "assets/img/vibra.jpg",
 "esteban": "assets/img/esteban.jpg",
 "est1": "assets/img/est1.jpg",
 "est2": "assets/img/est2.jpg",
 "victoria": "assets/img/victoria.jpg",
 "sofia": "assets/img/sofia.jpg",
 "rodrigo": "assets/img/rodrigo.jpg",
 "cw8": "assets/img/cw8.jpg",
 "cw11": "assets/img/cw11.jpg",
 "cw9": "assets/img/cw9.jpg",
 "cwp2": "assets/img/cwp2.jpg",
 "cw10": "assets/img/cw10.jpg",
 "cwwc": "assets/img/cwwc.jpg",
 "fh1": "assets/img/fh1.jpg",
 "fh2": "assets/img/fh2.jpg",
 "fh3": "assets/img/fh3.jpg",
 "fh4": "assets/img/fh4.jpg",
 "fh5": "assets/img/fh5.jpg",
 "fh6": "assets/img/fh6.jpg",
 "eh1": "assets/img/eh1.jpg",
 "eh2": "assets/img/eh2.jpg",
 "eh3": "assets/img/eh3.jpg",
 "eh4": "assets/img/eh4.jpg"
};

/* ---------- icons (de tus piezas) ---------- */
const P = {
  back:'<path d="M15 5l-7 7 7 7"/>', check:'<path d="M5 12.5l4.5 4.5L19 7"/>', plus:'<path d="M12 5v14M5 12h14"/>', x:'<path d="M6 6l12 12M18 6L6 18"/>',
  heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
  flame:'<path d="M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-10z"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>', chat:'<path d="M4 5h16v11H9l-5 4z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>', tri:'<path d="M7 5l12 7-12 7z"/>', play:'<path d="M8 5l11 7-11 7z"/>', pause:'<path d="M8 5v14M16 5v14"/>',
  star:'<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6.1L12 16.5 6.6 19.6l1.2-6.1L3.3 9.3l6.1-.7z"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  video:'<rect x="3" y="6" width="12" height="12" rx="2"/><path d="M15 10l6-3v10l-6-3z"/>', cam:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  brief:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  music:'<path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
  mountain:'<path d="M3 19l6-10 4 6 2-3 6 7z"/>', coffee:'<path d="M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M16 10h2a2 2 0 0 1 0 4h-2"/><path d="M8 4v2M12 4v2"/>',
  send:'<path d="M4 12l16-8-5 16-3-6z"/><path d="M12 14l8-10"/>', pencil:'<path d="M4 20h4L19 9l-4-4L4 16z"/>', down:'<path d="M6 9l6 6 6-6"/>', up:'<path d="M6 15l6-6 6 6"/>',
  calendar:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>'
};
const mascot=(w,h)=>`<svg width="${w}" height="${h}" viewBox="0 0 120 140" role="img" aria-label="Mascota llamita sonriendo, con una idea sobre su cabeza" style="flex-shrink:0;display:block;overflow:visible">
      <defs><linearGradient id="fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF6A6F"/><stop offset="1" stop-color="#D91227"/></linearGradient></defs>
      <g class="bulb"><circle class="glow" cx="60" cy="22" r="19" fill="#FFD84D" opacity=".35"/><g stroke="#FFD84D" stroke-width="2.5" stroke-linecap="round"><path d="M60 -1v-0.01M42 4l-3 -3M78 4l3 -3M36 22h-4M84 22h4"/></g><circle cx="60" cy="22" r="10" fill="#FFE27A" stroke="#FFFFFF" stroke-width="2"/><rect x="55" y="30" width="10" height="6" rx="2" fill="#CFCFCF"/></g>
      <g class="bob"><path class="flame" d="M62 46 C66 62 96 72 96 100 C96 124 80 138 60 138 C40 138 24 124 24 100 C24 84 36 74 44 64 C46 72 50 76 54 76 C52 64 56 54 62 46 Z" fill="url(#fl)"/>
      <ellipse cx="60" cy="120" rx="22" ry="15" fill="#FF9AA0" opacity=".4"/><g class="wave"><path d="M26 106 Q10 100 12 84" stroke="#C80F23" stroke-width="7" stroke-linecap="round" fill="none"/><circle cx="12" cy="82" r="5.5" fill="#E11D2E"/></g>
      <path d="M94 106 Q110 106 110 94" stroke="#C80F23" stroke-width="7" stroke-linecap="round" fill="none"/><path class="heart" d="M110 98 c-9 -6 -10 -13 -4 -15 c3 -1 4 2 4 2 c0 0 1 -3 4 -2 c6 2 5 9 -4 15z" fill="#FFFFFF"/>
      <g class="eye"><ellipse cx="47" cy="102" rx="8.5" ry="10" fill="#FFFFFF"/><circle cx="48" cy="104" r="4.5" fill="#121212"/><circle cx="49.5" cy="102" r="1.5" fill="#FFFFFF"/></g>
      <g class="eye"><ellipse cx="73" cy="102" rx="8.5" ry="10" fill="#FFFFFF"/><circle cx="74" cy="104" r="4.5" fill="#121212"/><circle cx="75.5" cy="102" r="1.5" fill="#FFFFFF"/></g>
      <circle cx="37" cy="116" r="5" fill="#FF9AA0"/><circle cx="83" cy="116" r="5" fill="#FF9AA0"/><path d="M51 117 Q60 129 69 117" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" fill="none"/></g>
     </svg>`;
const ic=(n,s=22,c='#FFFFFF',sw=2,fill='none')=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${fill}" stroke="${c}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const icf=(n,s,c='#E11D2E')=>ic(n,s,c,2,c);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- datos ---------- */
const CATS=[
 ['Actividades y deportes',['Deportes','Gimnasio y entrenamiento','Baile','Actividades al aire libre','Aventura y adrenalina','Senderismo y trekking','Viajes y exploración']],
 ['Cultura y aprendizaje',['Lectura y literatura','Cine y series','Música','Arte y creatividad','Idiomas y culturas','Historia y filosofía','Ciencia y tecnología']],
 ['Gastronomía y vida social',['Salir a comer','Bares y vida nocturna','Cafeterías','Cocina y repostería','Vinos y degustaciones','Conocer lugares nuevos','Eventos y festivales']],
 ['Bienestar y estilo de vida',['Meditación y mindfulness','Yoga y relajación','Vida saludable','Espiritualidad y religión','Crecimiento personal','Naturaleza y tranquilidad']],
 ['Personalidad y entretenimiento',['Humor y comedia','Conversaciones profundas','Escritura','Fotografía','Juegos y videojuegos','Manualidades y hobbies','Redes sociales y creación de contenido']],
 ['Animales y entorno',['Amante de mascotas','Amante de los animales','Cuidado del medioambiente','Voluntariado y causas sociales','Actividades comunitarias']]
];
const PEOPLE={
 camila:{name:'Camila',age:27,busca:'Relación estable',img:'camila',pos:'50% 20%',photos:[['camila','50% 20%'],['cam1','50% 20%'],['cam2','50% 30%'],['cam3','60% 30%']],stories:[['cam1','50% 20%'],['cam2','50% 30%'],['cam3','60% 30%']],highlights:[[['cam1','50% 20%'],['cw8','45% 40%'],['cw11','50% 50%']],[['cam2','50% 30%'],['cw9','50% 40%'],['cwp2','50% 40%']],[['cam3','60% 30%'],['cw10','50% 40%'],['cwwc','50% 40%']]],likes:['Senderismo y trekking','Música','Cafeterías','Amante de mascotas','Cine y series'],likesYou:true},
 fernanda:{name:'Fernanda',age:26,busca:'Conocer gente nueva',img:'fernanda',pos:'25% 12%',photos:[['fernanda','25% 12%'],['fer1','50% 12%'],['fer2','30% 40%'],['fer3','45% 25%']],stories:[['fer1','50% 12%'],['fer2','30% 40%'],['fer3','45% 25%']],highlights:[[['fer1','50% 12%'],['fh1','50% 20%'],['fh4','50% 30%']],[['fer2','30% 40%'],['fh2','50% 25%'],['fh5','50% 25%']],[['fer3','45% 25%'],['fh3','50% 30%'],['fh6','50% 30%']]],likes:['Música','Eventos y festivales','Bares y vida nocturna','Baile','Cine y series'],likesYou:true},
 valentina:{name:'Valentina',age:26,busca:'Relación estable',img:'valentina',pos:'50% 30%',photos:[['valentina','50% 30%']],likes:['Viajes y exploración','Cafeterías','Lectura y literatura','Yoga y relajación','Arte y creatividad'],likesYou:true},
 javiera:{name:'Javiera',age:28,busca:'Lo que surja',img:'javiera',pos:'50% 35%',photos:[['javiera','50% 35%']],likes:['Bares y vida nocturna','Eventos y festivales','Música','Baile','Redes sociales y creación de contenido'],likesYou:true},
 antonia:{name:'Antonia',age:25,busca:'Relación estable',img:'antonia',pos:'40% 30%',photos:[['antonia','40% 30%']],likes:['Senderismo y trekking','Amante de los animales','Vida saludable','Fotografía','Música'],likesYou:true},
 martina:{name:'Martina',age:24,busca:'Relación estable',img:'martina',pos:'50% 22%',photos:[['martina','50% 22%']],likes:['Música','Cafeterías','Cine y series'],likesYou:true},
 victoria:{name:'Victoria',age:46,busca:'Relación estable',img:'victoria',pos:'50% 30%',photos:[['victoria','50% 30%']],likes:['Lectura y literatura','Arte y creatividad','Vinos y degustaciones','Conversaciones profundas','Crecimiento personal'],likesYou:true},
 sofia:{name:'Sofía',age:22,busca:'Lo que surja',img:'sofia',pos:'50% 35%',photos:[['sofia','50% 35%']],likes:['Música','Eventos y festivales','Baile','Humor y comedia','Redes sociales y creación de contenido'],likesYou:true},
 rodrigo:{g:'h',name:'Rodrigo',age:44,busca:'Relación estable',img:'rodrigo',pos:'50% 30%',photos:[['rodrigo','50% 30%']],likes:['Humor y comedia','Cine y series','Salir a comer','Actividades comunitarias','Conversaciones profundas'],likesYou:true},
 matias:{g:'h',name:'Matías',age:29,busca:'Conocer gente nueva',img:'matias',pos:'40% 25%',photos:[['matias','40% 25%']],likes:['Senderismo y trekking','Amante de mascotas','Fotografía'],likesYou:true}
};
const ME_DEFAULT={name:'Esteban',age:27};
const BIO={camila:'cariñosa y risueña; tiene una perrita pomerania; ama el café y subir cerros; trabaja en marketing',
 fernanda:'extrovertida, fanática de los conciertos y festivales, le encanta bailar; estudia música',
 valentina:'tranquila y lectora, le gustan los viajes y el yoga; es diseñadora gráfica',
 javiera:'divertida y carretera, va a todos los eventos y crea contenido para redes',
 antonia:'aventurera, ama los animales y saca fotos; estudia veterinaria',
 martina:'cinéfila, buena para el café y la música indie; trabaja en una librería',
 matias:'relajado, fotógrafo, sale a la montaña con su perro; es ingeniero',
 victoria:'elegante, exigente y muy directa; dirige una revista de moda; humor seco e irónico, pero encantadora cuando entra en confianza; no tolera la impuntualidad',
 sofia:'alegre, espontánea y risueña; canta en una banda pop los fines de semana; usa harto \'jaja\' y es muy buena onda',
 rodrigo:'gerente de una distribuidora de papel; bromista, un poco intenso y se cree el mejor jefe del mundo; le encanta hacer chistes y sentirse querido'};
const PLACES={pinsa:{cat:'Cafetería',name:'Pinsa',img:'pinsa',pos:'30% 30%',icon:'coffee',seg:2},cerro:{cat:'Trekking',name:'Cerro El Carbón',img:'cerro',pos:'50% 55%',icon:'mountain',seg:0},vibra:{cat:'Concierto',name:'Vibra Fest',img:'vibra',pos:'50% 50%',icon:'music',seg:1}};
const REPLIES_UNUSED={
 camila:['Jajaja me encanta 😄','Oye, ¿y si salimos esta semana?','Mi perrita te manda saludos','Ya quiero que sea el día'],
 fernanda:['¡Arctic Monkeys, obvio! ¿Y la tuya?','¿Vas a ir a algún festival este verano?','Jaja tienes buen gusto'],
 default:['¡Hola! Qué bueno que hicimos match','Jaja sí, totalmente','¿Y tú qué haces el fin de semana?']
};

/* ---------- estado ---------- */
const store={get(k,d){try{const v=localStorage.getItem('pi_'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('pi_'+k,JSON.stringify(v))}catch(e){}}};
const S={
  interests:new Set(store.get('interests',[])),
  onboarded:store.get('onboarded',false),
  user:store.get('user',null),
  mine:new Set(store.get('mine',[])),
  deck:[], seen:new Set(),
  likes:['martina','matias'],
  chats:{
    camila:{unread:false,msgs:[['them','Buenos días! Dormiste bien? Yo me quedé escuchando la playlist que me mandaste hasta las 2'],['me','Jajaja sabía que te iba a pegar. Después te mando la segunda parte'],['them','Dale! Oye, cómo te fue en la reunión de ayer?'],['me','Bien, salió mejor de lo que pensaba. Gracias por el apoyo anoche'],['them','Te lo dije jaja. Sabía que te iba a ir bien'],['me','¿Y a ti cómo te fue subiendo el cerro el finde?'],['them','Increíble, llegamos a la cumbre con mi perrita. Por cierto, ya se acostumbró a tu voz en los audios, se queda mirando el celular jaja'],['me','Qué ternura. Ya llevamos más de un mes hablando todos los días y todavía me sacas una sonrisa'],['them','A mí me pasa igual, la verdad. Me encanta hablar contigo']]},
    fernanda:{unread:false,msgs:[['them','¡Hola! Me gustó tu playlist del perfil'],['me','¿Cuál es tu banda fav?']]}
  },
  chatOrder:['camila','fernanda'],
  dates:{},
  decline:{reason:'Confianza y seguridad',safe:new Set(['Videollamada antes','Conocerla más'])},
  seenStories:new Set(), playing:false, replyIdx:{}
};
const DECKIDS=['camila','antonia','valentina','javiera','martina','matias','victoria','sofia','rodrigo'];
function likesOf(id){
  const base=PEOPLE[id].likes, sel=[...S.interests];
  const com=base.filter(l=>S.interests.has(l)), rest=base.filter(l=>!S.interests.has(l));
  if(!DECKIDS.includes(id)||com.length>=3) return [...com,...rest];
  const seed=DECKIDS.indexOf(id), pool=sel.filter(l=>!base.includes(l)), add=[];
  for(let k=0;add.length<3-com.length&&k<pool.length;k++) add.push(pool[(seed*2+k)%pool.length]);
  return [...com,...add,...rest.slice(0,rest.length-add.length)];
}
const common=id=>likesOf(id).filter(l=>S.interests.has(l)).length;
const dateOf=id=>S.dates[id]||(S.dates[id]={state:'pending',picks:new Set(),place:null,min:false,sent:false,enter:false});
const ella=id=>id==='matias'?'él':'ella';
const seekOk=id=>{const k=S.user&&S.user.seek;if(!k||k==='Todos')return true;return k==='Hombres'?PEOPLE[id].g==='h':PEOPLE[id].g!=='h'};
const mineCommon=id=>PEOPLE[id].likes.concat(likesOf(id)).filter((l,i,a)=>a.indexOf(l)===i&&S.mine.has(l)).length;
const sameBusca=id=>S.user&&PEOPLE[id].busca===S.user.busca;
const score=id=>common(id)*2+mineCommon(id)+(sameBusca(id)?1:0);
const meName=()=>(S.user&&S.user.name)||ME_DEFAULT.name;
function ageOf(b){if(!b)return 0;const d=new Date(b+'T00:00'),n=new Date();let a=n.getFullYear()-d.getFullYear();const m=n.getMonth()-d.getMonth();if(m<0||(m===0&&n.getDate()<d.getDate()))a--;return a}
const meAge=()=>(S.user&&ageOf(S.user.birth))||ME_DEFAULT.age;
function zodiac(b){if(!b)return 'Escorpio';const d=new Date(b+'T00:00'),m=d.getMonth()+1,x=d.getDate();const z=[['Capricornio',20],['Acuario',19],['Piscis',20],['Aries',20],['Tauro',21],['Géminis',21],['Cáncer',22],['Leo',23],['Virgo',23],['Libra',23],['Escorpio',22],['Sagitario',22],['Capricornio',32]];return x<z[m-1][1]?z[m-1][0]:z[m][0]}
function myPhoto(){return (S.user&&S.user.photo)?{src:S.user.photo,st:'object-position:50% 50%'}:{src:IMG.esteban,st:'object-position:50% 32%'}}
function buildDeck(){
  const pool=DECKIDS.filter(id=>!S.seen.has(id)&&!S.chats[id]&&common(id)>=3&&seekOk(id));
  S.deck=pool.sort((a,b)=>score(b)-score(a));
}


/* ---------- respuestas del chat ---------- */
let samplePromise=null, aiOff=false, apiOff=false;
const PROMPT_TPL=(pp,id,me,hist,ctx)=>`Eres ${pp.name}, ${pp.age} años, de Santiago de Chile, usando una app de citas. Estás chateando con ${me} (${meAge()} años${S.user&&S.user.job?', '+S.user.job:''}), con quien hiciste match.
Tu forma de ser: ${BIO[id]||''}. Tus gustos: ${likesOf(id).join(', ')}. Buscas: ${pp.busca}.
Gustos de ${me}: ${[...S.mine].join(', ')||'no los conoces aún'}. ${ctx}

Conversación (la más reciente al final):
${hist}

Escribe SOLO tu próximo mensaje como ${pp.name}. Responde directo a lo último que dijo ${me}, siguiendo el mismo tema de forma natural y coherente con lo que ya hablaron. Español chileno informal y cercano (sin exagerar los modismos), 1 o 2 frases cortas, como en un chat real. A veces termina con una pregunta para seguir la conversación. Todavía no se han juntado ni han hablado de conocerse en persona: NO propongas juntarse, salir, una cita ni conocerse en persona (eso lo sugiere la app). Si él lo propone, responde con cariño pero sin cerrar planes. Sin comillas, sin tu nombre al inicio, sin explicaciones. Máximo un emoji y no siempre.`;
const getSample=()=>samplePromise||(samplePromise=(window.claude&&typeof claude.use==='function'?claude.use('sample'):Promise.resolve(null)).catch(()=>null));
const norm=t=>t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
async function replyFor(id){
  const pp=PEOPLE[id],ch=S.chats[id];
  const me=meName(),D=dateOf(id);
  const hist=ch.msgs.slice(-18).map(m=>m[0]==='me'?`${me}: ${m[1]}`:m[0]==='them'?`${pp.name}: ${m[1]}`:`[Sistema: ${m[1]}]`).join('\n');
  const ctx=D.state==='confirmed'&&D.place?`Ya tienen una cita confirmada en ${PLACES[D.place].name} (${PLACES[D.place].cat}).`:D.state==='declined'?`${me} prefirió esperar antes de una cita; no lo presiones.`:'Aún no tienen cita.';
  const prompt=PROMPT_TPL(pp,id,me,hist,ctx);
  const clean=text=>(text||'').trim().replace(/^["“'«]+|["”'»]+$/g,'').replace(new RegExp('^'+pp.name+'\\s*:\\s*','i'),'').trim().slice(0,400);
  // 1) Dentro de Claude.ai: capacidad "sample"
  if(!aiOff){
    const sample=await Promise.race([getSample(),new Promise(r=>setTimeout(()=>r(null),3500))]);
    if(sample){
      try{const {text}=await sample(prompt,{modelTier:'quick',cache:false});const t=clean(text);if(t)return t}
      catch(e){if(e&&(e.code==='not_granted'||e.code==='unavailable'))aiOff=true}
    }
  }
  // 2) En Vercel: función serverless /api/chat (usa ANTHROPIC_API_KEY)
  if(!apiOff){
    try{
      const ctl=new AbortController();const to=setTimeout(()=>ctl.abort(),15000);
      const r=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt}),signal:ctl.signal});
      clearTimeout(to);
      if(r.ok){const j=await r.json();const t=clean(j.text);if(t)return t}
      else if(r.status===404||r.status===500)apiOff=true;
    }catch(e){}
  }
  // 3) Respaldo local por temas
  return localReply(id);
}
const TOPICS=[
 ['cita',/(junt|salir|vernos|conocern|cita|invit|tomar algo|te tinca|nos vemos)/,['Jaja me tinca la idea, pero sigamos conociéndonos un poquito más por acá','Uy, suena lindo. Cuéntame más de ti primero jaja','Jaja ya veremos. ¿Y qué más te gusta hacer?']],
 ['cumplido',/(linda|bonita|hermosa|guapa|lindo|guapo|sonrisa|me gustas|encantas|preciosa)/,['Jaja gracias, me sacaste una sonrisa','Ay, qué lindo lo que me dices. Tú tampoco te quedas atrás','Jaja me hiciste el día con eso']],
 ['estado',/(como estas|como esta|como vai|como te va|que tal tu dia|como andas|como va todo|como amaneciste|que tal)/,['Bien, un día largo pero tranqui. ¿Y el tuyo cómo va?','Todo bien por acá, recién salgo de {act}. ¿Tú?','Bien bien, con ganas de que llegue el finde jaja. ¿Y tú?']],
 ['musica',/(music|banda|cancion|playlist|concierto|escuch|spotify|rock|reggaeton|pop|indie|cantante|festival|tocar|guitarra)/,['Me gusta harto Mon Laferte y Arctic Monkeys, ando escuchando indie últimamente. ¿Y tú?','¡Buena! Yo voy a todos los conciertos que puedo. ¿Fuiste a alguno este año?','Jaja tenemos que compartirnos playlists. ¿Cuál es tu canción del momento?']],
 ['viaje',/(viaj|vacacion|playa|sur de chile|norte|pais|mochila|avion|pucon|valpo|san pedro|torres del paine)/,['¡Me encanta viajar! El último viaje que hice fue al sur y quedé enamorada. ¿Tú adónde has ido?','Uf, viajar es lo mejor. ¿Cuál es el lugar que más te ha gustado?','Tengo pendiente ir a San Pedro de Atacama. ¿Lo conoces?']],
 ['mascota',/(perr|gat|mascota|cachorr|perrit|gatit|animal)/,['Sí, tengo un perrito súper regalón, es mi guagua jaja. ¿Tú tienes mascota?','Jaja si lo conoces te va a querer al tiro. ¿Cómo se llama el tuyo?','Los perritos son lo mejor que hay. ¿Qué raza es?']],
 ['comida',/(cafe|comer|comida|sushi|pizza|restaur|once|desayun|cerveza|vino|trago|hambre|cocin|almuerzo|completo)/,['Soy fan de los cafés, mi favorito es uno chiquitito en Lastarria. ¿Tienes alguno favorito?','Jaja me diste hambre. ¿Eres más de sushi o de pizza?','Me encanta probar lugares nuevos para comer. Recomiéndame uno']],
 ['deporte',/(cerro|trekking|caminar|caminata|senderismo|gym|gimnasio|deporte|correr|futbol|entren|bici|montana|yoga)/,['¡Me encanta subir cerros! El otro día fui al San Cristóbal temprano y estaba precioso. ¿Tú sales a caminar?','Uf, yo trato de moverme harto, me hace súper bien. ¿Qué deporte haces tú?','Tenemos que ir a un cerro juntos entonces jaja. ¿Cuál te gusta?']],
 ['cine',/(pelicula|serie|netflix|cine|ver algo|anime|temporada|capitulo|actor)/,['Ando viendo una serie coreana y estoy enganchadísima jaja. ¿Qué estás viendo tú?','Me encanta el cine. ¿Cuál es tu película favorita?','Jaja necesito recomendaciones, ya vi todo lo que tengo en la lista']],
 ['trabajo',/(trabaj|pega|oficina|estudi|universidad|\bu\b|carrera|clase|prueba|examen|jefe|reunion)/,['Uf, entiendo, esta semana ha sido intensa para mí también. ¿A qué te dedicas tú?','¡Qué bacán! ¿Y te gusta lo que haces?','Jaja ánimo con eso. ¿Y qué haces para desconectarte?']],
 ['finde',/(fin de semana|finde|sabado|domingo|hoy|manana|plan|noche|tarde)/,['Todavía no tengo planes, ¿tú qué vas a hacer?','Quizás salga a caminar o a tomar un café. ¿Algún panorama bueno?','Ojalá algo tranqui. ¿Qué te gusta hacer los findes?']],
 ['saludo',/^(hola|holi|holaa|wena|buenas|hey|ola|buenos dias|buenas tardes|buenas noches)\b/,['¡Hola! Qué bueno que me escribiste. ¿Cómo va tu día?','¡Holaa! Vi tu perfil y me cayó bien al tiro. ¿Cómo estás?','¡Hola! ¿Cómo estái?']],
 ['risa',/^(ja|je|xd|lol|jsj|kk)/,['Jajaja ¿cierto?','Jaja me hiciste reír','Jajaja demasiado']],
 ['gracias',/(gracias|grax|que amable)/,['¡De nada! Para eso estamos jaja','Nada que agradecer']]
];
function localReply(id){
  const pp=PEOPLE[id],ch=S.chats[id];
  const last=[...ch.msgs].reverse().find(m=>m[0]==='me');const t=last?norm(last[1]):'';
  const used=S.replyIdx[id]||(S.replyIdx[id]={});
  const act={camila:'pasear a mi perrita',antonia:'la clínica veterinaria',valentina:'una clase de yoga',javiera:'grabar un video',martina:'la librería',matias:'la pega',fernanda:'ensayo',victoria:'una reunión eterna en la revista',sofia:'ensayo con la banda',rodrigo:'una reunión en la oficina'}[id]||'la pega';
  const pick=(k,arr)=>{const n=used[k]||0;used[k]=n+1;return arr[n%arr.length].replace('{act}',act)};
  for(const [k,re,arr] of TOPICS){if(re.test(t))return pick(k,arr)}
  if(t.includes('?'))return pick('q',['Buena pregunta jaja, te diría que sí. ¿Y tú?','Mmm déjame pensarlo… creo que sí jaja. ¿Por qué la pregunta?','Jaja depende del día. ¿Y tú qué opinas?']);
  const shared=likesOf(id).find(l=>S.mine.has(l))||likesOf(id)[0];
  return pick('def',[`Oye, vi que también te gusta ${shared.toLowerCase()}. ¿Desde cuándo?`,'Jaja me caes bien. Cuéntame algo de ti que no esté en tu perfil','Qué bueno. ¿Y qué es lo que más te gusta hacer en tu tiempo libre?']);
}

/* ---------- likes entrantes + notificación push ---------- */
let likeTimer=null,incoming=0;const LIKE_MAX=4;
function scheduleLike(ms){clearTimeout(likeTimer);if(!S.onboarded||!S.user||incoming>=LIKE_MAX)return;likeTimer=setTimeout(incomingLike,ms)}
function incomingLike(){
  const shown=current&&current.dataset.name==='swipe'?S.deck.slice(0,2):[];
  const pool=DECKIDS.filter(id=>seekOk(id)&&!S.chats[id]&&!S.likes.includes(id)&&!S.seen.has(id)&&!shown.includes(id));
  if(!pool.length)return;
  const id=pool[Math.floor(Math.random()*pool.length)];
  S.likes.unshift(id);S.deck=S.deck.filter(x=>x!==id);incoming++;
  notify(id);updateBadges();
  if(current&&['likes','explorar'].includes(current.dataset.name))refresh();
  scheduleLike(22000+Math.random()*18000);
}
function updateBadges(){if(!current)return;const nv=current.querySelector('.nav');if(!nv)return;const t=document.createElement('div');t.innerHTML=nav(current.dataset.name);nv.replaceWith(t.firstElementChild);bindNav(current)}
function notify(id){
  const pp=PEOPLE[id],c=common(id),ph=document.getElementById('phone');
  ph.querySelectorAll('.push').forEach(n=>n.remove());
  const n=document.createElement('div');n.className='push';n.setAttribute('role','status');n.tabIndex=0;
  n.innerHTML=`<span class="appic">${icf('flame',22,'#FFFFFF')}</span>
   <span style="flex:1;min-width:0;display:flex;flex-direction:column;gap:2px">
    <span style="display:flex;justify-content:space-between;font-size:11px;letter-spacing:.04em;color:#B8B8B8;font-weight:700"><span>TINDER</span><span style="letter-spacing:0;font-weight:500">ahora</span></span>
    <span style="font-size:15px;font-weight:700">¡${pp.name} te dio like! ❤️</span>
    <span style="font-size:13px;color:#DADADA;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Tienen ${c} gustos en común · Toca para verl${id==='matias'||id==='rodrigo'?'o':'a'}</span></span>
   <img src="${IMG[pp.img]}" alt="" style="width:46px;height:46px;border-radius:12px;object-fit:cover;object-position:${pp.pos};flex-shrink:0">`;
  ph.appendChild(n);
  let gone=false;const hide=()=>{if(gone)return;gone=true;n.classList.add('out');setTimeout(()=>n.remove(),320)};
  const t=setTimeout(hide,5000);
  let sy=0,dy=0,down=false;
  n.onpointerdown=e=>{down=true;sy=e.clientY;dy=0;n.setPointerCapture(e.pointerId)};
  n.onpointermove=e=>{if(!down)return;dy=Math.min(0,e.clientY-sy);n.style.transform=`translateY(${dy}px)`};
  n.onpointerup=()=>{down=false;if(dy<-30){clearTimeout(t);hide();return}n.style.transform='';if(Math.abs(dy)<6){clearTimeout(t);hide();document.querySelectorAll('.overlay').forEach(o=>o.remove());switchTab('likes')}};
  try{navigator.vibrate&&navigator.vibrate(60)}catch(e){}
}

/* ---------- router ---------- */
const stage=document.getElementById('stage');
let current=null, stack=[], tab='swipe';
const TABS=['swipe','explorar','likes','chats','perfil'];
function go(name,params={},mode='fade'){
  const el=document.createElement('div'); el.className='screen';
  el.dataset.name=name; render(el,name,params);
  const old=current;
  stage.appendChild(el);
  if(old){
    const inC=mode==='push'?'in-push':mode==='pop'?'in-pop':'in-fade', outC=mode==='push'?'out-push':mode==='pop'?'out-pop':'out-fade';
    if(mode==='pop'){el.style.zIndex=0;old.style.zIndex=1}else{el.style.zIndex=1;old.style.zIndex=0}
    el.classList.add(inC); old.classList.add(outC);
    if(old._cleanup) old._cleanup();
    setTimeout(()=>old.remove(),360);
  }
  current=el; el._params=params;
}
function push(name,params){stack.push({name:current.dataset.name,params:current._params});go(name,params,'push')}
function pop(){const p=stack.pop();if(p)go(p.name,p.params,'pop');else go(tab,{},'pop')}
function switchTab(t){stack=[];tab=t;go(t,{},'fade')}
function refresh(){ if(current) { const n=current.dataset.name,p=current._params; if(current._cleanup) current._cleanup(); current.innerHTML=''; render(current,n,p);} }

function nav(active){
  const items=[['swipe','flame','Swipe'],['explorar','compass','Explorar'],['likes','heart','Likes'],['chats','chat','Chat'],['perfil','user','Perfil']];
  const unread=S.chatOrder.some(id=>S.chats[id].unread);
  return `<nav class="nav" aria-label="Navegación">${items.map(([k,i,l])=>`<button type="button" data-tab="${k}" class="${k===active?'on':''}" aria-current="${k===active?'page':'false'}">${ic(i)}${l}${k==='likes'&&S.likes.length?`<span class="badge">${S.likes.length}</span>`:''}${k==='chats'&&unread?'<span class="badge" style="min-width:10px;height:10px;padding:0;top:6px;right:14px"></span>':''}</button>`).join('')}</nav>`;
}
function bindNav(el){el.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{if(b.dataset.tab!==tab||stack.length)switchTab(b.dataset.tab)})}

function toast(msg){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.getElementById('phone').appendChild(t);setTimeout(()=>t.remove(),2500)}

/* ---------- render ---------- */
function render(el,name,p){
  ({welcome:rWelcome,registro:rRegistro,misgustos:rMisGustos,analizando:rAnalizando,onboarding:rOnboarding,swipe:rSwipe,explorar:rExplorar,likes:rLikes,chats:rChats,chat:rChat,tombola:rTombola,decline:rDecline,tips:rTips,perfil:rPerfil})[name](el,p);
}

/* Bienvenida */
function rWelcome(el){
  el.style.background='radial-gradient(120% 55% at 50% 32%,#3a0f16 0%,#121212 70%)';
  el.innerHTML=`<div style="display:flex;flex-direction:column;height:100%;padding:48px 24px 32px;gap:20px">
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;text-align:center">
      ${mascot(150,175)}
      <h1 class="h1" style="font-size:34px;line-height:1.1">Encuentra a alguien en tu <span style="color:var(--red)">sintonía</span></h1>
      <p style="margin:0;font-size:16px;line-height:1.45;color:var(--mute);max-width:300px">Te recomendamos personas según tus gustos y lo que buscas en alguien.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px;flex-shrink:0">
      <button type="button" class="cta" data-act="new">Crear cuenta</button>
      <button type="button" class="ghost" data-act="login">Ya tengo cuenta</button>
      <p style="margin:4px 0 0;font-size:12px;line-height:1.4;color:#8a8a8a;text-align:center">Al continuar aceptas los Términos y la Política de privacidad.</p>
    </div></div>`;
  el.querySelector('[data-act=new]').onclick=()=>push('registro',{});
  el.querySelector('[data-act=login]').onclick=()=>{if(S.user&&S.onboarded){buildDeck();scheduleLike(7000);stack=[];tab='swipe';go('swipe',{},'push')}else toast('No hay una cuenta guardada. Crea una nueva.')};
}
const stepBar=n=>`<div class="prog"><div style="width:${n/3*100}%"></div></div>`;
function resizePhoto(file,cb){const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,600/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);cb(c.toDataURL('image/jpeg',.82))};im.src=r.result};r.readAsDataURL(file)}

/* Registro */
function rRegistro(el,p){
  const edit=!!p.edit;
  const f=p.form||(p.form=Object.assign({name:'',birth:'',email:'',pass:'',job:'',gender:'',seek:'',busca:'',photo:null},S.user||{}));
  const opts={gender:['Mujer','Hombre','Otro'],seek:['Mujeres','Hombres','Todos'],busca:['Relación estable','Algo casual','Amistad','Lo que surja']};
  const today=new Date().toISOString().slice(0,10);
  const field=(k,label,type,ph,extra='')=>`<label class="fld"><span>${label}</span><input data-f="${k}" type="${type}" value="${esc(f[k]||'')}" placeholder="${ph}" ${extra}><em data-err="${k}"></em></label>`;
  const group=(k,label)=>`<div class="fld" data-grp="${k}"><span>${label}</span><div style="display:flex;flex-wrap:wrap;gap:8px">${opts[k].map(o=>`<button type="button" class="pill ${f[k]===o?'on':''}" data-g="${k}" data-v="${o}" aria-pressed="${f[k]===o}">${o}</button>`).join('')}</div><em data-err="${k}"></em></div>`;
  const photoInner=()=>f.photo?`<img src="${f.photo}" alt="Tu foto">`:`${ic('cam',26,'#B8B8B8',2)}Agregar`;
  el.innerHTML=`<div class="topbar"><button type="button" class="iconbtn" data-act="back" aria-label="Volver">${ic('back',24,'#fff',2.5)}</button>${edit?'<div class="prog" style="visibility:hidden"></div>':stepBar(1)}<span class="sub" style="min-width:44px;text-align:right;font-weight:600">${edit?'':'1 de 3'}</span></div>
  <div class="scroll" style="padding:24px 20px 24px;display:flex;flex-direction:column;gap:18px">
    <div style="display:flex;flex-direction:column;gap:10px"><h1 class="h1" style="font-size:32px">${edit?'Edita tus':'Crea tu'} <span style="color:var(--red)">${edit?'datos':'cuenta'}</span></h1>
    <p style="margin:0;font-size:16px;line-height:1.45;color:var(--mute)">Completa tus datos para empezar. En tu perfil solo se muestran tu nombre, edad, signo y foto.</p></div>
    <div style="display:flex;align-items:center;gap:16px"><label class="photo ${f.photo?'has':''}" id="ph"><input type="file" accept="image/*" hidden data-photo>${photoInner()}</label>
      <div style="display:flex;flex-direction:column;gap:4px"><span style="font-size:16px;font-weight:700">Foto de perfil</span><span class="sub">Opcional. Si no subes una, usaremos la de ejemplo.</span></div></div>
    ${field('name','Nombre','text','Tu nombre','autocomplete="given-name" maxlength="20"')}
    ${field('birth','Fecha de nacimiento','date','',`max="${today}"`)}
    ${field('email','Correo','email','tucorreo@ejemplo.com','autocomplete="email"')}
    ${field('pass','Contraseña','password','Mínimo 6 caracteres','autocomplete="new-password"')}
    ${field('job','¿A qué te dedicas? (opcional)','text','Ej: Publicista','maxlength="30"')}
    ${group('gender','Me identifico como')}
    ${group('seek','Quiero conocer')}
    ${group('busca','Busco')}
  </div>
  <div class="foot"><button type="button" class="cta" data-act="next">${edit?'Guardar cambios':'Continuar'}</button></div>`;
  el.querySelectorAll('[data-f]').forEach(inp=>inp.oninput=()=>{f[inp.dataset.f]=inp.value;inp.classList.remove('bad');el.querySelector(`[data-err=${inp.dataset.f}]`).textContent=''});
  el.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{const k=b.dataset.g;f[k]=b.dataset.v;el.querySelectorAll(`[data-g=${k}]`).forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});el.querySelector(`[data-err=${k}]`).textContent=''});
  el.querySelector('[data-photo]').onchange=e=>{const fl=e.target.files[0];if(!fl)return;resizePhoto(fl,url=>{f.photo=url;const ph=el.querySelector('#ph');ph.classList.add('has');ph.querySelector('img,svg')?.remove();ph.childNodes.forEach(n=>{if(n.nodeType===3)n.remove()});ph.insertAdjacentHTML('beforeend',`<img src="${url}" alt="Tu foto">`)})};
  el.querySelector('[data-act=back]').onclick=()=>pop();
  el.querySelector('[data-act=next]').onclick=()=>{
    const e={};if((f.name||'').trim().length<2)e.name='Escribe tu nombre';
    if(!f.birth)e.birth='Ingresa tu fecha de nacimiento';else if(ageOf(f.birth)<18)e.birth='Debes tener 18 años o más para usar la app';
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email||''))e.email='Ingresa un correo válido';
    if((f.pass||'').length<6)e.pass='Usa al menos 6 caracteres';
    ['gender','seek','busca'].forEach(k=>{if(!f[k])e[k]='Elige una opción'});
    el.querySelectorAll('[data-err]').forEach(x=>x.textContent=e[x.dataset.err]||'');
    el.querySelectorAll('[data-f]').forEach(x=>x.classList.toggle('bad',!!e[x.dataset.f]));
    const first=Object.keys(e)[0];
    if(first){const t=el.querySelector(`[data-f=${first}]`)||el.querySelector(`[data-grp=${first}]`);t.scrollIntoView({behavior:'smooth',block:'center'});t.classList.remove('shake');void t.offsetWidth;t.classList.add('shake');return}
    f.name=f.name.trim();S.user=Object.assign({},f);store.set('user',S.user);if(f.photo)IMG.__me=f.photo;
    if(edit){S.seen.clear();buildDeck();pop();toast('Datos actualizados')} else push('misgustos',{});
  };
}

/* Selector de intereses (mis gustos / persona ideal) */
function picker(el,p,cfg){
  const edit=!!p.edit;
  const draft=p.draft||(p.draft=new Set(S[cfg.key]));
  el.innerHTML=`
  <div class="topbar">
    <button type="button" class="iconbtn" data-act="back" aria-label="Volver">${ic('back',24,'#fff',2.5)}</button>
    ${edit?'<div class="prog" style="visibility:hidden"></div>':stepBar(cfg.step)}
    ${edit?'<button type="button" class="textbtn" data-act="back2">Cancelar</button>':`<span class="sub" style="min-width:44px;text-align:right;font-weight:600">${cfg.step} de 3</span>`}
  </div>
  <div class="scroll" style="padding-bottom:24px">
    <div style="padding:28px 20px 0;display:flex;flex-direction:column;gap:14px">
      <h1 class="h1" style="font-size:32px">${cfg.title}</h1>
      <p style="margin:0;font-size:16px;line-height:1.45;color:var(--mute)">${cfg.desc}</p>
      <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:10px;padding-top:6px">
        <div style="display:flex;flex-direction:column;gap:2px"><span style="font-size:20px;font-weight:700">${cfg.label}</span><span class="sub">Elige al menos 3</span></div>
        ${cfg.copy&&S.mine.size?'<button type="button" class="edit" data-act="copy">Usar mis gustos</button>':''}
      </div>
    </div>
    <div style="padding:28px 20px 0;display:flex;flex-direction:column;gap:24px">
      ${CATS.map(([t,opts],i)=>`<section class="sec"><div style="display:flex;align-items:center;gap:12px"><span class="num">${i+1}</span><h2 style="margin:0;font-size:18px;font-weight:600">${t}</h2></div>
      <div style="display:flex;flex-wrap:wrap;gap:10px">${opts.map(o=>`<button type="button" class="opt ${draft.has(o)?'on':''}" aria-pressed="${draft.has(o)}" data-opt="${esc(o)}">${o}</button>`).join('')}</div></section>`).join('')}
    </div>
  </div>
  <div class="foot"><button type="button" class="cta" data-act="next"></button></div>`;
  const cta=el.querySelector('[data-act=next]');
  const sync=()=>{el.querySelectorAll('[data-opt]').forEach(b=>{const on=draft.has(b.dataset.opt);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
    cta.disabled=draft.size<3;cta.textContent=draft.size>=3?(edit?`Guardar ${draft.size} intereses`:`Siguiente ${draft.size}`):`Elige al menos 3 (${draft.size}/3)`};
  sync();
  el.querySelectorAll('[data-opt]').forEach(b=>b.onclick=()=>{const o=b.dataset.opt;draft.has(o)?draft.delete(o):draft.add(o);sync()});
  const cp=el.querySelector('[data-act=copy]');if(cp)cp.onclick=()=>{S.mine.forEach(x=>draft.add(x));sync();toast('Agregamos tus gustos')};
  el.querySelector('[data-act=back]').onclick=()=>pop();
  const b2=el.querySelector('[data-act=back2]');if(b2)b2.onclick=()=>pop();
  cta.onclick=()=>{S[cfg.key]=new Set(draft);store.set(cfg.key,[...draft]);
    if(edit){S.seen.clear();buildDeck();pop();toast('Intereses actualizados')} else cfg.next()};
}
function rMisGustos(el,p){picker(el,p,{step:2,key:'mine',label:'Tus gustos',
  title:'¿Qué te gusta <span style="color:var(--red)">a ti</span>?',
  desc:'Selecciona tus propios gustos e intereses. Se verán en tu perfil y nos ayudan a encontrar personas afines.',
  next:()=>push('onboarding',{})})}
function rOnboarding(el,p){picker(el,p,{step:3,key:'interests',label:'¿Qué te gustaría compartir?',copy:true,
  title:'Indícanos cómo sería tu <span style="color:var(--red)">persona ideal</span>',
  desc:'Queremos conocerte mejor. Selecciona los gustos e intereses que te gustaría compartir con alguien. Te recomendaremos personas que tengan afinidad contigo.',
  next:()=>{S.onboarded=true;store.set('onboarded',true);S.seen.clear();buildDeck();push('analizando',{})}})}

/* Analizando afinidades */
function rAnalizando(el){
  const u=S.user||{};
  el.style.background='radial-gradient(120% 55% at 50% 35%,#3a0f16 0%,#121212 70%)';
  el.innerHTML=`<div style="display:flex;flex-direction:column;height:100%;padding:48px 28px 40px;gap:26px;justify-content:center">
    <div style="display:flex;justify-content:center">${mascot(120,140)}</div>
    <h1 class="h1" style="font-size:30px;text-align:center">Buscando personas en tu <span style="color:var(--red)">sintonía</span>…</h1>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div class="step" style="animation-delay:.3s"><span class="tick">${ic('check',16,'#fff',3.5)}</span>Tus ${S.mine.size} gustos</div>
      <div class="step" style="animation-delay:.9s"><span class="tick">${ic('check',16,'#fff',3.5)}</span>${S.interests.size} intereses de tu persona ideal</div>
      <div class="step" style="animation-delay:1.5s"><span class="tick">${ic('check',16,'#fff',3.5)}</span>Quieres conocer: ${esc(u.seek||'Todos')} · ${esc(u.busca||'Lo que surja')}</div>
      <div class="step" style="animation-delay:2.1s;color:var(--red);font-weight:800;font-size:18px">${S.deck.length?`¡Encontramos ${S.deck.length} ${S.deck.length===1?'persona':'personas'} para ti!`:'Aún no hay personas con 3 gustos en común'}</div>
    </div></div>`;
  const t=setTimeout(()=>{stack=[];tab='swipe';go('swipe',{},'fade');scheduleLike(7000)},3300);
  el._cleanup=()=>clearTimeout(t);
}

/* Swipe: Recomendación en tu sintonía */
function cardHTML(id,back){
  const pp=PEOPLE[id], c=common(id);
  return `<div class="card ${back?'back':''}" data-id="${id}" role="group" aria-label="${pp.name}, ${pp.age}">
    <img class="main" src="${IMG[pp.photos[0][0]]}" alt="Foto de ${pp.name}" style="object-position:${pp.photos[0][1]}">
    <div class="top">
      <div class="bars">${pp.photos.map((_,i)=>`<div class="${i===0?'on':''}"></div>`).join('')}</div>
      <div style="display:flex;align-items:baseline;gap:10px;padding-top:4px"><span style="font-size:30px;font-weight:800">${pp.name}</span><span style="font-size:26px;font-weight:500">${pp.age}</span></div>
      ${c>=3?`<span class="tag">${ic('heart',14,'#fff',2,'#fff')}En tu sintonía</span>`:''}
    </div>
    <div class="bottom">
      <div style="display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600">${ic('heart',18)}Busca: ${pp.busca}${sameBusca(id)?'<span class="mini" style="margin-left:4px">Igual que tú</span>':''}</div>
      <div style="font-size:13px;color:#C8C8C8">${c} de ${likesOf(id).length} gustos coinciden con tu persona ideal${mineCommon(id)?` · ${mineCommon(id)} en común contigo`:''}</div>
      <div class="chips">${likesOf(id).map(l=>`<span class="chip ${S.interests.has(l)?'on':'glass'}">${l}</span>`).join('')}</div>
    </div>
    <div class="stamp like">${ic('check',56,'#fff',3)}</div>
    <div class="stamp nope">${ic('x',50,'#fff',3)}</div>
  </div>`;
}
function rSwipe(el){
  el.innerHTML=`
  <div style="display:flex;align-items:center;gap:10px;padding:16px 16px 12px;height:76px;flex-shrink:0">
    <button type="button" class="iconbtn" data-act="filter" aria-label="Ajustar intereses">${ic('sliders',26)}</button>
    <span style="font-size:15px;font-weight:600;background:var(--s3);border-radius:999px;padding:11px 18px">Para ti</span>
  </div>
  <div class="deck" id="deck"></div>
  <div style="display:flex;justify-content:center;gap:56px;flex-shrink:0;padding:12px 0" id="acts">
    <button type="button" class="round dark" data-act="nope" aria-label="Descartar">${ic('x',30,'#fff',3)}</button>
    <button type="button" class="round red" data-act="like" aria-label="Hacer match">${ic('check',32,'#fff',3)}</button>
  </div>
  ${nav('swipe')}`;
  bindNav(el);
  el.querySelector('[data-act=filter]').onclick=()=>push('onboarding',{edit:true});
  const deck=el.querySelector('#deck');
  const draw=()=>{
    const ids=S.deck.slice(0,2);
    el.querySelector('#acts').style.visibility=ids.length?'visible':'hidden';
    if(!ids.length){deck.innerHTML=`<div class="empty">${ic('spark',34,'#E11D2E',2,'#E11D2E')}<span style="font-size:20px;font-weight:800">Viste todas tus recomendaciones</span><span class="sub" style="font-size:15px;line-height:1.4">Ajusta tu persona ideal o a quién quieres conocer para descubrir más personas en tu sintonía.</span><button type="button" class="cta" style="font-size:16px;min-height:50px" data-act="adj">Ajustar intereses</button><button type="button" class="textbtn" data-act="reset" style="color:var(--mute);font-size:14px">Volver a ver recomendaciones</button></div>`;
      deck.querySelector('[data-act=adj]').onclick=()=>push('onboarding',{edit:true});
      deck.querySelector('[data-act=reset]').onclick=()=>{S.seen.clear();buildDeck();draw()};return}
    deck.innerHTML=ids.slice().reverse().map((id,i)=>cardHTML(id,ids.length===2&&i===0)).join('');
    attach(deck.querySelector('.card:not(.back)'));
  };
  const decide=(card,dir)=>{
    const id=card.dataset.id;
    card.style.transition='transform .38s cubic-bezier(.2,.7,.3,1),opacity .38s';
    card.style.transform=`translate(${dir*520}px,${-40}px) rotate(${dir*24}deg)`;card.style.opacity='0';
    const back=deck.querySelector('.card.back'); if(back){back.style.transform='none';back.style.filter='none'}
    S.seen.add(id); S.deck=S.deck.filter(x=>x!==id);
    setTimeout(()=>{draw(); if(dir>0) liked(id)},300);
  };
  function attach(card){
    let sx=0,sy=0,dx=0,dy=0,down=false,moved=false,ph=0;
    const pp=PEOPLE[card.dataset.id], like=card.querySelector('.stamp.like'), nope=card.querySelector('.stamp.nope');
    card.onpointerdown=e=>{down=true;moved=false;sx=e.clientX;sy=e.clientY;dx=dy=0;card.setPointerCapture(e.pointerId);card.style.transition='none';card.style.cursor='grabbing'};
    card.onpointermove=e=>{if(!down)return;dx=e.clientX-sx;dy=e.clientY-sy;if(Math.abs(dx)>6||Math.abs(dy)>6)moved=true;
      card.style.transform=`translate(${dx}px,${dy*.3}px) rotate(${dx/18}deg)`;
      like.style.opacity=Math.max(0,Math.min(1,dx/110));nope.style.opacity=Math.max(0,Math.min(1,-dx/110))};
    card.onpointerup=card.onpointercancel=e=>{if(!down)return;down=false;card.style.cursor='grab';
      if(!moved){const r=card.getBoundingClientRect();const n=pp.photos.length;if(e.clientY-r.top>r.height*.55){openSheet(card.dataset.id,'deck');return}if(n>1){ph=(e.clientX-r.left<r.width/2)?Math.max(0,ph-1):Math.min(n-1,ph+1);
        const im=card.querySelector('img.main');im.src=IMG[pp.photos[ph][0]];im.style.objectPosition=pp.photos[ph][1];card.querySelectorAll('.bars>div').forEach((b,i)=>b.classList.toggle('on',i===ph))}else openSheet(card.dataset.id,'deck');return}
      if(Math.abs(dx)>110) decide(card,dx>0?1:-1);
      else {card.style.transition='transform .3s cubic-bezier(.2,.8,.2,1.2)';card.style.transform='';like.style.opacity=0;nope.style.opacity=0}};
    card._decide=d=>{like.style.opacity=d>0?1:0;nope.style.opacity=d<0?1:0;decide(card,d)};
  }
  el.querySelector('[data-act=like]').onclick=()=>{const c=deck.querySelector('.card:not(.back)');if(c)c._decide(1)};
  el.querySelector('[data-act=nope]').onclick=()=>{const c=deck.querySelector('.card:not(.back)');if(c)c._decide(-1)};
  el._decideTop=d=>{const c=deck.querySelector('.card:not(.back)');if(c)c._decide(d)};
  draw();
}
function liked(id){
  if(S.chats[id]){showMatch(id,true);return}
  if(PEOPLE[id].likesYou){
    S.chats[id]={unread:true,msgs:[]};S.chatOrder.unshift(id);S.likes=S.likes.filter(x=>x!==id);showMatch(id);
  } else toast(`Le diste like a ${PEOPLE[id].name}`);
}

/* Perfil en hoja inferior */
function openSheet(id,from){
  const pp=PEOPLE[id]; const c=common(id);
  const ov=document.createElement('div');ov.className='overlay';
  ov.innerHTML=`<div class="scrim"></div><div class="sheet" role="dialog" aria-label="Perfil de ${pp.name}">
    <div style="position:relative;height:50%;flex-shrink:0;background:#222">
      <img class="cover" id="sp" src="${IMG[pp.photos[0][0]]}" alt="Foto de ${pp.name}" style="object-position:${pp.photos[0][1]}">
      <div style="position:absolute;inset:0 0 auto;padding:14px 16px;display:flex;flex-direction:column;gap:10px;background:linear-gradient(180deg,rgba(0,0,0,.6),transparent)">
        <div class="bars">${pp.photos.map((_,i)=>`<div class="${i?'':'on'}"></div>`).join('')}</div>
      </div>
      <button type="button" class="iconbtn" data-act="close" aria-label="Cerrar" style="position:absolute;top:26px;right:12px;background:rgba(0,0,0,.5)">${ic('down',24,'#fff',2.5)}</button>
    </div>
    <div class="scroll" style="padding:18px 18px 8px;display:flex;flex-direction:column;gap:14px">
      <div style="display:flex;align-items:baseline;gap:10px"><span style="font-size:28px;font-weight:800">${pp.name}</span><span style="font-size:24px;font-weight:500">${pp.age}</span>${c>=3?`<span class="tag" style="margin-left:auto;align-self:center">${ic('heart',14,'#fff',2,'#fff')}En tu sintonía</span>`:''}</div>
      <div style="display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600">${ic('heart',18)}Busca: ${pp.busca}</div>
      <span style="font-size:13px;color:#C8C8C8">Gustos · ${c} de ${likesOf(id).length} en común contigo</span>
      <div class="chips">${likesOf(id).map(l=>`<span class="chip ${S.interests.has(l)?'on':''}">${l}</span>`).join('')}</div>
    </div>
    <div style="display:flex;justify-content:center;gap:56px;padding:12px 0 24px;flex-shrink:0">
      ${S.chats[id]?`<button type="button" class="cta" data-act="chat" style="width:auto;padding:0 32px">Enviar mensaje</button>`:`
      <button type="button" class="round dark" data-act="nope" aria-label="Descartar">${ic('x',28,'#fff',3)}</button>
      <button type="button" class="round red" data-act="yes" aria-label="Conectar">${ic('check',32,'#fff',3)}</button>`}
    </div></div>`;
  document.getElementById('phone').appendChild(ov);
  let ph=0;const img=ov.querySelector('#sp');
  img.parentElement.onclick=e=>{if(e.target.closest('button'))return;const r=img.getBoundingClientRect();ph=(e.clientX-r.left<r.width/2)?Math.max(0,ph-1):Math.min(pp.photos.length-1,ph+1);img.src=IMG[pp.photos[ph][0]];img.style.objectPosition=pp.photos[ph][1];ov.querySelectorAll('.bars>div').forEach((b,i)=>b.classList.toggle('on',i===ph))};
  const close=cb=>{ov.classList.add('closing');ov.querySelector('.sheet').classList.add('closing');setTimeout(()=>{ov.remove();cb&&cb()},260)};
  ov.querySelector('.scrim').onclick=()=>close();
  ov.querySelector('[data-act=close]').onclick=()=>close();
  const chatB=ov.querySelector('[data-act=chat]'); if(chatB) chatB.onclick=()=>close(()=>openChat(id));
  const act=d=>close(()=>{
    if(from==='deck'&&current._decideTop) current._decideTop(d);
    else if(from==='likes'){S.likes=S.likes.filter(x=>x!==id); if(d>0) liked(id); else {toast(`Descartaste a ${pp.name}`);refresh()}}
    else if(d>0) liked(id);
  });
  const y=ov.querySelector('[data-act=yes]'),n=ov.querySelector('[data-act=nope]');
  if(y)y.onclick=()=>act(1); if(n)n.onclick=()=>act(-1);
}
function showMatch(id,already){
  const pp=PEOPLE[id],c=common(id);
  const ov=document.createElement('div');ov.className='overlay';
  ov.innerHTML=`<div class="match" role="dialog" aria-label="Es un match">
    <div class="duo"><div class="ring"><div><img src="${myPhoto().src}" alt="Tu foto" style="${myPhoto().st}"></div></div><div class="ring"><div><img src="${IMG[pp.img]}" alt="Foto de ${pp.name}" style="object-position:${pp.pos}"></div></div></div>
    <div style="display:flex;flex-direction:column;gap:8px"><span style="font-size:40px;font-weight:800;line-height:1.05">${already?'Ya son match':'¡Es un match!'}</span>
    <span style="font-size:16px;color:var(--mute);line-height:1.4">A ti y a ${pp.name} les gustan ${c} ${c===1?'cosa':'cosas'} en común.</span></div>
    <div class="chips" style="justify-content:center">${likesOf(id).filter(l=>S.interests.has(l)).map(l=>`<span class="chip on">${l}</span>`).join('')}</div>
    <div style="display:flex;flex-direction:column;gap:10px;width:100%;margin-top:8px">
      <button type="button" class="cta" data-act="msg">Enviar mensaje</button>
      <button type="button" class="ghost" data-act="keep">Seguir viendo</button></div></div>`;
  document.getElementById('phone').appendChild(ov);
  const close=cb=>{ov.style.transition='opacity .2s';ov.style.opacity=0;setTimeout(()=>{ov.remove();cb&&cb()},200)};
  ov.querySelector('[data-act=msg]').onclick=()=>close(()=>openChat(id));
  ov.querySelector('[data-act=keep]').onclick=()=>close(()=>refresh());
}

/* Explorar */
function rExplorar(el){
  const withStories=S.chatOrder.filter(id=>PEOPLE[id].stories);
  const sugg=DECKIDS.filter(id=>seekOk(id)&&!S.chats[id]).sort((a,b)=>score(b)-score(a));
  el.innerHTML=`<div class="scroll" style="padding:20px 16px 16px;display:flex;flex-direction:column;gap:16px">
    <h1 class="h1">Explorar</h1>
    <div style="display:flex;align-items:center;gap:8px">${icf('tri',18)}<span style="font-size:16px;font-weight:700">Historias 24 hrs de tus match</span></div>
    ${withStories.map(id=>{const pp=PEOPLE[id];return `<section style="display:flex;flex-direction:column;gap:12px;padding-bottom:16px;border-bottom:1px solid var(--line)">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px"><button type="button" data-chat="${id}" style="display:flex;align-items:center;gap:10px;background:none;border:0;padding:0;cursor:pointer"><div class="ring" style="width:48px;height:48px"><div><img src="${IMG[pp.img]}" alt="" style="object-position:${pp.pos}"></div></div><span style="font-size:18px;font-weight:700">${pp.name}</span></button><span style="font-size:13px;font-weight:500;color:var(--mute)">Historias destacadas</span></div>
      <div style="display:flex;gap:16px;padding-left:2px">${(pp.highlights||pp.stories.map(x=>[x])).map(g=>g[0]).map((s,i)=>`<button type="button" class="ring story-dot ${S.seenStories.has(id+i)?'seen':''}" data-story="${id}" data-i="${i}" aria-label="Ver historia destacada ${i+1} de ${pp.name}"><div><img src="${IMG[s[0]]}" alt="" style="object-position:${s[1]}"></div></button>`).join('')}</div></section>`}).join('')}
    ${sugg.length?`<section style="display:flex;flex-direction:column;gap:12px">
      <span style="font-size:18px;font-weight:700">Personas sugeridas</span>
      <div style="display:flex;gap:10px;overflow-x:auto;scrollbar-width:none;margin:0 -16px;padding:0 16px;scroll-snap-type:x mandatory">${sugg.map(id=>{const pp=PEOPLE[id];return `<button type="button" class="sugg" data-person="${id}"><img class="cover" src="${IMG[pp.img]}" alt="Foto de ${pp.name}" style="position:absolute;inset:0;object-position:${pp.pos}"><div class="lbl"><span style="font-size:14px;font-weight:700">${pp.name}, ${pp.age}</span>${(()=>{const g=likesOf(id).find(l=>S.interests.has(l));return g?`<span class="mini" style="display:flex;align-items:center;gap:4px;white-space:normal;line-height:1.2">${ic('heart',10,'#fff',2,'#fff')}${g}</span>`:''})()}</div></button>`}).join('')}</div>
    </section>`:''}</div>${nav('explorar')}`;
  bindNav(el);
  el.querySelectorAll('[data-story]').forEach(b=>b.onclick=()=>openStory(b.dataset.story,+b.dataset.i));
  el.querySelectorAll('[data-person]').forEach(b=>b.onclick=()=>openSheet(b.dataset.person,'explorar'));
  el.querySelectorAll('[data-chat]').forEach(b=>b.onclick=()=>openChat(b.dataset.chat));
}
function openStory(id,start,list){
  const pp=id==='me'?{name:meName(),img:IMG.__me?'__me':'esteban',pos:IMG.__me?'50% 50%':'50% 32%',stories:[['est1','50% 30%'],['eh4','50% 40%']],highlights:[[['est1','50% 30%'],['eh1','50% 40%'],['eh2','50% 30%']],[['eh4','50% 40%'],['eh3','50% 50%']]]}:PEOPLE[id];
  const groups=pp.highlights||pp.stories.map(x=>[x]);let g=start||0,items=groups[g],i=0,t0=0,raf=0,paused=false,elapsed=0;const DUR=4500;
  const ov=document.createElement('div');ov.className='overlay';
  ov.innerHTML=`<div class="story" role="dialog" aria-label="Historias de ${pp.name}">
    <div class="sbars">${items.map(()=>'<div><i></i></div>').join('')}</div>
    <div style="display:flex;align-items:center;gap:10px;padding:12px 12px 8px;position:relative;z-index:2"><div class="ring" style="width:38px;height:38px"><div><img src="${IMG[pp.img]}" alt="" style="object-position:${pp.pos}"></div></div><span style="font-weight:700">${pp.name}</span><span class="sub" style="font-size:13px" id="glbl">Destacada ${g+1}</span>
      <button type="button" class="iconbtn" data-act="x" aria-label="Cerrar" style="margin-left:auto">${ic('x',24,'#fff',2.5)}</button></div>
    <div style="flex:1;min-height:0;position:relative;margin:0 0 20px;border-radius:18px;overflow:hidden" id="sv"><img class="cover" id="si" alt="Historia de ${pp.name}" style="object-fit:contain;background:#000"></div></div>`;
  document.getElementById('phone').appendChild(ov);
  let bars=[];const im=ov.querySelector('#si'),sb=ov.querySelector('.sbars'),gl=ov.querySelector('#glbl');
  const setGroup=n=>{g=n;items=groups[g];sb.innerHTML=items.map(()=>'<div><i></i></div>').join('');bars=[...sb.querySelectorAll('i')];gl.textContent='Destacada '+(g+1);if(id!=='me')S.seenStories.add(id+g)};
  const show=k=>{if(k<0){if(g>0){setGroup(g-1);k=items.length-1}else k=0}
    if(k>=items.length){if(g+1<groups.length){setGroup(g+1);k=0}else{close();return}}
    i=k;im.src=IMG[items[i][0]];bars.forEach((b,j)=>b.style.width=j<i?'100%':'0');elapsed=0;t0=performance.now()};
  setGroup(g);
  const tick=now=>{if(!paused){const p=(elapsed+now-t0)/DUR;bars[i].style.width=Math.min(100,p*100)+'%';if(p>=1){show(i+1);if(!ov.isConnected)return}}raf=requestAnimationFrame(tick)};
  const close=()=>{cancelAnimationFrame(raf);ov.style.transition='opacity .2s';ov.style.opacity=0;setTimeout(()=>{ov.remove();if(current&&current.dataset.name==='explorar')refresh()},200)};
  const sv=ov.querySelector('#sv');let pd=0;
  sv.onpointerdown=()=>{pd=performance.now();paused=true;elapsed+=pd-t0};
  sv.onpointerup=e=>{paused=false;t0=performance.now();if(performance.now()-pd<250){const r=sv.getBoundingClientRect();show(e.clientX-r.left<r.width/3?i-1:i+1)}};
  ov.querySelector('[data-act=x]').onclick=close;
  show(i);raf=requestAnimationFrame(tick);
}

/* Likes */
function rLikes(el){
  el.innerHTML=`<div class="pad" style="display:flex;flex-direction:column;gap:16px;flex:1;min-height:0">
    <div class="head"><h1 class="h1">Likes</h1><span class="sub">Personas que te dieron like y aún no hacen match contigo</span></div>
    <div class="scroll" style="display:flex;flex-direction:column;gap:16px;padding-bottom:16px">
    ${S.likes.length?S.likes.map(id=>{const pp=PEOPLE[id];return `<button type="button" class="lcard" data-id="${id}" aria-label="Ver perfil de ${pp.name}">
      <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:12px;align-self:stretch">
        <div style="display:flex;align-items:center;gap:10px"><div class="ring" style="width:40px;height:40px"><div><img src="${IMG[pp.img]}" alt="" style="object-position:${pp.pos}"></div></div><span style="font-size:20px;font-weight:700">${pp.name}</span></div>
        <span style="font-size:13px;font-weight:600;color:var(--mute)">Gustos</span>
        <div style="display:flex;flex-wrap:wrap;gap:6px">${likesOf(id).map(l=>`<span class="lchip ${S.interests.has(l)?'on':''}">${l}</span>`).join('')}</div>
        <span style="font-size:12px;font-weight:600;display:flex;align-items:center;gap:6px;margin-top:auto">${icf('heart',14)}Te dio like</span>
      </div>
      <div class="ph"><img class="cover" src="${IMG[pp.img]}" alt="Foto de ${pp.name}" style="object-position:${pp.pos}"></div></button>`}).join('')
    :`<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:40px 20px">${icf('heart',40)}<span style="font-size:20px;font-weight:800">No tienes likes pendientes</span><span class="sub" style="font-size:15px">Sigue haciendo swipe para que más personas en tu sintonía te encuentren.</span><button type="button" class="cta" data-tab="swipe" style="margin-top:8px;font-size:16px;min-height:50px">Ir a Swipe</button></div>`}
    </div></div>${nav('likes')}`;
  bindNav(el);
  el.querySelectorAll('.lcard').forEach(b=>b.onclick=()=>openSheet(b.dataset.id,'likes'));
}

/* Chats */
function rChats(el){
  el.innerHTML=`<div class="pad" style="display:flex;flex-direction:column;gap:16px;flex:1;min-height:0">
    <div class="head"><h1 class="h1">Chats</h1><span class="sub">Personas con las que hiciste match</span></div>
    <div class="scroll" style="display:flex;flex-direction:column;gap:16px;padding-bottom:16px">
    ${S.chatOrder.map(id=>{const pp=PEOPLE[id],ch=S.chats[id],last=ch.msgs[ch.msgs.length-1];
      const prev=last?(last[0]==='me'?'Tú: '+last[1]:last[0]==='sys'?last[1]:last[1]):'¡Nuevo match! Di hola 👋';
      return `<button type="button" class="crow" data-id="${id}"><div class="av" style="width:64px;height:64px"><img class="cover" src="${IMG[pp.img]}" alt="Foto de ${pp.name}" style="object-position:${pp.pos}"></div>
      <div style="display:flex;flex-direction:column;gap:6px;min-width:0;flex:1"><span style="font-size:18px;font-weight:700">${pp.name}</span><span style="font-size:15px;line-height:1.35;color:${ch.unread?'#fff':'var(--mute)'};font-weight:${ch.unread?600:400};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(prev)}</span></div>
      ${ch.unread?'<span class="unread"></span>':''}</button>`}).join('')}
    </div></div>${nav('chats')}`;
  bindNav(el);
  el.querySelectorAll('.crow').forEach(b=>b.onclick=()=>openChat(b.dataset.id));
}
function openChat(id){
  if(current.dataset.name==='chat'&&current._params.id===id) return;
  if(!TABS.includes(current.dataset.name)){stack=[]}
  tab='chats'; push('chat',{id});
}
function bubble(m,anim){
  if(m[0]==='sys') return `<div class="b sys ${anim?'':'noanim'}">${icf('calendar',18)}${esc(m[1])}</div>`;
  return `<div class="b ${m[0]} ${anim?'':'noanim'}">${esc(m[1])}</div>`;
}
function rChat(el,p){
  const id=p.id,pp=PEOPLE[id],ch=S.chats[id];ch.unread=false;
  const D=dateOf(id), showIA=D.state==='pending'&&D.sent, enter=D.enter; D.enter=false;
  el.innerHTML=`
  <div class="chathead">
    <button type="button" class="iconbtn" data-act="back" aria-label="Volver">${ic('back',24,'#fff',2.5)}</button>
    <button type="button" data-act="profile" style="display:flex;align-items:center;gap:12px;background:none;border:0;padding:0;cursor:pointer"><div class="ring" style="width:44px;height:44px"><div><img src="${IMG[pp.img]}" alt="Foto de ${pp.name}" style="object-position:${pp.pos}"></div></div>
    <span style="font-size:20px;font-weight:700">${pp.name}</span></button>
    ${D.state==='declined'?`<button type="button" class="iconbtn" data-act="reopen" aria-label="Volver a proponer cita" style="margin-left:auto;background:var(--redbg)">${icf('spark',22)}</button>`:''}
  </div>
  <div class="msgs" id="msgs">${ch.msgs.map(m=>bubble(m,false)).join('')}</div>
  ${showIA?`<div class="ia ${D.min?'min':''} ${enter?'enter':''}" id="ia">
    <button type="button" class="iahead" data-act="toggle" aria-expanded="${!D.min}">${icf('spark',22)}<span style="font-size:18px;font-weight:800">IA Tinder</span><span style="margin-left:auto">${ic(D.min?'up':'down',22,'#B8B8B8',2.5)}</span></button>
    <p style="margin:0;font-size:15px;line-height:1.4">${id==='camila'?'¡Ya llevan más de 1 mes hablando fluidamente con Camila!':`¡Ya rompieron el hielo con ${pp.name}!`} ¿Te gustaría tener una cita con ${ella(id)}?</p>
    <span style="font-size:14px;font-weight:600;color:var(--mute)">Te sugerimos estos lugares… <span style="font-weight:500">elige los que te gusten</span></span>
    <div style="display:flex;gap:8px" id="places">${Object.entries(PLACES).map(([k,pl])=>`<button type="button" class="place ${D.picks.has(k)?'on':''}" data-place="${k}" aria-pressed="${D.picks.has(k)}">
      <div class="pimg"><img class="cover" src="${IMG[pl.img]}" alt="Foto de ${pl.name}" style="object-position:${pl.pos}"></div><span class="chk">${ic('check',14,'#fff',3.5)}</span>
      <div style="padding:10px 10px 12px;display:flex;flex-direction:column;gap:2px"><span class="cat">${pl.cat}</span><span style="font-size:14px;font-weight:700;line-height:1.2">${pl.name}</span></div></button>`).join('')}</div>
    <div style="display:flex;justify-content:center;gap:56px">
      <button type="button" class="round dark" data-act="decline" aria-label="No aceptar la cita" style="width:56px;height:56px">${ic('x',26,'#fff',3)}</button>
      <button type="button" class="round red" data-act="accept" aria-label="Aceptar cita" style="width:56px;height:56px">${ic('check',28,'#fff',3)}</button>
    </div></div>`:''}
  <form class="composer" id="comp" ${showIA&&!D.min?'style="display:none"':''}><input id="inp" placeholder="Escribe un mensaje…" autocomplete="off" aria-label="Mensaje"><button class="send" type="submit" aria-label="Enviar" disabled>${ic('send',20,'#fff',2)}</button></form>`;
  const msgs=el.querySelector('#msgs');const scroll=()=>msgs.scrollTop=msgs.scrollHeight;requestAnimationFrame(scroll);
  el.querySelector('[data-act=back]').onclick=()=>{pop()};
  el.querySelector('[data-act=profile]').onclick=()=>openSheet(id,'chat');
  const reo=el.querySelector('[data-act=reopen]');if(reo)reo.onclick=()=>{D.state='pending';D.min=false;refresh()};
  const inp=el.querySelector('#inp'),sb=el.querySelector('.send');
  inp.oninput=()=>sb.disabled=!inp.value.trim();
  let timers=[];
  el.querySelector('#comp').onsubmit=e=>{e.preventDefault();const v=inp.value.trim();if(!v)return;
    ch.msgs.push(['me',v]);msgs.insertAdjacentHTML('beforeend',bubble(['me',v],true));inp.value='';sb.disabled=true;scroll();
    if(ch.pending)return;
    ch.pending=true;
    const ty=document.createElement('div');ty.className='typing';ty.innerHTML='<i></i><i></i><i></i>';
    timers.push(setTimeout(()=>{if(el.isConnected){msgs.appendChild(ty);scroll()}},600));
    const t0=Date.now();
    replyFor(id).then(r=>{const wait=Math.max(0,1400+Math.min(1600,r.length*18)-(Date.now()-t0));
      setTimeout(()=>{ch.pending=false;ty.remove();ch.msgs.push(['them',r]);
        if(el.isConnected){msgs.insertAdjacentHTML('beforeend',bubble(['them',r],true));scroll()}else ch.unread=true;
        if(D.state==='pending'&&!D.sent){D.sent=true;D.enter=true;D.min=false;setTimeout(()=>{if(el.isConnected&&current===el)refresh()},1200)}},wait)});
  };
  el._cleanup=()=>timers.forEach(clearTimeout);
  if(showIA){
    const ia=el.querySelector('#ia'),comp=el.querySelector('#comp');
    el.querySelector('[data-act=toggle]').onclick=()=>{D.min=!D.min;ia.classList.toggle('min',D.min);comp.style.display=D.min?'flex':'none';el.querySelector('[data-act=toggle] span:last-child').innerHTML=ic(D.min?'up':'down',22,'#B8B8B8',2.5);setTimeout(scroll,360)};
    el.querySelectorAll('[data-place]').forEach(b=>b.onclick=()=>{const k=b.dataset.place;D.picks.has(k)?D.picks.delete(k):D.picks.add(k);b.classList.toggle('on',D.picks.has(k));b.setAttribute('aria-pressed',D.picks.has(k))});
    el.querySelector('[data-act=accept]').onclick=()=>{if(!D.picks.size){const pl=el.querySelector('#places');pl.classList.remove('shake');void pl.offsetWidth;pl.classList.add('shake');toast('Elige al menos un lugar que te guste');return}push('tombola',{id})};
    el.querySelector('[data-act=decline]').onclick=()=>push('decline',{id});
  }
}

/* Cita concretada: tómbola */
function rTombola(el,p){
  const id=p.id, pp=PEOPLE[id], D=dateOf(id), keys=Object.keys(PLACES);
  const herPick=keys[Math.floor(Math.random()*3)];
  const coincide=D.picks.has(herPick);
  const winner=coincide?herPick:keys[Math.floor(Math.random()*3)];
  const pl=PLACES[winner];
  const lights=Array.from({length:16},(_,i)=>{const a=i*Math.PI/8;return `<circle class="${i%2?'blink1':'blink2'}" cx="${(148*Math.sin(a)).toFixed(2)}" cy="${(-148*Math.cos(a)).toFixed(2)}" r="4.5" fill="${i%2?'#FFFFFF':'#FFD6DA'}"/>`}).join('');
  const seg=(rot,stroke,icon,label)=>`<g transform="rotate(${rot})" stroke="${stroke}" fill="none"><g transform="translate(0 -100) scale(1.15) translate(-12 -12)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${P[icon]}</g><text x="0" y="-62" text-anchor="middle" fill="${stroke}" stroke="none" style="font-family:Inter,sans-serif;font-size:14px;font-weight:800">${label}</text></g>`;
  el.style.background='radial-gradient(120% 60% at 50% 45%,#2A1216 0%,#121212 70%)';
  el.innerHTML=`<div style="display:flex;flex-direction:column;height:100%;padding:36px 20px 28px;gap:12px">
   <div style="display:flex;flex-direction:column;gap:8px;flex-shrink:0">
    <h1 class="h1" style="font-size:34px;line-height:1.1">¡Ambos aceptaron!</h1>
    <p style="margin:0;font-size:17px;line-height:1.4;color:var(--mute)">${coincide?`y ${pp.name} también eligió ${PLACES[herPick].name}.`:'pero no coincidieron en el lugar.'}</p>
    <p style="margin:0;font-size:17px;line-height:1.4;font-weight:700;color:var(--red)">${coincide?'¡Tienen cita!':'Será al azar, ¡suerte!…'}</p>
   </div>
   <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center"><svg viewBox="-170 -170 340 340" role="img" aria-label="Tómbola entre Cerro El Carbón, Vibra Fest y Pinsa" style="display:block;overflow:visible;width:100%;height:100%;max-width:340px;max-height:340px">
    <defs><radialGradient id="gRed" cx="0" cy="-60" r="140" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FF4A5A"/><stop offset="1" stop-color="#B5101E"/></radialGradient>
    <radialGradient id="gWhite" cx="0" cy="60" r="140" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E4E4E4"/></radialGradient>
    <radialGradient id="gDark" cx="-50" cy="-30" r="150" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3C3C3C"/><stop offset="1" stop-color="#181818"/></radialGradient>
    <linearGradient id="gRing" x1="0" y1="-1" x2="0" y2="1"><stop offset="0" stop-color="#FF4A5A"/><stop offset="1" stop-color="#A30F1D"/></linearGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity=".6"/></filter></defs>
    <circle r="162" fill="#1E1E1E" stroke="#FFFFFF" stroke-width="3"/><circle r="148" fill="none" stroke="url(#gRing)" stroke-width="24"/>${lights}<circle r="135" fill="#121212"/>
    <g id="wheel"><path d="M0 0 L-114.32 -66 A132 132 0 0 1 114.32 -66 Z" fill="url(#gRed)"/><path d="M0 0 L114.32 -66 A132 132 0 0 1 0 132 Z" fill="url(#gWhite)"/><path d="M0 0 L0 132 A132 132 0 0 1 -114.32 -66 Z" fill="url(#gDark)"/>
     <path d="M0 0 L-114.32 -66M0 0 L114.32 -66M0 0 L0 132" stroke="#121212" stroke-width="3"/>
     ${seg(0,'#FFFFFF','mountain','Cerro El Carbón')}${seg(120,'#121212','music','Vibra Fest')}${seg(240,'#FFFFFF','coffee','Pinsa')}</g>
    <circle r="132" fill="none" stroke="#FFFFFF" stroke-width="2" opacity=".85"/><circle r="28" fill="#FFFFFF" stroke="#E11D2E" stroke-width="6" filter="url(#sh)"/>
    <g transform="translate(-13 -13) scale(1.08)"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" fill="#E11D2E"/></g>
    <path d="M0 -112 L-17 -148 A17 17 0 1 1 17 -148 Z" fill="#FFFFFF" stroke="#E11D2E" stroke-width="4" stroke-linejoin="round" filter="url(#sh)"/><circle cx="0" cy="-152" r="6" fill="#E11D2E"/>
   </svg></div>
   <div style="flex-shrink:0;min-height:132px;display:flex;flex-direction:column;gap:12px;justify-content:center" id="out">
    <div style="display:flex;align-items:center;justify-content:center;gap:10px;font-size:18px;font-weight:700">${icf('spark',22)}Girando la tómbola…</div>
   </div></div>`;
  const wheel=el.querySelector('#wheel');
  const target=360*(coincide?2:6)-120*pl.seg+(Math.random()*50-25), dur=coincide?2200:5200, t0=performance.now();
  const ease=t=>1-Math.pow(1-t,4);let raf;
  const step=now=>{const t=Math.min(1,(now-t0)/dur);wheel.setAttribute('transform',`rotate(${(target*ease(t)).toFixed(2)})`);if(t<1)raf=requestAnimationFrame(step);else done()};
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){wheel.setAttribute('transform',`rotate(${target})`);setTimeout(done,300)}else raf=requestAnimationFrame(step);
  el._cleanup=()=>cancelAnimationFrame(raf);
  function done(){
    D.state='confirmed';D.place=winner;
    const ch=S.chats[id];ch.msgs.push(['sys',`Cita confirmada: ${pl.name} (${pl.cat})`]);
    const out=el.querySelector('#out');
    out.innerHTML=`<div class="result"><div style="display:flex;align-items:center;gap:8px">${icf('spark',22)}<span style="font-size:20px;font-weight:800">¡Lugar seleccionado!</span></div>
      <div style="display:flex;align-items:center;gap:14px"><div style="width:72px;height:72px;border-radius:18px;overflow:hidden;flex-shrink:0;background:var(--s3)"><img class="cover" src="${IMG[pl.img]}" alt="Foto de ${pl.name}" style="object-position:${pl.pos}"></div>
      <div style="display:flex;flex-direction:column;gap:2px"><span class="cat" style="font-size:12px">${pl.cat}</span><span style="font-size:20px;font-weight:700">${pl.name}</span></div></div></div>
      <button type="button" class="cta" data-act="go" style="animation:reveal .5s .2s both">Ir al chat con ${pp.name}</button>`;
    out.querySelector('[data-act=go]').onclick=()=>{stack=[{name:'chats',params:{}}];tab='chats';go('chat',{id},'pop')};
  }
}

/* Cita no aceptada */
function rDecline(el,p){
  const id=p.id, pp=PEOPLE[id], D=S.decline;
  const reasons=['Necesito más tiempo para conocernos','Confianza y seguridad','Prefiero seguir conversando por chat','Todavía no me siento a gusto','Otro motivo'];
  const safe=['Verificar su perfil','Reunirnos en un lugar público','Videollamada antes','Conocerla más'];
  el.innerHTML=`<div style="display:flex;flex-direction:column;height:100%;padding:20px 20px 28px;gap:16px">
   <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-shrink:0">
    <button type="button" class="iconbtn" data-act="back" aria-label="Volver" style="margin-left:-10px">${ic('back',24,'#fff',2.5)}</button>
    <div class="prog"><div style="width:50%"></div></div>
    <button type="button" class="textbtn" data-act="skip">Saltar</button></div>
   <div class="scroll" style="display:flex;flex-direction:column;gap:16px">
    <div style="display:flex;flex-direction:column;gap:10px"><h1 class="h1">Cuéntanos qué <span style="color:var(--red)">pasó</span></h1>
    <p style="margin:0;font-size:16px;line-height:1.45;color:var(--mute)">No aceptaste la cita con ${pp.name}. ¿Por qué? Tu respuesta nos ayuda a que tus próximas citas sean más cómodas.</p></div>
    <div style="display:flex;flex-direction:column;gap:10px" role="radiogroup">${reasons.map(r=>`<button type="button" role="radio" class="radio ${D.reason===r?'on':''}" aria-checked="${D.reason===r}" data-r="${esc(r)}"><span class="dot">${D.reason===r?ic('check',16,'#fff',3.5):''}</span>${r}</button>`).join('')}</div>
    <div style="display:flex;flex-direction:column;gap:10px"><span style="font-size:16px;font-weight:700">¿Qué te haría sentir más seguro/a?</span>
    <div style="display:flex;flex-wrap:wrap;gap:8px">${safe.map(s=>`<button type="button" class="pill ${D.safe.has(s)?'on':''}" aria-pressed="${D.safe.has(s)}" data-s="${esc(s)}">${s}</button>`).join('')}</div></div>
   </div>
   <button type="button" class="cta" data-act="send" style="flex-shrink:0">Enviar respuesta</button></div>`;
  el.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{D.reason=b.dataset.r;el.querySelectorAll('[data-r]').forEach(x=>{const on=x.dataset.r===D.reason;x.classList.toggle('on',on);x.setAttribute('aria-checked',on);x.querySelector('.dot').innerHTML=on?ic('check',16,'#fff',3.5):''})});
  el.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{const s=b.dataset.s;D.safe.has(s)?D.safe.delete(s):D.safe.add(s);b.classList.toggle('on',D.safe.has(s));b.setAttribute('aria-pressed',D.safe.has(s))});
  el.querySelector('[data-act=back]').onclick=()=>pop();
  el.querySelector('[data-act=skip]').onclick=()=>{dateOf(id).state='declined';stack=[{name:'chats',params:{}}];go('chat',{id},'pop')};
  el.querySelector('[data-act=send]').onclick=()=>{dateOf(id).state='declined';push('tips',{id})};
}

/* Tips para Camila */
function rTips(el,p){
  const id=p.id, pp=PEOPLE[id];
  const tips=[['phone','Llamadas telefónicas','Escuchar tu voz acerca más que un mensaje.',`Llamando a ${pp.name}…`],['video','Videollamadas','Verse y conversar en vivo da más seguridad.',`Iniciando videollamada con ${pp.name}…`],['cam','Instantáneas del día','Comparte fotos de tus momentos más locos.','Abriendo cámara…']];
  el.innerHTML=`<div style="display:flex;flex-direction:column;height:100%;padding:28px 20px 28px;gap:14px">
   <div class="scroll" style="display:flex;flex-direction:column;gap:14px">
   <div style="display:flex;flex-direction:column;gap:10px">
    <div style="display:flex;align-items:center;gap:8px">
     ${mascot(112,131)}
     <div style="display:flex;flex-direction:column;gap:8px;min-width:0">
      <span style="align-self:flex-start;display:flex;align-items:center;gap:6px;background:var(--redbg);border:1.5px solid var(--red);border-radius:999px;padding:7px 12px;font-size:12px;font-weight:700">${icf('spark',14)}Tips de Tinder</span>
      <h1 class="h1" style="font-size:26px">Sigan construyendo <span style="color:var(--red)">confianza</span></h1></div>
    </div>
    <p style="margin:0;font-size:15px;line-height:1.45;color:var(--mute)">${esc(S.decline.reason)} es un motivo válido. Esto no es un no para siempre, ¡aún hay conexión!</p>
   </div>
   <div style="display:flex;flex-direction:column;gap:8px">${tips.map(([i,t,d,a])=>`<button type="button" class="tip" data-toast="${esc(a)}"><div class="tico">${ic(i,22)}</div><div style="display:flex;flex-direction:column;gap:2px;min-width:0"><span style="font-size:16px;font-weight:700">${t}</span><span style="font-size:13px;line-height:1.35;color:var(--mute)">${d}</span></div></button>`).join('')}</div>
   <span style="font-size:16px;font-weight:700">Fortalezcan la confianza</span>
   <div style="background:var(--s1);border-radius:20px;padding:14px 16px;display:flex;flex-direction:column;gap:10px">
    <span style="font-size:16px;font-weight:700">Abre más tu mundo</span>
    <span style="font-size:13px;line-height:1.4;color:var(--mute)">Cuéntale más de tus gustos, capacidades y experiencias de vida para fortalecer el lazo.</span>
    <div style="display:flex;flex-wrap:wrap;gap:6px"><button type="button" class="pill on" data-act="gustos" style="font-size:13px;min-height:0;padding:10px 13px">Gustos</button><button type="button" class="pill on" data-act="exp" style="font-size:13px;min-height:0;padding:10px 13px">Experiencias de vida</button></div>
   </div>
   <div style="display:flex;align-items:center;justify-content:center;gap:8px;font-size:14px;font-weight:600">${icf('heart',18)}¡Ánimo! Las mejores conexiones se arman paso a paso.</div>
   </div>
   <button type="button" class="cta" data-act="go" style="flex-shrink:0">Seguir conversando</button></div>`;
  el.querySelectorAll('[data-toast]').forEach(b=>b.onclick=()=>toast(b.dataset.toast));
  el.querySelector('[data-act=gustos]').onclick=()=>{stack=[];switchTab('perfil')};
  el.querySelector('[data-act=exp]').onclick=()=>{stack=[{name:'chats',params:{}}];tab='chats';go('chat',{id},'pop');setTimeout(()=>{const i=document.getElementById('inp');if(i){i.value='Te cuento algo que nunca te he contado: ';i.dispatchEvent(new Event('input'));i.focus()}},400)};
  el.querySelector('[data-act=go]').onclick=()=>{stack=[{name:'chats',params:{}}];tab='chats';go('chat',{id},'pop')};
}

/* Perfil propio */
function rPerfil(el){
  const u=S.user||{}, ph=myPhoto(), mine=[...S.mine].length?[...S.mine]:['Senderismo y trekking','Música','Cafeterías'];
  el.innerHTML=`<div class="scroll" style="padding:20px 16px 16px;display:flex;flex-direction:column;gap:14px">
   <div style="display:flex;align-items:center;gap:14px;padding-bottom:14px;border-bottom:2px solid var(--red)">
    <div class="ring" style="width:64px;height:64px;padding:3px"><div><img src="${ph.src}" alt="Tu foto de perfil" style="${ph.st}"></div></div>
    <div style="display:flex;flex-direction:column;gap:8px;min-width:0;flex:1"><h1 class="h1" style="font-size:28px;overflow:hidden;text-overflow:ellipsis">${esc(meName())}</h1>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><span style="display:flex;align-items:center;gap:6px;background:var(--redbg);border:1.5px solid var(--red);border-radius:999px;padding:7px 12px;font-size:13px;font-weight:700">${meAge()} años</span><span style="display:flex;align-items:center;gap:6px;background:var(--redbg);border:1.5px solid var(--red);border-radius:999px;padding:7px 12px;font-size:13px;font-weight:700">${icf('star',14)}${zodiac(u.birth)}</span><span style="display:flex;align-items:center;gap:6px;background:var(--redbg);border:1.5px solid var(--red);border-radius:999px;padding:7px 12px;font-size:13px;font-weight:700">${ic('brief',14,'#E11D2E',2.4)}${esc(u.job||'Publicista')}</span><span style="display:flex;align-items:center;gap:6px;background:var(--redbg);border:1.5px solid var(--red);border-radius:999px;padding:7px 12px;font-size:13px;font-weight:700">${icf('heart',14)}Busca ${!u.busca||u.busca==='Relación estable'?'relación seria':esc(u.busca.toLowerCase())}</span></div></div>
    <button type="button" class="edit" data-act="data" aria-label="Editar datos">${ic('pencil',14,'#fff',2)}</button>
   </div>
   <span style="font-size:18px;font-weight:700">Historias destacadas</span>
   <div style="display:flex;gap:12px"><button type="button" class="hl" data-i="0" aria-label="Ver historia destacada 1" style="position:relative"><img class="cover" src="${IMG.est1}" alt="Historia destacada con sombrero rosado y osito" style="object-position:50% 30%"><span style="position:absolute;top:8px;right:8px;background:rgba(0,0,0,.6);border-radius:999px;padding:4px 8px;font-size:11px;font-weight:700;color:#fff">3 fotos</span></button><button type="button" class="hl" data-i="1" aria-label="Ver historia destacada 2" style="position:relative"><img class="cover" src="${IMG.eh4}" alt="Historia destacada comiendo un burrito" style="object-position:50% 40%"><span style="position:absolute;top:8px;right:8px;background:rgba(0,0,0,.6);border-radius:999px;padding:4px 8px;font-size:11px;font-weight:700;color:#fff">2 fotos</span></button></div>
   <div style="display:flex;gap:14px">
    <div style="flex:1.15;min-width:0;display:flex;flex-direction:column;gap:10px">
     <div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><span style="font-size:18px;font-weight:700">Gustos</span><button type="button" class="edit" data-act="mine">${ic('pencil',14,'#fff',2)}Editar</button></div>
     <div style="display:flex;flex-wrap:wrap;gap:7px">${mine.map(l=>`<span class="chip" style="font-size:13px;padding:10px 13px;white-space:normal">${l}</span>`).join('')}</div>
    </div>
    <div style="flex:.85;min-width:0;display:flex;flex-direction:column;gap:10px">
     <span style="font-size:18px;font-weight:700">Playlist</span>
     <div style="position:relative;width:100%;aspect-ratio:1/1;border-radius:20px;overflow:hidden;background:linear-gradient(135deg,#FF4A5A,#8E0E1A);display:flex;align-items:center;justify-content:center">
      ${S.playing?'<div class="eq"><i></i><i></i><i></i><i></i></div>':ic('music',52,'#fff',1.8)}
      <button type="button" data-act="play" aria-label="${S.playing?'Pausar':'Reproducir'} playlist" style="position:absolute;right:8px;bottom:8px;width:44px;height:44px;border-radius:50%;border:0;background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0">${S.playing?ic('pause',20,'#E11D2E',3):icf('play',20)}</button>
     </div>
     <div style="display:flex;flex-direction:column;gap:2px"><span style="font-size:14px;font-weight:700">Mi playlist</span><span style="font-size:12px;line-height:1.3;color:var(--mute)">${S.playing?'Sonando ahora…':'Mis gustos musicales'}</span></div>
    </div>
   </div>
   <div style="background:var(--s1);border-radius:20px;padding:14px 16px;display:flex;flex-direction:column;gap:10px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><span style="font-size:16px;font-weight:700">Mi persona ideal</span><button type="button" class="edit" data-act="ideal">${ic('pencil',14,'#fff',2)}Editar</button></div>
    <span style="font-size:13px;color:var(--mute)">Quiero conocer: ${esc(u.seek||'Todos')} · Busco: ${esc(u.busca||'Lo que surja')}</span>
    <div style="display:flex;flex-wrap:wrap;gap:6px">${[...S.interests].map(l=>`<span class="lchip on">${l}</span>`).join('')}</div>
   </div>
   <button type="button" class="textbtn" data-act="logout" style="color:var(--mute);font-size:14px;align-self:center">Cerrar sesión y reiniciar demo</button>
  </div>${nav('perfil')}`;
  bindNav(el);
  el.querySelectorAll('button.hl').forEach(b=>b.onclick=()=>openStory('me',+b.dataset.i));
  el.querySelector('[data-act=mine]').onclick=()=>push('misgustos',{edit:true});
  el.querySelector('[data-act=ideal]').onclick=()=>push('onboarding',{edit:true});
  el.querySelector('[data-act=data]').onclick=()=>push('registro',{edit:true});
  el.querySelector('[data-act=play]').onclick=()=>{S.playing=!S.playing;refresh()};
  el.querySelector('[data-act=logout]').onclick=()=>{try{['interests','onboarded','user','mine'].forEach(k=>localStorage.removeItem('pi_'+k))}catch(e){}location.reload()};
}

/* inicio */
buildDeck();
if(S.user&&S.user.photo)IMG.__me=S.user.photo;
if(S.onboarded&&S.user){tab='swipe';go('swipe');scheduleLike(7000)} else go('welcome');
