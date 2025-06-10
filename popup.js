let c=0;
let timer=20;

document.getElementById("divloca").onclick=function(){
    let num1 = Math.floor(Math.random()*201+50);
    let num2 = Math.floor(Math.random()*201+50);
    document.getElementById('divloca').style.top=""+num1+"px";
    document.getElementById('divloca').style.left=""+num2+"px";
    incre();
}

function incre(){
    c++;
    document.getElementById('count').innerHTML=c;
}

setInterval(time,1000);

function time(timerr){
    timer--;
    document.getElementById('timee').innerHTML=timer;
    if(timer==0){
        document.getElementById('timerstop').innerHTML="TIME ELAPSED YOUR SCORE::"+c;
        document.getElementById('timerstop').style.backgroundImage="url(mouse.jpg)";
        document.getElementById('timerstop').style.fontSize="20px";
    }
}