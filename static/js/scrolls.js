const allSections = document.getElementsByTagName("section");
const allNavItems = document.getElementsByClassName("nav_item");
const nav = document.getElementById("navigator");
const NAVGAP = 20;

var lastNavPos = window.pageYOffset || document.documentElement.scrollTop;
var clickedMenu = null;
var currentSection = null;
var currentSectionYOffset = null;

// Add click event to all nav items
Array.from(allNavItems).forEach(item => {
    item.addEventListener("click", function(){
        // The main difference between children and childNodes property 
        // is that children work upon elements and childNodes on nodes 
        // including non-element nodes like text and comment nodes.
        clickedMenu = item.children[0].getAttribute("href").substring(1);
    });
});

// Navbar scorll event
document.addEventListener("scroll", function(){
    var newNavPos = window.pageYOffset || document.documentElement.scrollTop;
    
    if (clickedMenu){
        currentSection = document.getElementById(clickedMenu);
        currentSectionYOffset = currentSection.getBoundingClientRect().top;
        lastNavPos = newNavPos;
        if (currentSectionYOffset === 0){ // Only updates when currentSectionYOffset <= 0
            clickedMenu = null;
        }
    }else{
        if(newNavPos===0){ // Nav at the top
    
            // Styling ...
            nav.style.transform = "translateY(0px)";
            nav.style.opacity = "1";
            
            // Update
            lastNavPos = newNavPos;
        } else if (lastNavPos > newNavPos){ // Upscrolls
            // Styling ...
            nav.style.transform = "translateY(-150px)";
            nav.style.opacity = "0";
            
            // Update
            lastNavPos = newNavPos;
    
        } else {
            if (newNavPos-lastNavPos>NAVGAP){ // Downscrolls
                
                // Styling ...
                nav.style.transform = "translateY(0px)";
                nav.style.opacity = "1";
                
                // Update
                lastNavPos = newNavPos;
            }
        }
    }
});

// Section event scroll
Array.from(allSections).forEach(sec => {
    console.log(sec)
    sec.addEventListener("scroll", function(){
        console.log(sec.getBoundingClientRect().top);
    });
})
