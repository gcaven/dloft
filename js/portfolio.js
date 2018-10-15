function initPage() {

  // Portfolo filter logic
  var commsToggle = document.querySelector('.portfolioroot-page__filter-button.communication');
  var digitalToggle = document.querySelector('.portfolioroot-page__filter-button.digital');
  var identityToggle = document.querySelector('.portfolioroot-page__filter-button.identity');
  var allToggle = document.querySelector('.portfolioroot-page__filter-button.all');

  var commsTiles = document.querySelectorAll('.portfolio-grid__item.communication');
  var digitalTiles = document.querySelectorAll('.portfolio-grid__item.digital');
  var identityTiles = document.querySelectorAll('.portfolio-grid__item.identity');

  function revealComms() {
    for (var i = 0; i < commsTiles.length; i++) {
      commsTiles[i].classList.remove('hidden');
    }
  }

  function removeComms() {
    // commsToggle.classList.remove('active');
    for (var i = 0; i < commsTiles.length; i++) {
      commsTiles[i].classList.add('hidden');
    }
  }

  function revealDigital() {
    for (var i = 0; i < digitalTiles.length; i++) {
      digitalTiles[i].classList.remove('hidden');
    }
  }

  function removeDigital() {
    // digitalToggle.classList.remove('active');
    for (var i = 0; i < digitalTiles.length; i++) {
      digitalTiles[i].classList.add('hidden');
    }
  }

  function revealIdentity() {
    for (var i = 0; i < identityTiles.length; i++) {
      identityTiles[i].classList.remove('hidden');
    }
  }

  function removeIdentity() {
    // commsToggle.classList.remove('active');
    for (var i = 0; i < identityTiles.length; i++) {
      identityTiles[i].classList.add('hidden');
    }
  }

  commsToggle.onclick = function () {
    // commsToggle.classList.add('active');
    revealComms();
    removeDigital();
    removeIdentity();
  }

  digitalToggle.onclick = function () {
    // digitalToggle.classList.add('active');
    revealDigital();
    removeComms();
    removeIdentity();
  }

  identityToggle.onclick = function() {
    // identityToggle.classList.add('active');
    revealIdentity();
    removeComms();
    removeDigital();
  }

  allToggle.onclick = function() {
    revealComms();
    revealDigital();
    revealIdentity();
  }
}

document.addEventListener('DOMContentLoaded', initPage, false);
