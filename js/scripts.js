var apply = document.querySelector('.offer__btn');
var popup = document.querySelector('.modal-window');
var close = document.querySelector('.modal-window__exit');
var hide = document.querySelector('.modal-window--hide');
var show = document.querySelector('.modal-window--show');

apply.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-window--hide');
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-window--hide");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-window--show")) {
      popup.classList.remove("modal-window--show");
      popup.classList.add("modal-window--hide");
    }
  }
});
