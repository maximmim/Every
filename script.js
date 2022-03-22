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



function home() {
    document.location.replace("home.html")
}



