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
let notif = new Notification ("Проведа Every у новий пост", {
    tag : "ache-mail",
    body: "Every Просе вас відпочити",
    icon: "da.jpg"
})

} 
let hed1 = document.getElementById("hed1")

function d() {
    document.getElementById("aw").style.display = "block";
    document.getElementById("e").style.display = "none";
}

function afw() { 
    document.location.replace("chat.html")
 }

function dvf() {
    document.location.replace("index.html")
}
function home() {
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