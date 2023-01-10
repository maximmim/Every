/*

      _    _                  .      _    _
     / \  / \      /\    \ /  |     / \  / \ 
    /   \/   \    /__\    /   |    /   \/   \
   /          \  /    \  / \  |   /          \

*/

//lox



//unblock();

let svd = ["Привіт","Hi", "Hallo","Përshëndetje","Привет","Hola","Ahoj","Bonjour","أهلا","Χαίρετε","Ciao","добры дзень","Здравейте","Ndewo ebe ahụ","haai daar","Salaamu caleykum","Sveiki","안녕","ሃይ እንዴት ናችሁ","ሃይ እንዴት ናችሁ"]

setInterval(function () {
$("#te").text(getRandomArrayElement(svd))

  },3600)


function fstr2() {
    
    document.getElementById("home").style.display = "block"
    document.getElementById("struktur2").style.display = "block"
    document.getElementById("dwa").style.display = "none"
    document.getElementById("add").style.display = "block"
    document.getElementById("close").style.display = "block"
    document.getElementById("te").style.display = "none"
    document.getElementById("baner").style.display = "none"
}





function fstr1() {
    
    document.getElementById("home").style.display = "block"
    document.getElementById("struktur1").style.display = "block"
    document.getElementById("dwa").style.display = "none"
    document.getElementById("add").style.display = "block"
    document.getElementById("close").style.display = "block"
    document.getElementById("te").style.display = "none"
    document.getElementById("baner").style.display = "none"
}


function afstr2() {
    document.getElementById("struktur1").style.display = "none"
    document.getElementById("home").style.display = "block"
    document.getElementById("struktur2").style.display = "block"
    document.getElementById("dwa").style.display = "none"
    document.getElementById("add").style.display = "block"
    document.getElementById("close").style.display = "block"
    document.getElementById("te").style.display = "none"
    document.getElementById("baner").style.display = "none"
}





function afstr1() {
    document.getElementById("struktur2").style.display = "none"
    document.getElementById("home").style.display = "block"
    document.getElementById("struktur1").style.display = "block"
    document.getElementById("dwa").style.display = "none"
    document.getElementById("add").style.display = "block"
    document.getElementById("close").style.display = "block"
    document.getElementById("te").style.display = "none"
    document.getElementById("baner").style.display = "none"
}



/**/
function daa() {
    

 
 /*
let response = await fetch("/php/ind.php", {
    method: "POST",
    body: document.getElementById("dw").value
});
*/

    


   

    $.ajax({
        type: "POST",
        url: "/php/ind.php",
        data: {
            body: document.getElementById("dw").value
        },
        success: function () {
            console.log("Все ок")
        }
    });

    
    
    document.getElementById("dc").style.display = "none";
    document.getElementById("aw").style.display = "block"
    
 

}
function df() {
    document.getElementById("dc").style.display = "block";
    document.getElementById("aw").style.display = "none"
}

function push() {
if (!"Notification" in window) {
    alert("Ваш браузер не подерживает увидомления :(")
}
else if (Notification.permission === "granted") {
    setTimeout(function () {
    let push = new Notification ("Гарного часу в Every", {
        tag : "ache-mail",
        body: "",
        icon: "/img/like.png"
})},3000)
}
else if (Notification.permission !== "denied") {
    Notification.requestPermission( function (permission) {
        if (!("permission" in Notification)) {
            Notification.permission = permission;
            if (permission === "granted") {
                

            }
        }
    })
}
}



function notu() {
let notif = new Notification ("Every у новий пост", {
    tag : "ache-mail",
    body: "Every Просе вас відпочити",
    icon: "/img/da.jpg"
})
}
function getRandomArrayElement(arr){
    return arr[Math.floor(Math.random()*arr.length)]
 }
 function was() {
    document.getElementById("struktur2").style.display = "none"
    document.getElementById("struktur1").style.display = "none"
    document.getElementById("ggg").style.display = "block"
    document.getElementById("gg").style.display = "block"
    document.getElementById("gg2").style.display = "block"
    document.getElementById("gg3").style.display = "block"
    document.getElementById("gg4").style.display = "block"
    document.getElementById("close").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("add").style.display = "none"
    document.getElementById("awdf").style.display = "block"

 }
































function lox() {

}
function loxcs() 
{
    
}
















function skip() {
    document.getElementById("home").style.display = "none"
    document.getElementById("close").style.display = "block"
    document.getElementById("timg2").style.display = "block"
    document.getElementById("tbutg2").style.display = "block"
    document.getElementById("timg1").style.display = "none"
    document.getElementById("timg2").style.display = "block"
}

function skip1() {
    document.getElementById("home").style.display = "none"
    document.getElementById("close").style.display = "block"
    document.getElementById("add").style.display = "none"
    document.getElementById("timg2").style.display = "block"
    document.getElementById("tbutgw1").style.display = "none"
    document.getElementById("tbutg3").style.display = "block"
    document.getElementById("timg1").style.display = "none"
}
function skip2() {
    document.getElementById("home").style.display = "none"
    document.getElementById("close").style.display = "none"
    document.getElementById("add").style.display = "block"
    document.getElementById("timg3").style.display = "block"
    document.getElementById("timg2").style.display = "none"
    document.getElementById("tbutg4").style.display = "block"
    document.getElementById("tbutg3").style.display = "none"
}
function skip3() {
    document.getElementById("home").style.display = "none"
    document.getElementById("close").style.display = "none"
    document.getElementById("add").style.display = "none"
    document.getElementById("timg3").style.display = "none"
    document.getElementById("timg2").style.display = "none"
    document.getElementById("tbutg4").style.display = "none"
    document.getElementById("tbutg3").style.display = "none"
    document.getElementById("struktur1").style.display = "block"
    document.getElementById("struktur1").style.width = "100px"
    document.getElementById("struktur1").style.height = "100px"
    document.getElementById("timg4").style.display = "block"
    document.getElementById("tbutg4").style.display = "none"
    document.getElementById("tbutg3").style.display = "none"
    document.getElementById("tbutg2").style.display = "none"
    document.getElementById("tbutg1").style.display = "none"
    
}




function og() {
    document.getElementById("home").style.display = "none"
    document.getElementById("close").style.display = "none"
    document.getElementById("add").style.display = "none"
    document.getElementById("timg3").style.display = "none"
    document.getElementById("timg2").style.display = "none"
    document.getElementById("tbutg4").style.display = "none"
    document.getElementById("tbutg3").style.display = "none"
    document.getElementById("struktur1").style.display = "none"
    document.getElementById("struktur1").style.width = "100px"
    document.getElementById("struktur1").style.height = "100px"
    document.getElementById("timg4").style.display = "none"
    document.getElementById("tbutg4").style.display = "none"
    document.getElementById("tbutg3").style.display = "none"
    document.getElementById("tbutg2").style.display = "none"
    document.getElementById("tbutg1").style.display = "none"
    document.getElementById("akui").style.display = "block"
    document.getElementById("ttbut1").style.display = "block"
    document.getElementById("ttbut2").style.display = "block"

}

function ski() {
    document.getElementById("ttbut1").style.display = "none"
document.getElementById("ttbut2").style.display = "none"
document.getElementById("akui").style.display = "none"
document.getElementById("register").style.display = "block"
document.getElementById("daw1").style.display = "block"
document.getElementById("regbut1").style.display = "block"

document.getElementById("home").style.display = "none"
document.getElementById("timg1").style.display = "none"
document.getElementById("tbutg1").style.display = "none"
document.getElementById("tbutgw1").style.display = "none"
document.getElementById("tbutg2").style.display = "none"
}

function skibyes() {
    document.getElementById("tbutgw1").style.display = "block"
    document.getElementById("home").style.display = "block"
document.getElementById("struktur1").style.display = "none"
document.getElementById("struktur2").style.display = "none"
document.getElementById("ttext1").style.display = "none"
document.getElementById("ttext1x1").style.display = "none"
document.getElementById("tbut1").style.display = "none"
document.getElementById("tbut2").style.display = "none"
document.getElementById("timg1").style.display = "block"
document.getElementById("timg2").style.display = "none"

document.getElementById("tbutg1").style.display = "block"
document.getElementById("tbutg2").style.display = "block"
document.getElementById("tbutg1").style.display = "block"
}

function tskibyes() {
    document.getElementById("home").style.display = "none"
document.getElementById("struktur1").style.display = "none"
document.getElementById("struktur2").style.display = "none"
document.getElementById("dwa").style.display = "block"
document.getElementById("add").style.display = "none"
document.getElementById("close").style.display = "none"
document.getElementById("te").style.display = "block"
document.getElementById("tutor").style.display = "none"
}


function tskibno() {
document.getElementById("ttbut1").style.display = "none"
document.getElementById("ttbut2").style.display = "none"
document.getElementById("akui").style.display = "none"
document.getElementById("register").style.display = "block"
document.getElementById("daw1").style.display = "block"
document.getElementById("regbut1").style.display = "block"
}

function skibno() {
    document.getElementById("home").style.display = "none"
document.getElementById("struktur1").style.display = "none"
document.getElementById("struktur2").style.display = "none"
document.getElementById("dwa").style.display = "block"
document.getElementById("add").style.display = "none"
document.getElementById("close").style.display = "none"
document.getElementById("te").style.display = "block"
document.getElementById("tutor").style.display = "none"
}

function Eror_network() {
    document.getElementById("home").style.display = "none"
    document.getElementById("struktur1").style.display = "none"
    document.getElementById("struktur2").style.display = "none"
    document.getElementById("Ero").style.display = "none"
    document.getElementById("add").style.display = "none"
    document.getElementById("close").style.display = "none"

    document.getElementById("tutor").style.display = "none"    
    document.getElementById('Eror').style.display = 'block';

}


function checkOnlineState(){
    if (navigator.onLine){
      console.log("confirm")
    } else {
    //alert('Вибачте в вас немає зйєднаня з інтернетом :('); 
    document.location.replace("Eror.html")
    }
  }
  window.addEventListener('online',  checkOnlineState);
  

setInterval(checkOnlineState,10)


 
function home() {
    if (localStorage.getItem('daw') == "true"){
        document.location.replace("/users/homeg.html")
    }
    else{ 
    if (localStorage.dw == "Анюта"){
        p = 1;
    }

  else if (localStorage.dw == "Maxim"){
        p = 2;
    }
    else if (localStorage.dw == "Vika"){
        p = 3; 
    }
    else if (localStorage.dw == "Artem") {
        p = 4;
    }
  else {
        p = -1;
    }
    if(p == -1) {


        document.getElementById("tutor").style.display = "block"
        
/**/
document.getElementById("home").style.display = "none"
document.getElementById("struktur1").style.display = "none"
document.getElementById("struktur2").style.display = "none"
//document.getElementById("dwa").style.display = "block"
document.getElementById("add").style.display = "none"
document.getElementById("close").style.display = "none"
//document.getElementById("te").style.display = "block"

    }

    if (p == 1){
        document.location.replace("/users/homeann.html")
    }

    if(p == 2){
        document.location.replace("/users/home.html")
    }
    if(p == 3){
        document.location.replace("/users/homevika.html")
    }
    if(p == 4){
        document.location.replace("/users/homeart.html")
    }
}

}

function cekinf() {
    if (j == "/icon/hamster.jpg") {
        document.location.replace("/users/home.html")
    }
    if (jj == "/icon/hamster.jpg") {
        document.location.replace("/users/home.html")
    }



    if (j === "/icon/7TMH.webp" )
    {
        document.location.replace("/users/home.html")
    }
    if (jj === "/icon/7TMH.webp") {
        document.location.replace("/users/home.html")
    }


    if (j == "/icon/a.jpg") 
    {   
        document.location.replace("/users/homevika.html")
    }
    if (jj == "/icon/a.jpg") {
        document.location.replace("/users/homevika.html")
    }
    
}



function frandom() 
{
    memas = ["/icon/7TMH.webp","/icon/a.jpg","/icon/gg.png","/icon/dwa.webp","/icon/like.png","/icon/sticker.webp","/icon/images.jpg","/icon/hamster.jpg"]
    memash = ["/icon/7TMH.webp","/icon/a.jpg","/icon/dwa.webp","/icon/sticker.webp","/icon/hamster.jpg"]
    jj = getRandomArrayElement(memash)
    j = getRandomArrayElement(memas)    
    
    if (j = jj) {
    jj = getRandomArrayElement(memash)
    j = getRandomArrayElement(memas)
    document.getElementById("hed3").style.backgroundImage = "url("+j+")";
    document.getElementById("hed2").style.backgroundImage = "url("+jj+")";
    }


    document.getElementById("hed3").style.backgroundImage = "url("+j+")";
    document.getElementById("hed2").style.backgroundImage = "url("+jj+")";
    

    
    document.getElementById("st2hed3").style.backgroundImage = "url("+j+")";
    
    str = ["str1","str2"]
    h = getRandomArrayElement(str)
    if (h == "str1") {
        afstr1()
    }
    if (h == "str2") {
        afstr2()
    }
}
function random() {
memas = ["/icon/7TMH.webp","https://i.gifer.com/19ps.gif","https://i.gifer.com/XKim.gif","https://i.gifer.com/y7.gif","https://i.gifer.com/7tDC.gif","https://i.gifer.com/4jcE.gif","https://i.gifer.com/VhdI.gif","https://i.gifer.com/PXkM.gif","https://i.gifer.com/7TMH.gif","/icon/a.jpg","/icon/gg.png","/icon/sticker.webp","/icon/hamster.jpg"]
memash = ["/icon/7TMH.webp","/icon/a.jpg","/icon/dwa.webp","/icon/sticker.webp","/icon/hamster.jpg"]
jj = getRandomArrayElement(memash)
j = getRandomArrayElement(memas)
document.getElementById("hed3").style.backgroundImage = "url("+j+")";
document.getElementById("hed2").style.backgroundImage = "url("+jj+")";

if (j = jj) {
jj = getRandomArrayElement(memash)
j = getRandomArrayElement(memas)
document.getElementById("hed3").style.backgroundImage = "url("+j+")";
document.getElementById("hed2").style.backgroundImage = "url("+jj+")";
}

document.getElementById("st2hed3").style.backgroundImage = "url("+j+")";
document.getElementById("st2hed2").style.backgroundImage = "url("+jj+")";






str = ["str1","str2"]
h = getRandomArrayElement(str)
if (h == "str1") {
    fstr1()
}
if (h == "str2") {
    fstr2()
}

}

setTimeout(random, 100)

function maked() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }



console.log("https://i.gifer.com/"+maked()+".gif")



//https://i.gifer.com/ovy.gif

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  function makei() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

function ceking() 

{

var id = makeid()
localStorage.setItem("id",id)


localStorage.daw = "true";


    

    s = ' ';
s = s.replace(/^\s+|\s+$/g, '');
if(document.getElementById("daw").value == s) {
        alert("!!!")
    }
    else {
    dwv = true;
    
    let inp = document.getElementById("daw").value;
    localStorage.setItem('dw', inp);
    alert("Привіт " + inp);
    document.getElementById("home").style.display = "block"
    document.getElementById("struktur1").style.display = "block"
    document.getElementById("dwa").style.display = "none"
    document.getElementById("add").style.display = "block"
    document.getElementById("close").style.display = "block"
    document.getElementById("te").style.display = "none"
    localStorage.setItem('dw', inp);
  if (inp == "Анюта"){
        p = 1;
    }

  else if (inp == "Maxim"){
        p = 2;
    }
    else if (inp == "Vika"){
        p = 3;
    }
    else if (inp == "Artem") {
        p = 4;
    }
  else {
        p = -1;
    }
    $.ajax({
    type: "POST",
    url: "ind.php",
    data: {
        "name": inp 
    },
    success: function () {
        console.log("Все ок")
    }
});
    }
}

function cekin() 

{

var id = makeid()
localStorage.setItem("id",id)


localStorage.daw = "true";


    

    s = ' ';
s = s.replace(/^\s+|\s+$/g, '');
if(document.getElementById("daw1").value == s) {
        alert("!!!")
    }
    else {
    dwv = true;
    
    let inp = document.getElementById("daw1").value;
    localStorage.setItem('dw', inp);
    alert("Привіт " + inp);

    str = ["str1","str2"]
    h = getRandomArrayElement(str)
    if (h == "str1") {
        fstr1()
    }
    if (h == "str2") {
        fstr2()
    }
    document.getElementById("register").style.display = "none"
    document.getElementById("close").style.display = "block"
    document.getElementById("add").style.display = "block"
    document.getElementById("home").style.display = "block"
    localStorage.setItem('dw', inp);
  if (inp == "Анюта"){
        p = 1;
    }

  else if (inp == "Maxim"){
        p = 2;
    }
    else if (inp == "Vika"){
        p = 3;
    }
    else if (inp == "Artem") {
        p = 4;
    }
  else {
        p = -1;
    }
    $.ajax({
    type: "POST",                    
    url: "ind.php",
    data: {
        "name": inp 
    },
    success: function () {
        console.log("Все ок")
    }
});
    }
}

function dvf() {
    document.location.replace("index.html")
}

function afw() {
    document.location.replace("chat.html")
}
function cse() {
     
    if (confirm('Вы действительно хотите закрыть страницу?')) {
        window.close();
    }
    else {
        alert("Отмена")
    }
}
