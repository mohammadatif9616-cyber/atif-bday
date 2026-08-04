/* ==========================================
   PREMIUM BIRTHDAY WEBSITE
   PART 1
========================================== */


// Sections
const hero = document.getElementById("heroSection");
const timeline = document.getElementById("timelineSection");
const gallery = document.getElementById("gallerySection");
const gift = document.getElementById("giftSection");
const envelope = document.getElementById("envelopeSection");
const letter = document.getElementById("letterSection");
const certificate = document.getElementById("certificateSection");
const finale = document.getElementById("finalSection");

// Music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Hero ke alawa sab hide
window.onload = function(){

    timeline.classList.add("hidden");
    gallery.classList.add("hidden");
    gift.classList.add("hidden");
    envelope.classList.add("hidden");
    letter.classList.add("hidden");
    certificate.classList.add("hidden");
    finale.classList.add("hidden");

if(localStorage.getItem("playMusic") === "true"){

    music.play().catch(()=>{});

    musicBtn.innerHTML = "⏸ Pause Music";

    localStorage.removeItem("playMusic");

}

};

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();
        musicBtn.innerHTML="⏸ Pause Music";

    }else{

        music.pause();
        musicBtn.innerHTML="🎵 Play Music";

    }

});

// Hero → Timeline

const startJourney = document.getElementById("nextToTimeline");

if(startJourney){

startJourney.addEventListener("click",()=>{

    hero.classList.add("hidden");

    timeline.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

}

    
/* ==========================
   TIMELINE → GALLERY
========================== */

document.getElementById("nextToGallery").addEventListener("click",()=>{

    timeline.classList.add("hidden");

    gallery.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* ==========================
   GALLERY → GIFT
========================== */

document.getElementById("nextToGift").addEventListener("click",()=>{

    gallery.classList.add("hidden");

    gift.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* ==========================
   GIFT BOX
========================== */

function openGift(){

    const popup = document.getElementById("messagePopup");
    const text = document.getElementById("popupText");

    text.innerHTML = `
    🎁 Surprise ❤️<br><br>

    Tum meri zindagi ka sabse khoobsurat gift ho.<br>
    Tumhari smile aur tumhari khushi mere liye bahut special hai ❤️
    `;

    popup.style.display="flex";


    // 3 second baad Secret Message section open

    setTimeout(()=>{

        popup.style.display="none";

        gift.classList.add("hidden");

        envelope.classList.remove("hidden");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },3000);

}
let memoryIndex = 0;

const memories = document.querySelectorAll(".timeline-card");
const nextMemory = document.getElementById("nextMemory");
const galleryBtn = document.getElementById("nextToGallery");


if(nextMemory){

    nextMemory.addEventListener("click",()=>{

        memories[memoryIndex].classList.add("hideCard");

        memoryIndex++;

        if(memoryIndex < memories.length){

            memories[memoryIndex].classList.remove("hideCard");

        }


        if(memoryIndex === memories.length-1){

            nextMemory.classList.add("hideCard");

            galleryBtn.classList.remove("hideCard");

        }

    });

}
function openEnvelope(number){

    let messages = [
        "💌 Tum meri zindagi ki ek bahut khaas wajah ho ❤️",
        "🌹 Tumhari smile hamesha special rahe.",
        "❤️ Har yaad jo tumhare saath hai mere dil ke kareeb hai.",
        "✨ Tumhare saath guzra har pal priceless hai.",
        "🎁 Ye chhota sa surprise sirf tumhare liye ❤️"
    ];


    document.getElementById("popupText").innerHTML = messages[number-1];

    document.getElementById("messagePopup").style.display = "flex";

}



document.getElementById("closePopup").onclick = function(){

    document.getElementById("messagePopup").style.display = "none";

};

const openLetterBtn = document.getElementById("openLetter");
const letterVoice = document.getElementById("letterVoice");

openLetterBtn.addEventListener("click",()=>{

    envelope.classList.add("hidden");

    letter.classList.remove("hidden");

startTyping();

voiceFinished = false;

letterVoice.currentTime = 0;

letterVoice.play();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const letterContent = `

Hello Saliha,

Aaj tumhari Yaum-e-Paidaish hai, toh sabse pehle tumhe dil se Yaum-e-Paidaish ki bahut bahut mubarakbad. ❤️

Aaj ka din sirf tumhara hai. Isliye aaj bas wahi karna jo tumhare dil ko sukoon de. Yaar zaroori nahi hai ki birthday sirf cake cut karke ya celebrate karke hi khaas banaya jaye. Kabhi-kabhi apni pasand ki chhoti si cheezein bhi poore din ko yaadgaar bana deti hain.

Aur aaj ke din tum roze rakh lena, namaz padhna aur dua karna. Aur agar ho sake toh bahar nikal kar do-teen ya phir chaar-paanch gareeb aur zarooratmand logon ko, zyada nahi toh 5 ya 10 rupaye karke apna sadqa zaroor utar dena.

Mujhe yakeen hai Allah Ta'ala tumhari har nek niyat aur tumhari har dua ko qubool karenge.

Bas meri itni si dua hai ki Allah Ta'ala tumhe hamesha khush rakhe, tumhari har dua qubool kare aur tumhare chehre ki muskaan kabhi kam na ho.

Aur haan, agar kabhi tum udaas ho ya kabhi tumhe aisa lage ki tum akeli ho, toh ek baat hamesha yaad rakhna — agar tumhe kabhi bhi meri zaroorat pade toh bina soche samjhe mujhe call ya message kar dena.

I am always there for you. ❤️

Shayad ab hum pehle ki tarah baat nahi karte hain, lekin iska matlab ye nahi hai ki hum kabhi baat nahi kar sakte ya ek dusre ki help nahi kar sakte.

Aisa mat sochna. Befikr hokar mujhe call kar dena.

Sach kahun toh main aaj bhi tumhe bahut yaad karta hoon aur shayad aage bhi karta rahunga.

Tum meri life ka woh din ho, woh lamha ho jise main kabhi bhool nahi paunga.

Kabhi-kabhi dil karta hai tumhe call karun, message karun, lekin phir khud ko rok leta hoon. Dil ko samjha leta hoon ki pata nahi tumhe achha lage ya nahi.

Khair, aaj meri baaton ka din nahi hai, tumhara din hai. ❤️

Isliye purani baaton ko aaj ke liye chhod do. Jo beet gaya uske baare me mat socho.

Bas aaj wahi karo jo tumhe hamesha yaad rahe aur jo tumhare chehre par muskaan laaye.

Aur jaate-jaate ek baar phir se Yaum-e-Paidaish ki bahut bahut mubarakbad. ❤️

I really miss you so much.

I love you so much.

Apna khayal rakhna aur hamesha muskurate rehna.

Bas itni si dua hai.

Bye ❤️


`;

let letterIndex = 0;

let typingFinished = false;
let voiceFinished = false;

const nextCertificate = document.getElementById("nextToCertificate");


function showCertificateButton(){

    if(typingFinished && voiceFinished){

        nextCertificate.classList.remove("hidden");

    }

}

letterVoice.addEventListener("ended",()=>{

    voiceFinished = true;

    showCertificateButton();

});


function startTyping(){



    const letterBox = document.getElementById("letterText");
    // const nextCertificate = document.getElementById("nextToCertificate");

    letterBox.innerHTML = "";

    letterIndex = 0;

    function type(){

        if(letterIndex < letterContent.length){

            letterBox.innerHTML += letterContent.charAt(letterIndex);

            letterIndex++;

            setTimeout(type,40);

      }else{

    typingFinished = true;
   

    showCertificateButton();

}

    }

    type();

}



const galleryImages = document.querySelectorAll(".gallery img");

const imagePreview = document.getElementById("imagePreview");
const previewImg = document.getElementById("previewImg");
const closePreview = document.getElementById("closePreview");


galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        imagePreview.style.display="flex";

        previewImg.src = img.src;

    });

});


closePreview.addEventListener("click",()=>{

    imagePreview.style.display="none";

});

function showFinalMessage(){

    certificate.classList.add("hidden");

    finale.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

function startFireworks(){

    confetti({
        particleCount:200,
        spread:120,
        origin:{
            y:0.6
        }
    });

}


nextCertificate.addEventListener("click",()=>{

    letter.classList.add("hidden");

    certificate.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

console.log("END OF JS FILE RUNNING");