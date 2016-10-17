// menu
var toggler = document.getElementById('toggler');
toggler.onclick = function(event){
  event.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('main-nav').classList.toggle('main-nav--visible');
  // document.getElementById('page-header').classList.toggle('page-header--menu-open');
}
