$( document ).ready(function () {
    console.log("Ready!");
});

$(function () {
    // console.log("ready!");
    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("belajar js");
    });
    $("#isi").html("<h1>Belajar Jquery</h1>");

    $("#isi").mouseleave(function () { 
        alert("mouse leave");
        console.log("MOUSE")
    });
});
