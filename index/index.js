function codigo() {
    fetch('./homeIdiomas.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            var idioma = localStorage.getItem('localLanguajes');
            if (idioma !== 'null') {
                $('#txtHome').html(data[idioma].Home);
                $('#boton01').html(data[idioma].boton01);
            }
        })
}

$(window).on('load', codigo);
