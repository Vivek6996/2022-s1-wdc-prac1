var count = 1;

function counter(){


    numbers = document.getElementById("mcount");
    numbers.innerHTML = count;
    count++;


}

var content = document.getElementsByClassName("post-content");

    var dt = new Date();
    var dt2 = document.getElementsByClassName("post-time");

    show = show + dt + "<br/>"
    + content[0].value + "<br/>";
    dt2[0].innerHTML = show;




    const t = new Date();
    document.getElementById("posts").innerHTML = t;
    var postC = document.getElementsByClassName("posts").innerText = display;



    var t = new Date();
    var dTime = document.getElementsByClassName("post-time");
    dTime[0].innerHTML = t;

    var postC = document.getElementsByClassName("post-content");
    postC[0].innerHTML = document.getElementsByTagName("TEXTAREA")[0].value;
