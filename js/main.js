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
      controls: `<button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play"><img src="/img/Play-BTN.png" /><span class="plyr__sr-only">Play</span></button>
      <button type="button" class="plyr__control plyr__tab-focus plyr__custom-pause-button"
        data-plyr="play" aria-label="Play">
        <span role="presentation" focusable="false" xlink:href="#plyr-pause">
          PAUSE
        </span>
      </button>`
    }
  );
}

document.addEventListener('DOMContentLoaded', initPage, false);
