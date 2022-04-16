var isOpen = false;
const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("toggle-menu");
const items = menuList.getElementsByTagName("li");
function noScroll() {
    window.scrollTo(0, 0)
}
hamburger.addEventListener("click", ()=>{
    menuList.style.transform = "translateX(0)";
    menuList.style.opacity = "1";
    isOpen = true;
});
Array.from(items).forEach(item=>{
    item.addEventListener("click", ()=>{
        menuList.style.transform = "translateX(-100%)";
        menuList.style.opacity = "0";
    });
});
if(isOpen){
    window.addEventListener("scroll", noScroll)
} else {
    window.removeEventListener("scroll", noScroll);
}