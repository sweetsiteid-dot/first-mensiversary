/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 800);

    }, 1200);

});


/* =========================
   PIN SYSTEM
========================= */

const unlockBtn = document.getElementById("unlockBtn");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");

const pinScreen = document.getElementById("pinScreen");
const website = document.getElementById("website");

unlockBtn.addEventListener("click", () => {

    if(pinInput.value === "2308"){

        pinScreen.style.display = "none";
        website.style.display = "block";

        pinError.innerText = "";

    }else{

        pinError.innerText = "Wrong PIN 💔";

        pinInput.value = "";

        pinInput.focus();

    }

});


/* =========================
   OPEN BOOK + MUSIC
========================= */

const openBookBtn = document.getElementById("openBookBtn");

openBookBtn.addEventListener("click", () => {

    const music = document.getElementById("bgMusic");

    music.play().catch(() => {
        console.log("Music needs user interaction.");
    });

    document.getElementById("scrapbook").scrollIntoView({
        behavior:"smooth"
    });

});


/* =========================
   LETTER OPEN
========================= */

const openLetter = document.getElementById("openLetter");
const letterPaper = document.getElementById("letterPaper");

openLetter.addEventListener("click", () => {

    if(letterPaper.style.display === "block"){

        letterPaper.style.display = "none";

    }else{

        letterPaper.style.display = "block";

        setTimeout(() => {

            letterPaper.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

        },100);

    }

});


/* =========================
   QUIZ
========================= */

const checkQuiz = document.getElementById("checkQuiz");

checkQuiz.addEventListener("click", () => {

    const a1 = document
        .getElementById("answer1")
        .value
        .toLowerCase()
        .trim();

    const a2 = document
        .getElementById("answer2")
        .value
        .toLowerCase()
        .trim();

    const result = document.getElementById("quizResult");


    /* ACCEPTED ANSWERS */

    const correctName =
        a1 === "dendut";

    const correctDate =
        a2 === "23 agustus 2026" ||
        a2 === "23 agustus 2026" ||
        a2 === "23-08-2026" ||
        a2 === "23/08/2026" ||
        a2 === "23.08.2026" ||
        a2 === "23 08 2026";


    /* CHECK ANSWER */

    if(correctName && correctDate){

        result.style.color = "#1769AA";

        result.innerText =
            "Correct! Mas masih inget ternyata ❤️💙";

        document
            .getElementById("specialMemory")
            .scrollIntoView({
                behavior:"smooth"
            });

    }else{

        result.style.color = "#D62839";

        result.innerText =
            "Salahhh, coba inget-inget lagi 🥹❤️";

    }

});


/* =========================
   REVEAL SPECIAL MEMORY
========================= */

const revealBtn =
    document.getElementById("revealBtn");

revealBtn.addEventListener("click", () => {

    const specialPhoto =
        document.getElementById("specialPhoto");

    specialPhoto.classList.add("show");

    revealBtn.innerText =
        "Memory Revealed ❤️";

});


/* =========================
   RELATIONSHIP COUNTER
========================= */

function updateCounter(){

    /*
       Relationship started:
       23 August 2026
    */

    const startDate =
        new Date("2026-08-23T00:00:00");

    const now =
        new Date();

    const diff =
        now.getTime() -
        startDate.getTime();


    /* DAYS */

    const days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );


    /* HOURS */

    const hours =
        Math.floor(
            diff /
            (1000 * 60 * 60)
        );


    /* MINUTES */

    const minutes =
        Math.floor(
            diff /
            (1000 * 60)
        );


    document.getElementById("days").innerText =
        days;

    document.getElementById("hours").innerText =
        hours;

    document.getElementById("minutes").innerText =
        minutes;

}


/* RUN COUNTER */

updateCounter();

setInterval(
    updateCounter,
    1000
);


/* =========================
   SECRET MESSAGE
========================= */

const stars =
    document.querySelectorAll(".secret-star");

let clickedStars = 0;

stars.forEach(star => {

    star.addEventListener("click", () => {

        if(
            !star.classList.contains("active")
        ){

            star.classList.add("active");

            clickedStars++;

            star.style.transform =
                "scale(1.5)";

            star.style.opacity =
                "0.7";

        }


        /* ALL STARS FOUND */

        if(clickedStars >= 5){

            const secretMessage =
                document.getElementById(
                    "secretMessage"
                );

            secretMessage.style.display =
                "block";

            secretMessage.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

        }

    });

});


/* =========================
   REPLAY BUTTON
========================= */

const replayBtn =
    document.getElementById("replayBtn");

replayBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* =========================
   ENTER KEY PIN
========================= */

pinInput.addEventListener(
    "keypress",
    (e) => {

        if(e.key === "Enter"){

            unlockBtn.click();

        }

    }
);
