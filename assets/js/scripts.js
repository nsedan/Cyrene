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


/* SOUND EFFECTS */
let audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
let audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
let audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
let audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

function playRedAudio() {
    if ($('#red').hasClass('red-on')) {
        audio1.play();
        audio4.play();
    }
}

function playGreenAudio() {
    if ($('#green').hasClass('green-on')) {
        audio2.play();
        audio3.play();
    }
}

function playYellowAudio() {
    if ($('#yellow').hasClass('yellow-on')) {
        audio1.play();
    }
}

function playBlueAudio() {
    if ($('#blue').hasClass('blue-on')) {
        audio2.play();
    }
}

function playPurpleAudio() {
    if ($('#purple').hasClass('purple-on')) {
        audio3.play();
    }
}

function playCyanAudio() {
    if ($('#cyan').hasClass('cyan-on')) {
        audio4.play();
    }
}