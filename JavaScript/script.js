 /* acordion */
 let accordionFunction = document.getElementsByClassName("section6-button");

 
 for (let i = 0; i < accordionFunction.length; i++) {
    accordionFunction[i].addEventListener("click", function() {
     this.classList.toggle("active");
     let terms = this.nextElementSibling;
     if (terms.style.display === "block") {
        terms.style.display = "none";
     } else {
        terms.style.display = "block";
     }
   });
 }