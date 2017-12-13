var btnPrev = document.querySelector('.btn_prev');
var btnNext = document.querySelector('.btn_next');
var prev = 0;
var polosa = document.getElementById('polosa');
btnPrev.addEventListener('click', function(){
  prev = prev + 800;
  if ( prev  > 0) {
    prev =  -3200;
    }
  polosa.style.left = prev +"px";

})

btnNext.addEventListener('click', function(){
  prev = prev - 800;
  console.log(prev);
  console.dir(polosa.offsetWidth + prev);
  if ((polosa.offsetWidth + prev) < 800) {
    prev = 0;
  }
  polosa.style.left = prev +"px";
});
