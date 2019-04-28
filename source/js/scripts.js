// <script type="text/javascript">
  var navMain = document.querySelector('.main-nav__list');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.add('main-nav__list--menu-close');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav__list--menu-close')) {
      navMain.classList.remove('main-nav__list--menu-close');
      navMain.classList.add('main-nav__list--menu-opened');
    } else {
      navMain.classList.add('main-nav__list--menu-close');
      navMain.classList.remove('main-nav__list--menu-opened');
    }
  });
// </script>
