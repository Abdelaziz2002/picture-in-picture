const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

async function selectmediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        alert("ammmmmm")
    }
}
buttonElement.addEventListener('click',async ()=>{
    buttonElement.disabled=true;
    await videoElement.requestPictureInPicture();
    buttonElement.disabled=false;
})
//onload
selectmediaStream();