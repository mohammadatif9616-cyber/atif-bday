/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 4000);

});


/* ==========================
   COUNTDOWN
========================== */

const targetDate = new Date("August 5, 2026 00:00:00").getTime();

/* Final me is line ko use karna:
const targetDate = new Date("August 5, 2026 00:00:00").getTime();
*/

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

    clearInterval(countdown);

    document.querySelector(".glass-card").style.display = "none";

const pinSection = document.getElementById("pinSection");
pinSection.classList.remove("hidden");
pinSection.style.display = "flex";

    if (typeof confetti === "function") {

        confetti({
            particleCount: 180,
            spread: 120
        });

    }

    return;

}
    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);


/* ==========================
   FLOATING HEARTS
========================== */

function createHeart() {

    const container = document.getElementById("hearts-container");

    if (!container) return;

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animation = "heartUp 8s linear";

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 700);


/* ==========================
   MUSIC
========================== */

 
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

// Page par pehli click hote hi music start
document.addEventListener("click", () => {
    if (!playing) {
        music.play().catch(err => console.log(err));
        playing = true;
        if (musicBtn) {
            musicBtn.innerHTML = "⏸ Pause Music";
        }
    }
}, { once: true });

// Music button
if (musicBtn) {
    musicBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            musicBtn.innerHTML = "⏸ Pause Music";
        } else {
            music.pause();
            musicBtn.innerHTML = "🎵 Music";
        }
    });
}


/* ==========================
   SECRET PIN
========================== */

const unlockBtn = document.getElementById("unlockBtn");

if (unlockBtn) {

    unlockBtn.addEventListener("click", () => {

        const pin = document
            .getElementById("pinInput")
            .value
            .toUpperCase();

        if (pin === "ALIHA") {

            document.getElementById("pinMessage").innerHTML =
                "✅ Welcome Saliha ❤️";

            setTimeout(() => {

                window.location.href = "birthday.html";

            }, 1200);

        } else {

            document.getElementById("pinMessage").innerHTML =
                "❌ Wrong Secret Code ❤️";

        }

    });

}