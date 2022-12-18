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

 function home() {

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
document.getElementById("home").style.display = "none"
document.getElementById("struktur1").style.display = "none"
document.getElementById("struktur2").style.display = "none"
document.getElementById("dwa").style.display = "block"
document.getElementById("add").style.display = "none"
document.getElementById("close").style.display = "none"
document.getElementById("te").style.display = "block"
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



function cekinf() {
    if (j == "https://memepedia.ru/wp-content/uploads/2019/01/hamster.jpg") {
        document.location.replace("/users/home.html")
    }
    if (jj == "https://memepedia.ru/wp-content/uploads/2019/01/hamster.jpg") {
        document.location.replace("/users/home.html")
    }



    if (j === "https://i.gifer.com/7TMH.gif" )
    {
        document.location.replace("/users/home.html")
    }
    if (jj === "https://i.gifer.com/7TMH.gif") {
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
    memas = ["https://i.gifer.com/7TMH.gif","/icon/a.jpg","/icon/gg.png","/icon/dwa.webp","/icon/like.png","/icon/sticker.webp","/icon/images.jpg","https://memepedia.ru/wp-content/uploads/2019/01/hamster.jpg"]
    memash = ["https://i.gifer.com/7TMH.gif","/icon/a.jpg","/icon/dwa.webp","/icon/sticker.webp","https://memepedia.ru/wp-content/uploads/2019/01/hamster.jpg"]
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
memas = ["https://i.gifer.com/F1oX.gif","https://i.gifer.com/19ps.gif","https://i.gifer.com/XKim.gif","https://i.gifer.com/y7.gif","https://i.gifer.com/7tDC.gif","https://i.gifer.com/4jcE.gif","https://i.gifer.com/VhdI.gif","https://i.gifer.com/PXkM.gif","https://i.gifer.com/7TMH.gif","/icon/a.jpg","/icon/gg.png","/icon/sticker.webp","https://memepedia.ru/wp-content/uploads/2019/01/hamster.jpg"]
memash = ["https://i.gifer.com/7TMH.gif","/icon/a.jpg","/icon/dwa.webp","/icon/sticker.webp","https://memepedia.ru/wp-content/uploads/2019/01/hamster.jpg"]
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

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }



function ceking() 

{

var id = makeid()
localStorage.setItem("id",id)


localStorage.daw = true;


    

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