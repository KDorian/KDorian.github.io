$('a[href*="#"]:not([href="#"],[href="#carousel-tictactoe"],[href="#carousel-profgoethe"],[href="#carousel-gotapp"],[href="#carousel-weatherapp"],[href="#carousel-blackjack"],[href="#carousel-pixelartmaker"],[href="#carousel-myresume"],[href="#carousel-todolist"],[href="#carousel-drukomatic"],[href="#carousel-robomaticon"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
