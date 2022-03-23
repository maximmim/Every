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
function notu() {
let notif = new Notification ("Проведа Every у новий пост", {
    tag : "ache-mail",
    body: "Every Просе вас відпочити",
    icon: "da.jpg"
})

} 
let hed1 = document.getElementById("hed1")
function afw() {
    hed1.style.left = '-273px'
}

function home() {
    document.location.replace("home.html")
}



//$.ajax({
//    type: "POST",
//    url: "index.php",
//    data: "name: inp",
//    dataType: "json",
//    success: function (_response) {
//        console.log("Все ок")
//    }
//});