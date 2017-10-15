(() => {
  const triggers = $('#quoteSwitcher').children();
  let currentPosition = 1;

  let interval = setInterval(() => {
    if(currentPosition >= triggers.length) {
      currentPosition = 0;
    }
    $(triggers[currentPosition]).trigger('click');
    currentPosition++;
  }, 8000);

  triggers.on('click', (e) => {
    if(e.hasOwnProperty('originalEvent')) {
      // Only clear on a user click
      clearInterval(interval);
    }
  });
})();
