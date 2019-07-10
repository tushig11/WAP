var blank_x = 300;
var blank_y = 300;
var myFunc = PuzzleFunc();

$(function() {
    init();
    $(".puzzlepiece").click(myFunc.check);
    $("#shufflebutton").click(shuffle);
});


function init() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");

    // initialize each piece
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];

        // calculate x and y for this piece
        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("images/background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        div.x = x;
        div.y = y;

    }
}

function PuzzleFunc() {

    function left(x, y) {
        return blank_y == y && x - blank_x == 100 ? true : false;
    }

    function right(x, y) {
        return blank_y == y && blank_x - x == 100 ? true : false;
    }

    function up(x, y) {
        return blank_x == x && blank_y - y == 100 ? true : false;
    }

    function down(x, y) {
        return blank_x == x && y - blank_y == 100 ? true : false;
    }

    function swap(puzzle) {
        var temp = puzzle.position().top;
        puzzle.css({ top: blank_y });
        blank_y = temp;
        temp = puzzle.position().left;
        puzzle.css({ left: blank_x });
        blank_x = temp;
    }

    function checkAndSwap() {
        var puzzle = $(this);
        var position = puzzle.position();
        var old_x = position.left;
        var old_y = position.top;

        if (left(old_x, old_y) || right(old_x, old_y) || up(old_x, old_y) || down(old_x, old_y)) {
            swap(puzzle);
        }
    }

    return {
        left: left,
        right: right,
        up: up,
        down: down,
        check: checkAndSwap,
        swap: swap,
    };
}


function shuffle() {
    for (var i = 0; i < 300; i++) {
        var numElements = $('.puzzlepiece').length;
        var randomNum = Math.floor(Math.random() * 100 % numElements) + 1;
        //Select your random element
        var element = $('.puzzlepiece:nth-child(' + randomNum + ')');
        var old_x = element.position().left;
        var old_y = element.position().top;
        var swap = myFunc.swap;
        if (myFunc.left(old_x, old_y) || myFunc.right(old_x, old_y) || myFunc.up(old_x, old_y) || myFunc.down(old_x, old_y)) {
            swap(element);
        }
    }
}