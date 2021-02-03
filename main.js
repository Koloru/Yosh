document.body.addEventListener('click', ()=>{
  window.location.replace("https://www.youtube.com/watch?v=e05NDRsxL5Y")
})

const x = document.querySelector('video')
function playVideo() {
  x.play();
  x.loop = true;
}
