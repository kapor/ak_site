

var sections = document.getElementsByTagName("section"),
    menu_row       = document.getElementsByClassName("menu_row"),
    i;

window.onscroll = function () {
    
    for ( i = 0 ; i < sections.length ; i = i + 1 ) {
        
        if ( window.scrollY > sections[i].offsetTop && window.scrollY < sections[i].offsetTop + sections[i].offsetHeight ) {
            
            menu_row[i].classList.add("menu_highlight");
            
        } else {
            menu_row[i].classList.remove("menu_highlight");
            sections[i].classList.remove("menu_highlight");
        }
        
    }
    
}