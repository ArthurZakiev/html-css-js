window.addEventListener("DOMContentLoaded", function() {

  /*Search*/
  document.querySelector(".header__search-btn").addEventListener("click", function(event) {
    document.querySelector(".header__search").classList.add("search__form-open");
    document.querySelector(".search__form-field").removeAttribute("tabindex");
    document.querySelector(".search__form--btn-submit").removeAttribute("tabindex");
    document.querySelector(".header__search-close-button").removeAttribute("tabindex");
  });
  document.querySelector(".header__search-close-button").addEventListener("click", function(event) {
    document.querySelector(".header__search").classList.remove("search__form-open");
    document.querySelector(".search__form-field").setAttribute("tabindex","-1");
    document.querySelector(".search__form--btn-submit").setAttribute("tabindex","-1");
    document.querySelector(".header__search-close-button").setAttribute("tabindex","-1");
  });

});
