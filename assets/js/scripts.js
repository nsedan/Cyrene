/* POWER ON-OFF BUTTON */
$(".fa-power-off").click(function(){
    $('#cyrene').removeClass('logo-off').addClass('logo-on');
    $('.fa').addClass('powered-on-buttons');
    $('#red').removeClass('red-off').addClass('red-on');
    $('#green').removeClass('green-off').addClass('green-on');
    $('#yellow').removeClass('yellow-off').addClass('yellow-on');
    $('#blue').removeClass('blue-off').addClass('blue-on');
    $('#purple').removeClass('purple-off').addClass('purple-on');
    $('#cyan').removeClass('cyan-off').addClass('cyan-on');
});