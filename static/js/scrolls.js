const allSections = document.getElementsByTagName("section");
const nav = document.getElementById("navigator");
const NAVGAP = 30;
var lastNavPos = window.pageYOffset || document.documentElement.scrollTop;

// Navbar scorll event
document.addEventListener("scroll", function(){
    var newNavPos = window.pageYOffset || document.documentElement.scrollTop;
    if(newNavPos===0){
        
        // Styling ...
        nav.style.opacity = "1";

        // Update
        lastNavPos = newNavPos;
    }
    else if (lastNavPos > newNavPos){ // Whenever user upscrolls, make nav visible

        // Styling ...
        nav.style.opacity = "1";

        // Update
        lastNavPos = newNavPos;

    } else {
        if (newNavPos-lastNavPos>NAVGAP){ // If the gap is bigger than NAVGAP, make nav visible
            
            // Styling ...
            nav.style.opacity = "0";

            // Update
            lastNavPos = newNavPos;
        }
    }
});
