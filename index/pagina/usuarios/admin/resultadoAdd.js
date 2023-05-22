$(window).on('load', codigo);

function codigo() {
    $('#inicio').on('click', eventoInicio);

    let idCom = window.location.href.split('=')[2];

    $('#keyss').html('Su keyss es: '+window.location.href.split('=')[1].split(',')[0]);




    function eventoInicio() {
        window.location.href = '../login/loginUser.html?idCom='+idCom;
    }
}