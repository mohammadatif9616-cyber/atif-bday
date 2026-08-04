const messages = [

"🌸 You always make ordinary days feel special.",

"❤️ Thank you for every smile you've brought into my life.",

"✨ I hope every dream you have comes true.",

"🌙 No matter where life takes us, I'll always pray for your happiness.",

"🎂 Yaum-e-Paidaish ki bahot bahot mubarakbad, Saliha! May your life always be filled with love, peace, happiness, and endless smiles. ❤️"

];

function openEnvelope(index){

document.getElementById("popup").style.display="flex";

document.getElementById("popupText").innerHTML=messages[index];

}

function closePopup(){

document.getElementById("popup").style.display="none";

}