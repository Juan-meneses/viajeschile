// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Scrolling
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });


    //variables necesarias
    const iconoViajes1 = document.getElementById("iconoViajes1");
    const iconoViajes2 = document.getElementById("iconoViajes2");
    const iconoViajes3 = document.getElementById("iconoViajes3");
  
    //evento click
    iconoViajes1.addEventListener("click",function () {
      iconoViajes1.classList.add("iconoRojo");
  });
  
  iconoViajes2.addEventListener("click",function () {
    iconoViajes2.classList.add("iconoRojo");
  });
  
  iconoViajes3.addEventListener("click",function () {
    iconoViajes3.classList.add("iconoRojo");
  });