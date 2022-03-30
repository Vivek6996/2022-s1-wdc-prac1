
var count = 1;

function counter(){


    numbers = document.getElementById("mcount");
    numbers.innerHTML = count;
    count++;


}

var postC = "";
var display=" ";

function getDatenTime(){

    var t = new Date();
    var dTime = document.getElementsByClassName("post-time");
    dTime[0].innerHTML = t;

    postC = document.getElementsByClassName("post-content");
    postC[0].innerHTML = document.getElementsByTagName("TEXTAREA")[0].value;


}




function hideMainDiv() {

    document.getElementById("main").style.display = "none";
    document.getElementById("menu").style.display = "block";


}

function showMainDiv() {


    document.getElementById("main").style.display = "block";
    document.getElementById("menu").style.display = "none";


}



function backgroundColor() {

    let color = document.getElementById("bcolor").value;
    document.body.style.backgroundColor = color;

}


