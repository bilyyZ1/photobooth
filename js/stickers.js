const stickers=['none','😀','🔥','⭐'];
const s=document.getElementById('sticker');
stickers.forEach(x=>{const o=document.createElement('option');o.value=x;o.text=x;s.appendChild(o);});
