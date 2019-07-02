//Adv show on Load
window.onload = function() {
    document.getElementById("Adv").style.visibility = "true";
    document.getElementById("AdvBtn").onclick = function() {
        document.getElementById("Adv").style.visibility = "hidden";
    }
}