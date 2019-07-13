$(function() {
    "use strict";
    var puzzleArea = $('#puzzlearea');
    var divs = $("#puzzlearea div");
    var emptyRow = 3;
    var emptyCol = 3;
    const puzzleSize = 4;

    console.log(divs);

    // initialize each piece
    for (var i = 0; i <= divs.length; i++) {

        var div;
        if (i == divs.length) {
            divs[i] = document.createElement('div');
            $(divs[i - 1]).after(divs[i]);
            div = $(divs[i]);
            div.css({ "backgroundSize": '0 0' });
            //emptyRow + emptyCol
        } else {
            div = $(divs[i]);

        }

        // calculate x and y for this piece
        var x = ((i % puzzleSize) * 100);
        var y = (Math.floor(i / puzzleSize) * 100);

        // set basic style and background
        div.css({
                "left": x + 'px',
                "top": y + 'px',
                "backgroundPosition": -x + 'px ' + (-y) + 'px'
            })
            .addClass("puzzlepiece");

        div.attr("id", "square_" + i % puzzleSize + "_" + Math.floor(i / puzzleSize));


        // store x and y for later
        div.x = x;
        div.y = y;
        divs[i].x = x;
        divs[i].y = y;


        clickHandler("#square_" + i % puzzleSize + "_" + Math.floor(i / puzzleSize), i);

        function clickHandler(id, txt) {

            $(id).click(function() {
                //$("h1").text( txt + " "+ emptyCol % puzzleSize + ":" + emptyRow * puzzleSize );
                if (movable(txt)) {
                    swapPiece(txt, emptyCol % puzzleSize + emptyRow * puzzleSize);
                }
                if (checkWinner()) $("h1").text("Congrats, You won!");
            });

            $(div).mouseover(function() {
                if (movable(txt)) {
                    $(divs[txt]).addClass("movablepiece");
                }
            });

            $(div).mouseout(function() {
                $(divs[txt]).removeClass("movablepiece");
            });

        }

    }

    function swapPiece(e1, e2) {
        var txt = $(divs[e1]).text();
        var x = divs[e1].x;
        var y = divs[e1].y;


        $(divs[e1]).text($(divs[e2]).text());
        $(divs[e1]).css({
            // "backgroundPosition": -divs[e2].x + 'px ' + (-divs[e2].y) + 'px'    // if cell image has to be shown
            "backgroundSize": '0 0'
        });
        divs[e1].x = divs[e2].x;
        divs[e1].y = divs[e2].y;


        $(divs[e2]).text(txt);
        $(divs[e2]).css({
            "backgroundPosition": -x + 'px ' + (-y) + 'px',
            "backgroundSize": '400px 400px'
        });
        divs[e2].x = x;
        divs[e2].y = y;

        // Empty cell will change
        var row = Math.floor(e1 / puzzleSize);
        var col = e1 % puzzleSize;
        emptyRow = row;
        emptyCol = col;

    }

    function movable(i) {
        // calculate row and column for this piece
        var row = Math.floor(i / puzzleSize);
        var col = i % puzzleSize;
        return Math.abs(row - emptyRow) + Math.abs(col - emptyCol) == 1;
    }

    function checkWinner() {
        var s = 0;
        for (var i = 0; i < divs.length; i++) {
            div = $(divs[i]);
            if (i == parseInt(div.text()) - 1) {
                s += 1;
            }
        }
        return s == divs.length;

    }


    $("#shufflebutton").click(function() {
        for (var i = 0; i <= 1000; i++) {
            var index = parseInt(Math.random() * puzzleSize * puzzleSize - 1);
            if (movable(index)) {
                swapPiece(index, emptyCol % puzzleSize + emptyRow * puzzleSize);
            }
        }
    });



});