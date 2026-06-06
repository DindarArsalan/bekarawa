function openLetter(){
    document.getElementById("card-letter").classList.remove("active");
    document.getElementById("card-question").classList.add("active");
}

const btnNo = document.getElementById("btnNo");

function moveButton(){
    const maxX = window.innerWidth - btnNo.offsetWidth;
    const maxY = window.innerHeight - btnNo.offsetHeight;

    btnNo.style.position = "fixed";
    btnNo.style.left = Math.random() * maxX + "px";
    btnNo.style.top = Math.random() * maxY + "px";
}

btnNo.addEventListener("mouseenter", moveButton);

btnNo.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveButton();
});

function sayYes(){
    document.getElementById("card-question").classList.remove("active");
    document.getElementById("card-success").classList.add("active");

    createHearts();
}

function createHearts(){
    const emojis = ["❤️","💖","🤍","✨"];

    for(let i=0;i<50;i++){
        setTimeout(()=>{
            const heart = document.createElement("div");

            heart.className = "confetti";
            heart.innerHTML =
            emojis[Math.floor(Math.random()*emojis.length)];

            heart.style.left =
            Math.random()*100 + "vw";

            document.body.appendChild(heart);

            setTimeout(()=>{
                heart.remove();
            },4000);

        },i*80);
    }
}