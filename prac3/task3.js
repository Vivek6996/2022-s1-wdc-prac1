
var count = 1;

function counter(){


    numbers = document.getElementById("mcount");
    numbers.innerHTML = count;
    count++;


}

var postC = "";

function getDatenTime(){

    var t = new Date();
    var dTime = document.getElementsByClassName("post-time");
    dTime[0].innerHTML = t;

    postC = document.getElementsByClassName("post-content");
    postC[0].innerHTML = document.getElementsByTagName("TEXTAREA")[0].value;

}






