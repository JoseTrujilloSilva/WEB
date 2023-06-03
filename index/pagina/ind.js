$(window).on('load', codigo);


function codigo() {
    $('#eligeIdioma').on('change', eventoIdioma);
    var languaje;
    indiceIdiomas();

    function eventoIdioma() {
        if (document.getElementById('permanente').checked) {
            localStorage.setItem('localLanguajes', this.value);
            languaje = localStorage.getItem('localLanguajes');
        }else{
            sessionStorage.setItem('sesionLanguajes', this.value);
            languaje = sessionStorage.getItem('sesionLanguajes');
            localStorage.setItem('localLanguajes', null);
        }
        indiceIdiomas();
    }

    function indiceIdiomas() {
        languaje = localStorage.getItem('localLanguajes');
    if (languaje === null || languaje==='null') {
        languaje = sessionStorage.getItem('sesionLanguajes');
    }
    var idioma = languaje;

    fetch('./indiceIdiomas.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){

        if (idioma !== null || idioma !=='null') {
            document.getElementsByTagName('a')[0].innerHTML = data[idioma].navbar.home;
            document.getElementsByTagName('a')[1].innerHTML = data[idioma].navbar.about;
            document.getElementsByTagName('a')[2].innerHTML = data[idioma].navbar.register;
            document.getElementsByTagName('a')[3].innerHTML = data[idioma].navbar.contact;
            document.getElementsByTagName('a')[4].innerHTML = data[idioma].navbar.language;
            $('#session').html(data[idioma].navbar.session);
            $('#boton01').html(data[idioma].navbar.boton01);
            $('#boton02').html(data[idioma].navbar.boton02);
            document.getElementsByTagName('h2')[0].innerHTML = data[idioma].main.aboutUs.title;
            $('#tarians').html(data[idioma].main.aboutUs.description);
            document.getElementsByTagName('h2')[1].innerHTML = data[idioma].main.registerCommunity.title;
            $('#registra').html(data[idioma].main.registerCommunity.description);
            $('#warning').html(data[idioma].main.registerCommunity.warning);
            $('#boton03').html(data[idioma].main.registerCommunity.boton03);
            document.getElementsByTagName('h2')[2].innerHTML = data[idioma].main.chooseLanguage.title;
            $('#perm').html(data[idioma].main.chooseLanguage.permanente);
            $('#chooseLanguajes').html(data[idioma].main.chooseLanguage.description);
            $('#option0').html(data[idioma].main.chooseLanguage.option0);
            $('#estamos').html(data[idioma].footer.estamos);
            $('#contactanos').html(data[idioma].footer.contact);
            $('#codigoFuente').html(data[idioma].footer.codigo);
        }
    })
    }
}