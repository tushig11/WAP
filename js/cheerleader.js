$(function() {
    $(document).keypress(cheer);
});

function cheer(e) {
    $("<li>")
        .text(String.fromCharCode(e.which).toUpperCase() + "!")
        .appendTo("ul");
    setTimeout(removeCheer, 2000);
}

function removeCheer() {
    $("li").first().remove();
}