const frames=['none','classic','neon'];
const fsel=document.getElementById('frame');
const fo=document.getElementById('frameOverlay');
frames.forEach(f=>{const o=document.createElement('option');o.value=f;o.text=f;fsel.appendChild(o);});
fsel.onchange=()=>{fo.className='frame-overlay';if(fsel.value!=='none')fo.classList.add('frame-'+fsel.value);};
