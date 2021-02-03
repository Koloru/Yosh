document.body.addEventListener('click', ()=>{
  window.location.replace("https://www.syko.cc/rushia")
})

const x = document.querySelector('video')
function playVideo() {
  x.play();
  x.loop = true;
}
