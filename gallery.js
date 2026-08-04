/* ==========================================
   PREMIUM GALLERY PAGE
   gallery.js
========================================== */


/* ==========================
   IMAGE CLICK ZOOM
========================== */


const images = document.querySelectorAll(".gallery-box img");


images.forEach((img)=>{


    img.addEventListener("click",()=>{


        img.classList.toggle("zoom");


    });


});



/* ==========================
   CONTINUE BUTTON
========================== */


function openFinale(){


    document.body.style.opacity="0";


    setTimeout(()=>{


        window.location.href="finale.html";


    },800);


}

function openImage(img){

    document.getElementById("imageViewer").style.display="flex";

    document.getElementById("fullImage").src=img.src;

}

function closeImage(){

    document.getElementById("imageViewer").style.display="none";

}