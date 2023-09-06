// sticky header
$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $('.navbar').addClass('floatingNav');
    } else {
        $('.navbar').removeClass('floatingNav');
    }
});

const swiper = new Swiper('.swiper-container-horizontal', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    }
});
const navItems = document.querySelectorAll(".product-module-wrapper .nav-item");

navItems.forEach((navItem, index) => {
  const rotation = index * 45;
  const translate = 135;

  navItem.style.transform = `rotate(${rotation}deg) translate(${translate}%) rotate(-${rotation}deg)`;
});













