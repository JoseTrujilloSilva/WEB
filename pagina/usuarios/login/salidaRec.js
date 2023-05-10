$(window).on('load', codigo);

function codigo() {
    $('#inicio').on('click', eventoInicio);


    $('#password').html('Su nueva contraseña es: '+window.location.href.split('=')[1]);




    function eventoInicio() {
        window.location.href = '../../indice.html';
    }
}