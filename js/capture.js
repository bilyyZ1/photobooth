const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
const timerSel=document.getElementById('timer');
document.getElementById('capture').onclick=()=>{
 const t=parseInt(timerSel.value,10);
 setTimeout(()=>{
  canvas.style.display='block';
  ctx.filter=video.style.filter||'none';
  ctx.drawImage(video,0,0,canvas.width,canvas.height);
 },t*1000);
};
document.getElementById('download').onclick=()=>{
 const a=document.createElement('a');a.download='bili9d.png';a.href=canvas.toDataURL('image/png');a.click();
};
