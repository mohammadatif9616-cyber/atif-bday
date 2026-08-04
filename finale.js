/* ==========================================
   PREMIUM FINALE PAGE
   finale.js
========================================== */


/* ==========================
   BACKGROUND MUSIC
========================== */

const finalMusic = document.getElementById("finalMusic");

document.addEventListener("click", () => {

    if (finalMusic && finalMusic.paused) {

        finalMusic.volume = 0.25;
        finalMusic.play();

    }

}, { once: true });


/* ==========================
   ONE LAST SURPRISE
========================== */

function showMessage() {

    const message = document.getElementById("finalMessage");

    message.innerHTML = `
        ❤️ Thank you for being a beautiful part of my memories.<br><br>

        May Allah always keep you happy,
        bless you with peace,
        and make all your dreams come true. 🌹
    `;

    for (let i = 0; i < 20; i++) {

        createHeart();

    }

}


/* ==========================
   FLOATING HEARTS
========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "heartUp 5s linear forwards";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}


/* ==========================
   SECRET ENVELOPE
========================== */

function openEnvelope() {

    const msg = document.getElementById("secretMessage");

    if (msg.style.display === "block") {

        msg.style.display = "none";

    } else {

        msg.style.display = "block";

    }

}


/* ==========================
   MEMORY CERTIFICATE
========================== */

function openCertificate() {

    const certificate = document.getElementById("certificate");

    if (!certificate) return;

    certificate.style.display = "block";

    certificate.scrollIntoView({

        behavior: "smooth",
        block: "center"

    });

}

/* ==========================
   FINAL GIFT
========================== */

function openGift(){

    const gift =
    document.getElementById("giftMessage");

    gift.style.display="block";

    for(let i=0;i<30;i++){

        createHeart();

    }
setTimeout(() => {

    for(let i=0; i<40; i++){

        createHeart();

    }

},500);

}

