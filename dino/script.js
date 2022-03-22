const dino = document.getElementById("dino");
const demon = document.getElementById("demon")
const dinoan1 = document.getElementById("dinow");
const dinoan2 = document.getElementById("dinoh");
const cactus = document.getElementById("cactus");
const doc = document.getElementById("dac");

const dinodown = document.getElementById("dinodown")
let ii = 1;
let da = true;
let downn = false;
const demondown = document.getElementById("demondown")
let dem = false;
localStorage.setItem('dat', 1);
let daw = localStorage.getItem('dat');
const livee = document.getElementById("live")
const live2 = document.getElementById("live2")
const live3 = document.getElementById("live3")
const dont1 = document.getElementById("dont1")
const dont2 = document.getElementById("dont2")
const dont3 = document.getElementById("dont3")
const tg = document.getElementById("tg")
console.log(localStorage.getItem('dat'))
let live = 3;
let i = 1;
let jum = false;
setInterval(updatea, 20); 
function updatea() {
if (dino.style.display == "block" && demon.style.display == "block") {
dino.style.display = "none"

}
console.log(live)

    } 
//setInterval(animrun, 400)

//if (jum == false) {
//animrun()
//function animrun() {
//dino.style.display  = "none"
//setTimeout(animrun1,200)
//}
//function animrun1() {
//    document.getElementById("dinoma").style.display = "block"
//    document.getElementById("dinom").style.display = "none"
//    setTimeout(animrun2, 200)
//}
//function animrun2() {
//    document.getElementById("dinoma").style.display = "none"
//    document.getElementById("dinom").style.display = "block"
//    //dino.style.display = "block"
//    setTimeout(animrun,200)
//}
//    }
      

$("#www").text(live)
function jump() {
if(dino.classList != "jump" && dinodown.classList != "jump" && demon.classList != "jump"){
    jum = true;    
    dino.style.display= "block";
    //document.getElementById("dinoma").style.display = "none";
    //document.getElementById("dinom").style.display = "none";
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'audio/jump.mp3'; // Указываем путь к звуку 
    audio.autoplay = true; // Автоматически запускаем
    

    dino.classList.add("jump");
        i++;    
        demon.classList.add("jump")
    
        $("#fs").text(localStorage.dat);
        localStorage.dat++;
        $('#fe').text(i);
        console.log(localStorage.dat);
        dinoan1.classList.add("jump");
        dinoan2.classList.add("jump");
        dinodown.classList.add("jump");
        dino.style.display = "block";
        dinodown.style.display = "none";
        cactus.style.top = "110px";
        jum = false;
    }
    setTimeout(function(){
        dino.classList.remove("jump")
        dinodown.classList.remove("jump")
        demon.classList.remove("jump")
    }, 700)

}
function startq() {
    document.getElementById("skins").style.display = "none"
    document.getElementById("games").style.display = "block"
}
function down() {



    if (dem == true) {
        cactus.style.top = "125px"
        demon.style.display = "none"
        demondown.style.display = "block"
        setTimeout(demonof, 1000);
    }    
    else {
    
    dino.style.display = "none"
    dinodown.style.display = "block"
    cactus.style.top = "125px"
    setTimeout(downof, 1000)

}
}
function v() {
    dino.style.b
}
function downof() {
    dino.style.display = "block";
    dinodown.style.display = "none";
    cactus.style.top = "110px";
}
function demonof() {
    demon.style.display = "block";
    demondown.style.display = "none";
    cactus.style.top = "110px";
}
function dn() {
    dino.style.display = "none";
    demon.style.display = "block";
    dem = true;
    document.getElementById("ob").style.display = "block";
    document.getElementById("obloko").style.display = "none";
    document.getElementById("qd").style.display = "none";
    document.getElementById("demod").style.display = "block";
    dinodown.style.display = "none";
}
document.addEventListener('keydown', function(event){
    jump();
});
document.addEventListener("keydown" ,  function(event) {

})
let isAlite = setInterval (function(){
    
    let demonTop = parseInt(window.getComputedStyle(demon).getPropertyValue("top"))
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
//Проверка на столкновения с кактусом 
if (da == true) {
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) 
  { 
      
   //console.log("-1 Жизнь")   
   //alert("ТИ ПРОГРАВ, СПІВЧУВАЮ");
   //document.location.replace('reset.html');
   
   
    live = live - 1;
  }
  if (cactusLeft < 50 && cactusLeft > 0 && demonTop >= 140) 
  { 
      
   //console.log("-1 Жизнь")   
   //alert("ТИ ПРОГРАВ, СПІВЧУВАЮ");
   //document.location.replace('reset.html');
   
   
   //live = live - 1;
  }
}
//метод проверки жизней 1
if (live == 2) {

document.getElementById("heal").style.display = "none"
document.getElementById("dheal").style.display = "block"





//$("#www").text(live)
da = false
setTimeout(dawd,900)
setTimeout(daa,3000)
}
function dawd() {
    document.getElementById("heal").style.display = "block"
document.getElementById("dheal").style.display = "none"
}
//метод проверки жизек а потом смерть
if (live == 1) {
    da = false
    setTimeout(dawd, 900)
    setTimeout(daa,4000)
    $("#www").text(live)
    
document.getElementById("heal").style.display = "none"
document.getElementById("dheal").style.display = "block"
    

}
if (i == 100) {
    dn()
}
if (live == 0) {
//document.getElementById("heal").style.display = "none"
//document.getElementById("dheal").style.display = "block"
//document.getElementById("reset").style.display = "block"
//document.getElementById("gemv").style.display = "block"
//document.getElementById("dinowath").style.display = "block"

//dino.style.display = "none"
dino.classList.remove("jump")
//document.getElementById("jum").style.display = "none"
//document.getElementById("sit").style.display = "none"
//let cactusLefta = cactus.style.left;
//cactus.style.left = cactusLefta;
//cactus.classList.remove("cactusmov")
//document.getElementById("f").style.display = "none"
//doc.classList.remove("doc")

//document.getElementById("live").style.display = "none"
//document.getElementById("af").style.display = "none"
//document.getElementById("fe").style.display = "none"



//document.getElementById("dad").style.display = "none"
//document.getElementById("www").style.display = "none"









//alert("ТИ ПРОИГРАЛ")
document.location.replace('reset.html');
//$("#www").text(live)
}
function daa() {
da = true

}
//function logs() {
//    da = true;
//    document.getElementById("log").style.display = "block";
//}
//setTimeout(logs, 3000)

window.onload = function () {
document.body.classList.add('loaded_hiding');
window.setTimeout(function () {
document.body.classList.add('loaded');
document.body.classList.remove('loaded_hiding');
    }, 500);
    }
window.onload = function () {
    document.body.classList.add('loaded');
  }
},10)
function toe() {
    dino.classList.remove("jump")
    document.getElementById("jum").style.display = "none"
    document.getElementById("sit").style.display = "none"
    cactus.classList.remove("cactusmov")
    document.getElementById("f").style.display = "none"
    doc.classList.remove("doc")
    document.getElementById("ff").style.display = "block"
    

}

function teo() {
    dino.classList.add("jump")
    document.getElementById("jum").style.display = "block"
    document.getElementById("sit").style.display = "block"
    cactus.classList.add("cactusmov")
    document.getElementById("f").style.display = "block"
    doc.classList.add("doc")
    document.getElementById("ff").style.display = "none"
}
function aw() {
livee.classList.add("love");
//da = false;
setTimeout(w,100)
}
function w() {
    livee.classList.remove("love")
    livee.style.display = "none"
    dn()
    
}
function d() {
    da = true;
}






