$('.dropdown').hover(
  function() {
    $(this).addClass('show');
    $(this).find('.dropdown-menu-main').addClass('show');
  },
  function() {
    $(this).removeClass('show');
    $(this).find('.dropdown-menu-main').removeClass('show');
  }
);

