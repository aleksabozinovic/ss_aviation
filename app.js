const burger = document.querySelector(".burger__div");
const closeBurger = document.querySelector(".close__burger");
const navCol2 = document.querySelector(".nav--col-2");

burger.addEventListener("click", () => {
  navCol2.classList.add("active");
});

closeBurger.addEventListener("click", () => {
  navCol2.classList.remove("active");
});
