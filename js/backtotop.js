function initPage() {
  var bttVisible = false;
  var bttButton = document.querySelector('.page__back-to-top');
  bttButton.onclick = function () {
    window.scrollTo(0, 0);
    bttVisible = false;
    bttButton.classList.remove('visible');
  }
  function checkScrollPos() {
    let threshold = 500;
    if (window.innerWidth <= 767) {
      threshold = 350;
    }
    if (window.scrollY > threshold && !bttVisible) {
      bttVisible = true;
      bttButton.classList.add('visible');
    } else if (window.scrollY <= threshold && bttVisible) {
      bttVisible = false;
      bttButton.classList.remove('visible');
    }
  }
  document.addEventListener('scroll', checkScrollPos, false);
}

document.addEventListener('DOMContentLoaded', initPage, false);
