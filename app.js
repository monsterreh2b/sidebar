const menu = document.querySelector(".sidebar-toggle");
const close = document.querySelector(".close-btn");

const sidebar = document.querySelector(".sidebar");


menu.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
});

close.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});