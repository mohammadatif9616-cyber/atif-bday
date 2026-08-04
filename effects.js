// ==========================
// FLOATING HEARTS
// ==========================

function createHeart() {

    const heart = document.createElement("div");
    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (8 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 14000);
}

setInterval(createHeart, 500);

// ==========================
// ROSE PETALS
// ==========================

function createPetal() {

    const petal = document.createElement("div");
    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (18 + Math.random() * 12) + "px";
    petal.style.animationDuration = (10 + Math.random() * 6) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 17000);
}

setInterval(createPetal, 1200);

// ==========================
// CURSOR GLOW
// ==========================

const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});