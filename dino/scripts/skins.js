let s1 =  document.getElementById("s1");
let s2 =  document.getElementById("s2");
let ss1 =  document.getElementById("ss1");
let ss2 =  document.getElementById("ss2");




var skino = "s1";

function skinrite() {
s1.style.display = "none";
s2.style.display = "block";
skino = "s2";
}

function ofh() {
    s1.style.display = "none";
    ss1.style.display = "block";
    setTimeout(function () {
        s1.style.display = "block";
        ss1.style.display = "none";
    }, 2000);
    

}

function ofh1() {
    s2.style.display = "none";
    ss2.style.display = "block";
    setTimeout(function () {
        s2.style.display = "block";
        ss2.style.display = "none";
    }, 2000);
    

}

function skinleft() {
s1.style.display = "block";
s2.style.display = "none";
skino = "s1";
}
        
    

