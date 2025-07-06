const menuBtn = document.querySelector('.menu');
// console.log(menuBtn);
const navItem = document.querySelector('.nav-items');
// console.log(navItems);
menuBtn.addEventListener("click", function(){
    // alert("Menu button clicked!");
    // console.log("Menu button clicked!");
    navItem.classList.toggle('show');
    if (navItem.classList.contains('show')) {
        menuBtn.src = 'image/icon/beef-cross.svg'
    } else {
            menuBtn.src = 'image/icon/beef-menu.svg';
        }
});