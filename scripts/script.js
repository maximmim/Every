/*

      _    _                  .      _    _
     / \  / \      /\    \ /  |     / \  / \ 
    /   \/   \    /__\    /   |    /   \/   \
   /          \  /    \  / \  |   /          \

*/


//unblock();





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


function random() {
memas = ["/icon/a.jpg","/icon/gg.png","/icon/like.png","/icon/images.jpg"]
document.getElementById("hed3").style.backgroundImage = "url("+getRandomArrayElement(memas)+")";



document.getElementById("st2hed3").style.backgroundImage = "url("+getRandomArrayElement(memas)+")";



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


function ceking() 

{



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