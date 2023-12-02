window.addEventListener("scroll", function () {
  var navLinks = document.querySelectorAll(".scroll-nav a");
  var fromTop = window.scrollY;
  navLinks.forEach(function (link) {
    var section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
