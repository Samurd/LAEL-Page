window.addEventListener("scroll", function (){
    let header = document.querySelector("header");
    header.classList.toggle("abajo",this.window.scrollY>0);

    
})
