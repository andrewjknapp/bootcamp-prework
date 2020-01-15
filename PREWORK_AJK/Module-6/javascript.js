var cage = false;


document.getElementById("button1").addEventListener("click", function() {

    document.getElementById("box").style.height = "300px";

});

document.getElementById("button2").addEventListener("click", function() {

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("button3").addEventListener("click", function() {

    document.getElementById("box").style.opacity = ".5";

});

document.getElementById("button4").addEventListener("click", function() {

    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.height = "150px";

});

document.getElementById("box").addEventListener("mouseover", function() {

    if (cage) {
        document.getElementById("box").style.backgroundImage = "url('cage.jpeg')";
    }
    
});

document.getElementById("box").addEventListener("mouseout", function() {

    document.getElementById("box").style.backgroundImage = "none";

});

document.getElementById("button5").addEventListener("mousedown", function() {

    document.getElementById("box").innerHTML = "<p style='text-align:center; padding:10px;'>Hover on this box to reveal his face</p>";

    cage = true;

});

document.getElementById("button5").addEventListener("mouseup", function() {

    document.getElementById("box").innerHTML = "";

});