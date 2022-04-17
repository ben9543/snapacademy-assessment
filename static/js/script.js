var isOpen = false;
const hamburgers = document.getElementsByClassName("hamburger");
const menuList = document.getElementById("toggle-menu");
const items = menuList.getElementsByTagName("li");
const copyright = document.getElementById("copyright");
const banner = document.getElementById("banner");
const bannerButton = document.getElementById("banner-button");
function noScroll() {
    window.scrollTo(0, 0)
}
// Copy right year update
copyright.innerText += new Date().getFullYear();
Array.from(hamburgers).forEach((ham)=>{
    ham.addEventListener("click", ()=>{
        menuList.style.transform = "translateX(0)";
        menuList.style.opacity = "1";
        isOpen = true;
    });
});
Array.from(items).forEach(item=>{
    item.addEventListener("click", ()=>{
        menuList.style.transform = "translateX(-100%)";
        menuList.style.opacity = "0";
        isOpen = false;
    });
});
if(isOpen){
    window.addEventListener("scroll", noScroll)
} else {
    window.removeEventListener("scroll", noScroll);
}

bannerButton.addEventListener("click", ()=>{
    banner.remove() = "none";
});