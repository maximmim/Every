function push() {
if (!"Notification" in window) {
    alert("Ваш браузер не подерживает увидомления :(")
}
else if (Notification.permission === "granted") {
    setTimeout(notu,2000)
}
else if (Notification.permission !== "denied") {
    Notification.requestPermission( function (permission) {
        if (!("permission" in Notification)) {
            Notification.permission = permission;
            if (permission === "granted") {
                setTimeout(notu,2000)
            }
        }
    })
}
}
/*var req = ({
    method: 'GET',
    url: 'http://google.com'
    });
    
    $http(req).then(function successCallback(successData){
    //при удачном 
    },function errorCallback(errorData){
    alert(34)
    });
    */
function notu() {
let notif = new Notification ("Every у новий пост", {
    tag : "ache-mail",
    body: "Every Просе вас відпочити",
    icon: "da.jpg"
})

} 
let hed1 = document.getElementById("hed1")

function d() {
    document.getElementById("aw").style.display = "block";
}

function afw() { 
    document.location.replace("chat.html")
 }

function dvf() {
    document.location.replace("index.html")
}
function home() {
    if (localStorage.daw){

    }
    document.location.replace("home.html")
}
/*$.ajax({
    type: "POST",
    url: "index.php",
    data: "name: inp",
    dataType: "json",
    success: function (_response) {
        console.log("Все ок")
    }
});*/


let homee = document.getElementById("home");
let struktur1 = document.getElementById("struktur1")
let daawd =  document.getElementById("dwa")
let add = document.getElementById("add")
let te = document.getElementById("te")


localStorage.daw = true;

/*
if (localStorage.daw == true) {
    alert(123)
}

    document.getElementById("home").style.display = "block"
    struktur1.style.display = "block"
    daawd.style.display = "none"
    add.style.display = "block"
    te.style.display = "none"
    localStorage.daw = true;
*/

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

function getRandomArrayElement(arr){
   return arr[Math.floor(Math.random()*arr.length)]
}

let svd = ["Привіт","Hi", "Hallo","Përshëndetje","Привет","Hola","Ahoj","Bonjour","أهلا","Χαίρετε","Ciao","добры дзень","Здравейте","Ndewo ebe ahụ","haai daar","Salaamu caleykum","Sveiki","안녕","ሃይ እንዴት ናችሁ","ሃይ እንዴት ናችሁ"]

setInterval(function () {
$("#te").text(getRandomArrayElement(svd))
  },3600)



function d() {
    document.getElementById("Eror").style.display = "block"
    
}
function da() {

}
function cse() {
     
    if (confirm('Вы действительно хотите закрыть страницу?')) {
        window.close();
    }
    else {
        alert("Отмена")
    }
}