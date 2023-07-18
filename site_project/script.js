var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
  dropdown.addEventListener('mouseenter', function() {
    this.classList.add('show');
    var dropdownMenu = this.querySelector('.dropdown-menu-main');
    if (dropdownMenu) {
      dropdownMenu.classList.add('show');
    }
  });

  dropdown.addEventListener('mouseleave', function() {
    this.classList.remove('show');
    var dropdownMenu = this.querySelector('.dropdown-menu-main');
    if (dropdownMenu) {
      dropdownMenu.classList.remove('show');
    }
  });
});

