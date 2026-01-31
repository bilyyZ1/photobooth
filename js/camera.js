const video=document.getElementById('video');
let stream=null,useFront=true;
async function startCamera(){
 if(stream) stream.getTracks().forEach(t=>t.stop());
 stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:useFront?'user':'environment'},audio:false});
 video.srcObject=stream;
}
startCamera();
document.getElementById('switchCam').onclick=()=>{useFront=!useFront;startCamera();};
