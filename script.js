function menuFunction() {
    var x = document.getElementById("menu");
    if (x.className === "mobilenav") {
        x.className += " responsive";
    } else {
        x.className = "mobilenav";
    }
}
