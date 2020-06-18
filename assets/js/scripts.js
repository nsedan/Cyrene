/* POWER ON-OFF BUTTON */
$(".fa-power-off").click(function () {
    $('#cyrene').removeClass('logo-off').addClass('logo-on');
    $('.fa').addClass('powered-on-buttons');
    $('.current-level').css('display', 'block');
    $('#red').removeClass('red-off').addClass('red-on');
    $('#green').removeClass('green-off').addClass('green-on');
    $('#yellow').removeClass('yellow-off').addClass('yellow-on');
    $('#blue').removeClass('blue-off').addClass('blue-on');
    $('#purple').removeClass('purple-off').addClass('purple-on');
    $('#cyan').removeClass('cyan-off').addClass('cyan-on');
});

/* VARIABLES */

let level = 1;
let i;
let j;
let random;
let interval;









/* SOUND EFFECTS */
let audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
let audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
let audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
let audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');


$('#red').click(function () {
    if ($('#red').hasClass('red-on')) {
        $('#red').addClass('red-active');
        audio1.play();

        setTimeout(function () {
            $('#red').removeClass('red-active');
        }, 250);
    }
});

$('#green').click(function () {
    if ($('#green').hasClass('green-on')) {
        $('#green').addClass('green-active');
        audio2.play();

        setTimeout(function () {
            $('#green').removeClass('green-active');
        }, 250);
    }
});

$('#yellow').click(function () {
    if ($('#yellow').hasClass('yellow-on')) {
        $('#yellow').addClass('yellow-active');
        audio1.play();
        audio4.play();

        setTimeout(function () {
            $('#yellow').removeClass('yellow-active');
        }, 250);
    }
});

$('#blue').click(function () {
    if ($('#blue').hasClass('blue-on')) {
        $('#blue').addClass('blue-active');
        audio2.play();
        audio3.play();

        setTimeout(function () {
            $('#blue').removeClass('blue-active');
        }, 250);
    }
});

$('#purple').click(function () {
    if ($('#purple').hasClass('purple-on')) {
        $('#purple').addClass('purple-active');
        audio3.play();

        setTimeout(function () {
            $('#purple').removeClass('purple-active');
        }, 250);
    }
});

$('#cyan').click(function () {
    if ($('#cyan').hasClass('cyan-on')) {
        $('#cyan').addClass('cyan-active');
        audio4.play();

        setTimeout(function () {
            $('#cyan').removeClass('cyan-active');
        }, 250);
    }
});


/* PLAY BUTTON*/
$(".fa-play").click(function () {
    if ($('#cyrene').hasClass('logo-on')) {
        $('#level-message').text('1')
        /*starts game*/
    }
});

/* RESTART BUTTON */
$(".fa-undo").click(function () {
    if ($('#cyrene').hasClass('logo-on')) {
        $('#level-message').text('Press Start')
        /*stops game*/
    }
});
