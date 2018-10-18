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
      controls: `<button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play"><img src="/img/Play-BTN.png"/><span class="plyr__sr-only">Play</span></button><button type="button" class="plyr__control plyr__tab-focus" data-plyr="play" aria-label="Play"><svg class="icon--pressed" role="presentation" focusable="false"><use xlink:href="#plyr-pause"></use></svg><svg class="icon--not-pressed" role="presentation" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="label--pressed plyr__tooltip">Pause</span><span class="label--not-pressed plyr__tooltip">Play</span></button>`
    }
  );
}

document.addEventListener('DOMContentLoaded', initPage, false);
