/* ==========================================
   PREMIUM PIN SYSTEM
   pin.js
========================================== */


const secretPIN = "ALIHA";


function checkPIN(){


    const input = document
    .getElementById("pinInput")
    .value
    .toUpperCase();



    const message =
    document.getElementById("message");



    if(input === secretPIN){


        message.innerHTML =
        "🔓 Unlocking your surprise... ❤️";


        message.style.color="#ffb6d9";



        // Confetti effect

        if(typeof confetti === "function"){

            confetti({

                particleCount:150,

                spread:120

            });

        }



        setTimeout(()=>{

localStorage.setItem("playMusic", "true");


            window.location.href="birthday.html";


        },2000);



    }


    else{


        message.innerHTML =
        "❌ Wrong PIN, try again ❤️";


        message.style.color="#ff7b9c";


        const box =
        document.querySelector(".lock-container");


        box.classList.add("shake");



        setTimeout(()=>{


            box.classList.remove("shake");


        },500);



    }



}