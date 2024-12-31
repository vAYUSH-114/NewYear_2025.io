function updateCountdown() {
    const now = new Date();
    const nextYear= new Date('January 1, 2025 00:00:00');
    const timeDiference= nextYear - now;

    if(timeDiference <=0){
        document.getElementById("countdown").textContent = "Happy New Year 2025!";
        return;
    }
    const days=Math.floor(timeDiference/(1000*60*60*24));
    const hours=Math.floor((timeDiference%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((timeDiference%(1000*60*60))/(1000*60));
    const secconds=Math.floor((timeDiference%(1000*60))/(1000));

    document.getElementById("countdown").textContent=
    ` ${days} Days, ${hours} Hours, ${minutes} Minutes, ${secconds} Secconds`;



}

setInterval(updateCountdown,1000);
updateCountdown(); //provids 1 s dealay

document.addEventListener("mousemove", (event)=>{
    document.body.style.backgroundColor=`rgb(${event.clientX},${event.clientY},124)`;
        
});

let ele=document.getElementById("text");
let texts="As the old year makes way for the new, remember that you are the author of your own story. But the happiest thing is that कि the closing of one chapter is the beggining of another.";
    let index = 0;
function LessonS (){
    if(index<texts.length){
        ele.textContent=ele.textContent + texts.charAt(index);
        index++;
        setTimeout(LessonS,100); // 100 is the speed in ms or (100ms=0.1s)
    }

}
LessonS();


