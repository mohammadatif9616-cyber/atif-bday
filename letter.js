/* ==========================================
   PREMIUM LETTER PAGE
   letter.js
========================================== */


/* ==========================
   LETTER TYPING EFFECT
========================== */


const text = `

Hello Saliha... ❤️

Aaj tumhari Yaum-e-Paidaish hai. Sabse pehle tumhe dil se Yaum-e-Paidaish ki bahut bahut mubarakbad. 🌹

Aaj ka din sirf tumhara hai. Isliye aaj bas wahi karna jo tumhare dil ko sukoon de.

Yaar, zaroori nahi hai ki birthday sirf cake cut karke ya celebrate karke hi khaas banaya jaaye. Kabhi-kabhi apni pasand ki chhoti si cheezein bhi poore din ko yaadgaar bana deti hain.

Aur aaj ke din, agar ho sake to roze rakhna, namaz padhna aur Allah se dil se dua karna. Aur agar mumkin ho, to bahar nikal kar zaruratmand logon ko sadqa zaroor dena.

Mujhe yakeen hai Allah Ta'ala tumhari har nek niyyat aur har dua qubool karega.

Bas meri itni si dua hai ki Allah Ta'ala tumhe hamesha khush rakhe, tumhari har dua qubool kare aur tumhare chehre ki muskurahat kabhi kam na ho.

Aur haan... agar kabhi tum udaas ho, ya kabhi tumhe meri zarurat pade, to bina soche mujhe call ya message kar dena. Main hamesha tumhare liye rahunga.

Shayad ab hum pehle ki tarah baat nahi karte, lekin iska matlab ye bilkul nahi hai ki hum kabhi baat hi nahi kar sakte ya ek doosre ki madad nahi kar sakte.

Sach kahun to main aaj bhi tumhe bahut yaad karta hoon... aur shayad aage bhi karta rahunga.

Tum meri zindagi ki un khoobsurat yaadon mein se ho, jinhe main kabhi bhool nahi paunga.

Khair... aaj meri baaton ka din nahi hai. Aaj tumhara din hai.

Isliye purani baaton ko aaj ke liye chhod do. Bas aaj wahi karo jo tumhe khushi de aur tumhare chehre par muskurahat le aaye.

🌹 Yaum-e-Paidaish ki bahut bahut mubarakbad.

I really miss you so much. I love you so much. ❤️

Apna khayal rakhna... aur hamesha muskurate rehna.

Bas itni si dua hai.

Bye. 🤍

`;



let index = 0;


const letterBox = document.getElementById("letterText");



function typeLetter(){


    if(index < text.length){


        letterBox.innerHTML += text.charAt(index);


        index++;


        setTimeout(typeLetter,35);


    }


}



window.onload = ()=>{


    typeLetter();


};





/* ==========================
   VOICE PLAY
========================== */

function startVoice(){

    const voice = document.getElementById("voice");

    const music = document.getElementById("letterMusic");


    if(music){

        music.volume = 0.10;

    }


    if(voice){

        voice.play();

    }


    if(voice){

        voice.onended = ()=>{

            if(music){

                music.volume = 0.25;

            }

        };

    }

}





/* ==========================
   BACKGROUND EMOTIONAL MUSIC
========================== */


const letterMusic = document.getElementById("letterMusic");


window.addEventListener("click",()=>{


    if(letterMusic){


        letterMusic.volume = 0.25;


        letterMusic.play();


    }


});

/* ==========================
   OPEN GALLERY
========================== */


function openGallery(){

    window.location.href="gallery.html";

}