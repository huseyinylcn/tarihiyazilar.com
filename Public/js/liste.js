var divs = document.querySelectorAll(".realdata");
    

for (var i = 0; i < divs.length; i++) {
    if (i % 2 == 0) {
        divs[i].style.backgroundColor = "rgba(33, 158, 33, 0.816)";
    } else {
        divs[i].style.backgroundColor = "rgba(45, 118, 45, 0.69)";
    }
}