function initPlyr() {
  const players = Plyr.setup(
    document.querySelectorAll('video'),
    {
      controls: ['play-large']
    }
  );
}

document.addEventListener('DOMContentLoaded', initPlyr, false);
