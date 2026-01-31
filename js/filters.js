const filters=[
 {n:'Normal',v:'none'},
 {n:'Grayscale',v:'grayscale(1)'},
 {n:'Sepia',v:'sepia(1)'},
 {n:'Vibrant',v:'saturate(1.6)'},
 {n:'Contrast',v:'contrast(1.4)'},
 {n:'Blur',v:'blur(2px)'},
 {n:'Hue',v:'hue-rotate(90deg)'}
];
const fs=document.getElementById('filter');
filters.forEach(f=>{const o=document.createElement('option');o.value=f.v;o.text=f.n;fs.appendChild(o);});
fs.onchange=()=>{video.style.filter=fs.value==='none'?'none':fs.value;};
