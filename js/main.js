function initPage() {

  // Mobile menu toggle logic
  var menuToggle = document.querySelector('.site-header__mobile-toggle');
  var mobileMenu = document.querySelector('.site-header__menu');
  var body = document.querySelector('body');
  menuToggle.onclick = function () {
    menuToggle.classList.toggle('menu-open');
    mobileMenu.classList.toggle('menu-open');
    body.classList.toggle('menu-open');
  }

  // Setup custom video players
  const players = Plyr.setup(
    document.querySelectorAll('video'),
    {
      controls: ['play-large']
    }
  );
}

document.addEventListener('DOMContentLoaded', initPage, false);
