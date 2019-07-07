var point = 0;
$(function() {
    $("#start").click(function() {
        point = 0;
        $(".boundary").removeClass("lose");
        $("#maze").mouseleave(lose);
        $(".boundary").mouseover(lose);
        $("#end").mouseover(win);
        $("#status").text("Stay away from WALLS");
    });
});

function lose() {
    if (point != 5) {
        $(".boundary").addClass("lose");
        point = 100;
        // alert("You Lose");
        $("#status").text("You Lose, Click the 'S' to try again.");
    }
}

function win() {
    if (point == 0) {
        point = 5;
        // alert("You win");
        $("#status").text("You win");
    }
}