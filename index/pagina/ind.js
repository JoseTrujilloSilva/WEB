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
    switch (idioma) {
        case 'en':
        document.getElementsByTagName('a')[0].innerHTML = data.en.navbar.home;
        document.getElementsByTagName('a')[1].innerHTML = data.en.navbar.about;
        document.getElementsByTagName('a')[2].innerHTML = data.en.navbar.register;
        document.getElementsByTagName('a')[3].innerHTML = data.en.navbar.contact;
        document.getElementsByTagName('a')[4].innerHTML = data.en.navbar.language;
        $('#session').html(data.en.navbar.session);
        $('#boton01').html(data.en.navbar.boton01);
        $('#boton02').html(data.en.navbar.boton02);
        document.getElementsByTagName('h2')[0].innerHTML = data.en.main.aboutUs.title;
        $('#tarians').html(data.en.main.aboutUs.description);
        document.getElementsByTagName('h2')[1].innerHTML = data.en.main.registerCommunity.title;
        $('#registra').html(data.en.main.registerCommunity.description);
        $('#warning').html(data.en.main.registerCommunity.warning);
        $('#boton03').html(data.en.main.registerCommunity.boton03);
        document.getElementsByTagName('h2')[2].innerHTML = data.en.main.chooseLanguage.title;
        $('#perm').html(data.en.main.chooseLanguage.permanente);
        $('#chooseLanguajes').html(data.en.main.chooseLanguage.description);
        $('#option0').html(data.en.main.chooseLanguage.option0);
        $('#estamos').html(data.en.footer.estamos);
        $('#contactanos').html(data.en.footer.contact);
        $('#codigoFuente').html(data.en.footer.codigo);
            break;
            case 'es':
                document.getElementsByTagName('a')[0].innerHTML = data.es.navbar.home;
                document.getElementsByTagName('a')[1].innerHTML = data.es.navbar.about;
                document.getElementsByTagName('a')[2].innerHTML = data.es.navbar.register;
                document.getElementsByTagName('a')[3].innerHTML = data.es.navbar.contact;
                document.getElementsByTagName('a')[4].innerHTML = data.es.navbar.language;
                $('#session').html(data.es.navbar.session);
                $('#boton01').html(data.es.navbar.boton01);
                $('#boton02').html(data.es.navbar.boton02);
                document.getElementsByTagName('h2')[0].innerHTML = data.es.main.aboutUs.title;
                $('#tarians').html(data.es.main.aboutUs.description);
                document.getElementsByTagName('h2')[1].innerHTML = data.es.main.registerCommunity.title;
                $('#registra').html(data.es.main.registerCommunity.description);
                $('#warning').html(data.es.main.registerCommunity.warning);
                $('#boton03').html(data.es.main.registerCommunity.boton03);
                document.getElementsByTagName('h2')[2].innerHTML = data.es.main.chooseLanguage.title;
                $('#perm').html(data.es.main.chooseLanguage.permanente);
                $('#chooseLanguajes').html(data.es.main.chooseLanguage.description);
                $('#option0').html(data.es.main.chooseLanguage.option0);
                $('#estamos').html(data.es.footer.estamos);
                $('#contactanos').html(data.es.footer.contact);
                $('#codigoFuente').html(data.es.footer.codigo);
                    break;
                    case 'tr':
                        document.getElementsByTagName('a')[0].innerHTML = data.tr.navbar.home;
                    document.getElementsByTagName('a')[1].innerHTML = data.tr.navbar.about;
                    document.getElementsByTagName('a')[2].innerHTML = data.tr.navbar.register;
                    document.getElementsByTagName('a')[3].innerHTML = data.tr.navbar.contact;
                    document.getElementsByTagName('a')[4].innerHTML = data.tr.navbar.language;
                    $('#session').html(data.tr.navbar.session);
                    $('#boton01').html(data.tr.navbar.boton01);
                    $('#boton02').html(data.tr.navbar.boton02);
                    document.getElementsByTagName('h2')[0].innerHTML = data.tr.main.aboutUs.title;
                    $('#tarians').html(data.tr.main.aboutUs.description);
                    document.getElementsByTagName('h2')[1].innerHTML = data.tr.main.registerCommunity.title;
                    $('#registra').html(data.tr.main.registerCommunity.description);
                    $('#warning').html(data.tr.main.registerCommunity.warning);
                    $('#boton03').html(data.tr.main.registerCommunity.boton03);
                    document.getElementsByTagName('h2')[2].innerHTML = data.tr.main.chooseLanguage.title;
                    $('#perm').html(data.tr.main.chooseLanguage.permanente);
                    $('#chooseLanguajes').html(data.tr.main.chooseLanguage.description);
                    $('#option0').html(data.tr.main.chooseLanguage.option0);
                    $('#estamos').html(data.tr.footer.estamos);
                    $('#contactanos').html(data.tr.footer.contact);
                    $('#codigoFuente').html(data.tr.footer.codigo);
                        break;
        case 'de':
            document.getElementsByTagName('a')[0].innerHTML = data.de.navbar.home;
        document.getElementsByTagName('a')[1].innerHTML = data.de.navbar.about;
        document.getElementsByTagName('a')[2].innerHTML = data.de.navbar.register;
        document.getElementsByTagName('a')[3].innerHTML = data.de.navbar.contact;
        document.getElementsByTagName('a')[4].innerHTML = data.de.navbar.language;
        $('#session').html(data.de.navbar.session);
        $('#boton01').html(data.de.navbar.boton01);
        $('#boton02').html(data.de.navbar.boton02);
        document.getElementsByTagName('h2')[0].innerHTML = data.de.main.aboutUs.title;
        $('#tarians').html(data.de.main.aboutUs.description);
        document.getElementsByTagName('h2')[1].innerHTML = data.de.main.registerCommunity.title;
        $('#registra').html(data.de.main.registerCommunity.description);
        $('#warning').html(data.de.main.registerCommunity.warning);
        $('#boton03').html(data.de.main.registerCommunity.boton03);
        document.getElementsByTagName('h2')[2].innerHTML = data.de.main.chooseLanguage.title;
        $('#perm').html(data.de.main.chooseLanguage.permanente);
        $('#chooseLanguajes').html(data.de.main.chooseLanguage.description);
        $('#option0').html(data.de.main.chooseLanguage.option0);
        $('#estamos').html(data.de.footer.estamos);
        $('#contactanos').html(data.de.footer.contact);
        $('#codigoFuente').html(data.de.footer.codigo);
            break;
            case 'cat':
                document.getElementsByTagName('a')[0].innerHTML = data.cat.navbar.home;
            document.getElementsByTagName('a')[1].innerHTML = data.cat.navbar.about;
            document.getElementsByTagName('a')[2].innerHTML = data.cat.navbar.register;
            document.getElementsByTagName('a')[3].innerHTML = data.cat.navbar.contact;
            document.getElementsByTagName('a')[4].innerHTML = data.cat.navbar.language;
            $('#session').html(data.cat.navbar.session);
            $('#boton01').html(data.cat.navbar.boton01);
            $('#boton02').html(data.cat.navbar.boton02);
            document.getElementsByTagName('h2')[0].innerHTML = data.cat.main.aboutUs.title;
            $('#tarians').html(data.cat.main.aboutUs.description);
            document.getElementsByTagName('h2')[1].innerHTML = data.cat.main.registerCommunity.title;
            $('#registra').html(data.cat.main.registerCommunity.description);
            $('#warning').html(data.cat.main.registerCommunity.warning);
            $('#boton03').html(data.cat.main.registerCommunity.boton03);
            document.getElementsByTagName('h2')[2].innerHTML = data.cat.main.chooseLanguage.title;
            $('#chooseLanguajes').html(data.cat.main.chooseLanguage.description);
            $('#option0').html(data.cat.main.chooseLanguage.option0);
            $('#perm').html(data.cat.main.chooseLanguage.permanente);
            $('#estamos').html(data.cat.footer.estamos);
            $('#contactanos').html(data.cat.footer.contact);
            $('#codigoFuente').html(data.cat.footer.codigo);
                break;
                case 'eu':
                    document.getElementsByTagName('a')[0].innerHTML = data.eu.navbar.home;
                document.getElementsByTagName('a')[1].innerHTML = data.eu.navbar.about;
                document.getElementsByTagName('a')[2].innerHTML = data.eu.navbar.register;
                document.getElementsByTagName('a')[3].innerHTML = data.eu.navbar.contact;
                document.getElementsByTagName('a')[4].innerHTML = data.eu.navbar.language;
                $('#session').html(data.eu.navbar.session);
                $('#boton01').html(data.eu.navbar.boton01);
                $('#boton02').html(data.eu.navbar.boton02);
                document.getElementsByTagName('h2')[0].innerHTML = data.eu.main.aboutUs.title;
                $('#tarians').html(data.eu.main.aboutUs.description);
                document.getElementsByTagName('h2')[1].innerHTML = data.eu.main.registerCommunity.title;
                $('#registra').html(data.eu.main.registerCommunity.description);
                $('#warning').html(data.eu.main.registerCommunity.warning);
                $('#boton03').html(data.eu.main.registerCommunity.boton03);
                document.getElementsByTagName('h2')[2].innerHTML = data.eu.main.chooseLanguage.title;
                $('#perm').html(data.eu.main.chooseLanguage.permanente);
                $('#chooseLanguajes').html(data.eu.main.chooseLanguage.description);
                $('#option0').html(data.eu.main.chooseLanguage.option0);
                $('#estamos').html(data.eu.footer.estamos);
                $('#contactanos').html(data.eu.footer.contact);
                $('#codigoFuente').html(data.eu.footer.codigo);
                    break;
                    case 'gl':
                        document.getElementsByTagName('a')[0].innerHTML = data.gl.navbar.home;
                    document.getElementsByTagName('a')[1].innerHTML = data.gl.navbar.about;
                    document.getElementsByTagName('a')[2].innerHTML = data.gl.navbar.register;
                    document.getElementsByTagName('a')[3].innerHTML = data.gl.navbar.contact;
                    document.getElementsByTagName('a')[4].innerHTML = data.gl.navbar.language;
                    $('#session').html(data.gl.navbar.session);
                    $('#boton01').html(data.gl.navbar.boton01);
                    $('#boton02').html(data.gl.navbar.boton02);
                    document.getElementsByTagName('h2')[0].innerHTML = data.gl.main.aboutUs.title;
                    $('#tarians').html(data.gl.main.aboutUs.description);
                    document.getElementsByTagName('h2')[1].innerHTML = data.gl.main.registerCommunity.title;
                    $('#registra').html(data.cat.main.registerCommunity.description);
                    $('#warning').html(data.gl.main.registerCommunity.warning);
                    $('#boton03').html(data.gl.main.registerCommunity.boton03);
                    document.getElementsByTagName('h2')[2].innerHTML = data.gl.main.chooseLanguage.title;
                    $('#perm').html(data.gl.main.chooseLanguage.permanente);
                    $('#chooseLanguajes').html(data.gl.main.chooseLanguage.description);
                    $('#option0').html(data.gl.main.chooseLanguage.option0);
                    $('#estamos').html(data.gl.footer.estamos);
                    $('#contactanos').html(data.gl.footer.contact);
                    $('#codigoFuente').html(data.gl.footer.codigo);
                        break;
                        case 'fr':
                            document.getElementsByTagName('a')[0].innerHTML = data.fr.navbar.home;
                        document.getElementsByTagName('a')[1].innerHTML = data.fr.navbar.about;
                        document.getElementsByTagName('a')[2].innerHTML = data.fr.navbar.register;
                        document.getElementsByTagName('a')[3].innerHTML = data.fr.navbar.contact;
                        document.getElementsByTagName('a')[4].innerHTML = data.fr.navbar.language;
                        $('#session').html(data.fr.navbar.session);
                        $('#boton01').html(data.fr.navbar.boton01);
                        $('#boton02').html(data.fr.navbar.boton02);
                        document.getElementsByTagName('h2')[0].innerHTML = data.fr.main.aboutUs.title;
                        $('#tarians').html(data.fr.main.aboutUs.description);
                        document.getElementsByTagName('h2')[1].innerHTML = data.fr.main.registerCommunity.title;
                        $('#registra').html(data.fr.main.registerCommunity.description);
                        $('#warning').html(data.fr.main.registerCommunity.warning);
                        $('#boton03').html(data.fr.main.registerCommunity.boton03);
                        document.getElementsByTagName('h2')[2].innerHTML = data.fr.main.chooseLanguage.title;
                        $('#perm').html(data.fr.main.chooseLanguage.permanente);
                        $('#chooseLanguajes').html(data.fr.main.chooseLanguage.description);
                        $('#option0').html(data.fr.main.chooseLanguage.option0);
                        $('#estamos').html(data.fr.footer.estamos);
                        $('#contactanos').html(data.fr.footer.contact);
                        $('#codigoFuente').html(data.fr.footer.codigo);
                            break;
                            case 'it':
                                document.getElementsByTagName('a')[0].innerHTML = data.it.navbar.home;
                            document.getElementsByTagName('a')[1].innerHTML = data.it.navbar.about;
                            document.getElementsByTagName('a')[2].innerHTML = data.it.navbar.register;
                            document.getElementsByTagName('a')[3].innerHTML = data.it.navbar.contact;
                            document.getElementsByTagName('a')[4].innerHTML = data.it.navbar.language;
                            $('#session').html(data.it.navbar.session);
                            $('#boton01').html(data.it.navbar.boton01);
                            $('#boton02').html(data.it.navbar.boton02);
                            document.getElementsByTagName('h2')[0].innerHTML = data.it.main.aboutUs.title;
                            $('#tarians').html(data.it.main.aboutUs.description);
                            document.getElementsByTagName('h2')[1].innerHTML = data.it.main.registerCommunity.title;
                            $('#registra').html(data.it.main.registerCommunity.description);
                            $('#warning').html(data.it.main.registerCommunity.warning);
                            $('#boton03').html(data.it.main.registerCommunity.boton03);
                            document.getElementsByTagName('h2')[2].innerHTML = data.it.main.chooseLanguage.title;
                            $('#perm').html(data.it.main.chooseLanguage.permanente);
                            $('#chooseLanguajes').html(data.it.main.chooseLanguage.description);
                            $('#option0').html(data.it.main.chooseLanguage.option0);
                            $('#estamos').html(data.it.footer.estamos);
                            $('#contactanos').html(data.it.footer.contact);
                            $('#codigoFuente').html(data.it.footer.codigo);
                                break;
                                case 'pt':
                                    document.getElementsByTagName('a')[0].innerHTML = data.pt.navbar.home;
                                document.getElementsByTagName('a')[1].innerHTML = data.pt.navbar.about;
                                document.getElementsByTagName('a')[2].innerHTML = data.pt.navbar.register;
                                document.getElementsByTagName('a')[3].innerHTML = data.pt.navbar.contact;
                                document.getElementsByTagName('a')[4].innerHTML = data.pt.navbar.language;
                                $('#session').html(data.pt.navbar.session);
                                $('#boton01').html(data.pt.navbar.boton01);
                                $('#boton02').html(data.pt.navbar.boton02);
                                document.getElementsByTagName('h2')[0].innerHTML = data.pt.main.aboutUs.title;
                                $('#tarians').html(data.pt.main.aboutUs.description);
                                document.getElementsByTagName('h2')[1].innerHTML = data.pt.main.registerCommunity.title;
                                $('#registra').html(data.pt.main.registerCommunity.description);
                                $('#warning').html(data.pt.main.registerCommunity.warning);
                                $('#boton03').html(data.pt.main.registerCommunity.boton03);
                                document.getElementsByTagName('h2')[2].innerHTML = data.pt.main.chooseLanguage.title;
                                $('#perm').html(data.pt.main.chooseLanguage.permanente);
                                $('#chooseLanguajes').html(data.pt.main.chooseLanguage.description);
                                $('#option0').html(data.pt.main.chooseLanguage.option0);
                                $('#estamos').html(data.pt.footer.estamos);
                                $('#contactanos').html(data.pt.footer.contact);
                                $('#codigoFuente').html(data.pt.footer.codigo);
                                    break;
                                    case 'ru':
                                        document.getElementsByTagName('a')[0].innerHTML = data.ru.navbar.home;
                                    document.getElementsByTagName('a')[1].innerHTML = data.ru.navbar.about;
                                    document.getElementsByTagName('a')[2].innerHTML = data.ru.navbar.register;
                                    document.getElementsByTagName('a')[3].innerHTML = data.ru.navbar.contact;
                                    document.getElementsByTagName('a')[4].innerHTML = data.ru.navbar.language;
                                    $('#session').html(data.ru.navbar.session);
                                    $('#boton01').html(data.ru.navbar.boton01);
                                    $('#boton02').html(data.ru.navbar.boton02);
                                    document.getElementsByTagName('h2')[0].innerHTML = data.ru.main.aboutUs.title;
                                    $('#tarians').html(data.ru.main.aboutUs.description);
                                    document.getElementsByTagName('h2')[1].innerHTML = data.ru.main.registerCommunity.title;
                                    $('#registra').html(data.ru.main.registerCommunity.description);
                                    $('#warning').html(data.ru.main.registerCommunity.warning);
                                    $('#boton03').html(data.ru.main.registerCommunity.boton03);
                                    document.getElementsByTagName('h2')[2].innerHTML = data.ru.main.chooseLanguage.title;
                                    $('#perm').html(data.ru.main.chooseLanguage.permanente);
                                    $('#chooseLanguajes').html(data.ru.main.chooseLanguage.description);
                                    $('#option0').html(data.ru.main.chooseLanguage.option0);
                                    $('#estamos').html(data.ru.footer.estamos);
                                    $('#contactanos').html(data.ru.footer.contact);
                                    $('#codigoFuente').html(data.ru.footer.codigo);
                                        break;
                                        case 'ar':
                                            document.getElementsByTagName('a')[0].innerHTML = data.ar.navbar.home;
                                        document.getElementsByTagName('a')[1].innerHTML = data.ar.navbar.about;
                                        document.getElementsByTagName('a')[2].innerHTML = data.ar.navbar.register;
                                        document.getElementsByTagName('a')[3].innerHTML = data.ar.navbar.contact;
                                        document.getElementsByTagName('a')[4].innerHTML = data.ar.navbar.language;
                                        $('#session').html(data.ar.navbar.session);
                                        $('#boton01').html(data.ar.navbar.boton01);
                                        $('#boton02').html(data.ar.navbar.boton02);
                                        document.getElementsByTagName('h2')[0].innerHTML = data.ar.main.aboutUs.title;
                                        $('#tarians').html(data.ar.main.aboutUs.description);
                                        document.getElementsByTagName('h2')[1].innerHTML = data.ar.main.registerCommunity.title;
                                        $('#registra').html(data.ar.main.registerCommunity.description);
                                        $('#warning').html(data.ar.main.registerCommunity.warning);
                                        $('#boton03').html(data.ar.main.registerCommunity.boton03);
                                        document.getElementsByTagName('h2')[2].innerHTML = data.ar.main.chooseLanguage.title;
                                        $('#chooseLanguajes').html(data.ar.main.chooseLanguage.description);
                                        $('#perm').html(data.ar.main.chooseLanguage.permanente);
                                        $('#option0').html(data.ar.main.chooseLanguage.option0);
                                        $('#estamos').html(data.ar.footer.estamos);
                                        $('#contactanos').html(data.ar.footer.contact);
                                        $('#codigoFuente').html(data.ar.footer.codigo);
                                            break;
                                            case 'hi':
                                                document.getElementsByTagName('a')[0].innerHTML = data.hi.navbar.home;
                                            document.getElementsByTagName('a')[1].innerHTML = data.hi.navbar.about;
                                            document.getElementsByTagName('a')[2].innerHTML = data.hi.navbar.register;
                                            document.getElementsByTagName('a')[3].innerHTML = data.hi.navbar.contact;
                                            document.getElementsByTagName('a')[4].innerHTML = data.hi.navbar.language;
                                            $('#session').html(data.hi.navbar.session);
                                            $('#boton01').html(data.hi.navbar.boton01);
                                            $('#boton02').html(data.hi.navbar.boton02);
                                            document.getElementsByTagName('h2')[0].innerHTML = data.hi.main.aboutUs.title;
                                            $('#tarians').html(data.hi.main.aboutUs.description);
                                            document.getElementsByTagName('h2')[1].innerHTML = data.hi.main.registerCommunity.title;
                                            $('#registra').html(data.hi.main.registerCommunity.description);
                                            $('#warning').html(data.hi.main.registerCommunity.warning);
                                            $('#boton03').html(data.hi.main.registerCommunity.boton03);
                                            document.getElementsByTagName('h2')[2].innerHTML = data.hi.main.chooseLanguage.title;
                                            $('#chooseLanguajes').html(data.hi.main.chooseLanguage.description);
                                            $('#option0').html(data.hi.main.chooseLanguage.option0);
                                            $('#perm').html(data.hi.main.chooseLanguage.permanente);
                                            $('#estamos').html(data.hi.footer.estamos);
                                            $('#contactanos').html(data.hi.footer.contact);
                                            $('#codigoFuente').html(data.hi.footer.codigo);
                                                break;
                                                case 'zh':
                                                    document.getElementsByTagName('a')[0].innerHTML = data.zh.navbar.home;
                                                document.getElementsByTagName('a')[1].innerHTML = data.zh.navbar.about;
                                                document.getElementsByTagName('a')[2].innerHTML = data.zh.navbar.register;
                                                document.getElementsByTagName('a')[3].innerHTML = data.zh.navbar.contact;
                                                document.getElementsByTagName('a')[4].innerHTML = data.zh.navbar.language;
                                                $('#session').html(data.zh.navbar.session);
                                                $('#boton01').html(data.zh.navbar.boton01);
                                                $('#boton02').html(data.zh.navbar.boton02);
                                                document.getElementsByTagName('h2')[0].innerHTML = data.zh.main.aboutUs.title;
                                                $('#tarians').html(data.zh.main.aboutUs.description);
                                                document.getElementsByTagName('h2')[1].innerHTML = data.zh.main.registerCommunity.title;
                                                $('#registra').html(data.zh.main.registerCommunity.description);
                                                $('#warning').html(data.zh.main.registerCommunity.warning);
                                                $('#boton03').html(data.zh.main.registerCommunity.boton03);
                                                document.getElementsByTagName('h2')[2].innerHTML = data.zh.main.chooseLanguage.title;
                                                $('#chooseLanguajes').html(data.zh.main.chooseLanguage.description);
                                                $('#option0').html(data.zh.main.chooseLanguage.option0);
                                                $('#perm').html(data.zh.main.chooseLanguage.permanente);
                                                $('#estamos').html(data.zh.footer.estamos);
                                                $('#contactanos').html(data.zh.footer.contact);
                                                $('#codigoFuente').html(data.zh.footer.codigo);
                                                    break;
    }
    })
    }
}