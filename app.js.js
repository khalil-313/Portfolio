let ulSideBar = document.querySelector(".nav-sidebar");
let sidBarBtn = document.querySelector(".open");
let sidBarBtnClose = document.querySelector(".close");
let humbergerLinks = document.querySelectorAll(".huber-links");
console.log(humbergerLinks);

sidBarBtn.addEventListener("click", () => {
  ulSideBar.classList.toggle("show");
  sidBarBtn.style.display = "none";
  sidBarBtnClose.style.display = "block";
});

sidBarBtnClose.addEventListener("click", () => {
  ulSideBar.classList.toggle("show");
  sidBarBtnClose.style.display = "none";
  sidBarBtn.style.display = "block";
});
humbergerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    ulSideBar.classList.toggle("show");
    sidBarBtnClose.style.display = "none";
    sidBarBtn.style.display = "block";
  });
});
