$(function () {
  var mixer = mixitup(".works");

  const burger = document.querySelector(".burger");
  const headerNav = document.querySelector(".header__nav");
  const bodyLock = document.querySelector("body");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
    headerNav.classList.toggle("active");
    bodyLock.classList.toggle("lock");
  });

  // const headerHeight = header.Nav.offsetHeight;

  headerNav.addEventListener("click", (event) => {
    if (event.target.classList.contains("menu__link")) {
      event.preventDefault();
      if (window.innerWidth <= 992) {
        burger.classList.remove("burger--active");
        headerNav.classList.remove("active");
        bodyLock.classList.toggle("lock");
      }
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== headerNav) {
      burger.classList.remove("burger--active");
      headerNav.classList.remove("active");
      bodyLock.classList.remove("lock");
    }
  });
});

$(".menu a, .footer a, .logo").on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top }, 1500);
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 200) {
    $(".header__nav").addClass("sticky");
  } else {
    $(".header__nav").removeClass("sticky");
  }
});
