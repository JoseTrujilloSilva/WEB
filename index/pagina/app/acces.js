$(window).on('load', codigo);

function codigo() {

    $('#hastags').val('');

    let idUser = window.location.href.split('?')[1].split(',')[2].split('=')[1];
    let nameUser = window.location.href.split('?')[1].split(',')[0].split('=')[1];
    let fotoUser = window.location.href.split('?')[1].split(',')[1].split('=')[1];
    let arrayJson =  window.location.href.split('?')[1].split(',');

    $('#textArea').on('input', eventoHastags);
    $('#home').on('click', eventoHome);
    $('#atras').on('click', eventoAtras);
    $('#file1').on('change', eventoImages);
    $('#text').val('');
    $('#idUser').val(idUser);
    $('#nameUser').val(nameUser);
    $('#fotoUser').val(fotoUser);
    $('#explorar').attr('href','./explorar/explorar.html?idUser='+idUser+'?rutaFotoUser='+fotoUser+'?nameUser='+nameUser);
    $('#misTarians').attr('href', './mostrar/muestraTarians.html?idUser='+idUser+', rutaFotoUser='+fotoUser+', nameUser='+nameUser);
    $('#favoritos').attr('href', './explorar/favoritos/favURL.php?idUser='+idUser);
    $('#botonVideo').on('click', eventoVideos);

    $('#confi').attr('href', 'confi.php?idUser='+idUser);

    $('#fotoPerfil').attr('src', arrayJson[1].split('=')[1]);
    $('#nombrePerfil').html(arrayJson[0].split('=')[1]);
    $('#inicio').attr('href', './accesPrinc.php?id='+arrayJson[2].split('=')[1]);

    for (const value of $('.cerrar')) {
        value.addEventListener('click', eventoCerrar);
    }

  


    function eventoImages() {
        let archivo = this.files[0];
        let extension = archivo.name.split('.')[1];
        $('#card02').css('display', 'none');
        $('#video').css('display', 'none');
        $('#card01').css('display', 'none');
        $('#twitch-embed').css('display', 'none');
        $('#cardImg').css('display', 'none');

        if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
                let urlArch = URL.createObjectURL(archivo);
                $('#colFiles').css('visibility', 'visible');
                $('#cardImg').css('display', 'flex');
                $('#imgs01').removeAttr('width');
                $('#imgs01').removeAttr('height');
                $('#imgs01').attr('class', 'img-fluid');
                $('#imgs01').attr('src', urlArch);
                $('#video1').attr('src', '');
                $('#pdf1').attr('src', '');
                $('#pdf1').attr('width', '0');
                $('#pdf1').attr('height', '0');
                $('#text').val('Descripción: ');
        }

        if (extension === 'pdf') {
                let urlArch = URL.createObjectURL(archivo);
                $('#colFiles').css('visibility', 'visible');
                $('#pdf1').attr('width', '100%');
                $('#pdf1').attr('height', '700px');
                $('#footer').css('height', '900px');
                $('#pdf1').attr('src', urlArch);
                $('#imgs01').attr('src', '');
                $('#video').attr('src', '');
                $('#text').val('Descripción: ');
                alert('El archivo se ha subido correctamente.')
        }

    }

    function eventoVideos() {
        console.log($('#tipoVideo').val());
        $('#colFiles').css('visibility', 'visible');
        $('#contenedorWarning').css('margin-bottom', '20vh');
        if ($('#tipoVideo').val() ==='notype') {
            $('#card02').css('display', 'flex');
            $('#card02').css('width', '100%');
            $('#video').css('display', 'none');
            $('#video').css('width', '0px');
            $('#twitch-embed').css('display', 'block');
            $('#twitch-embed').css('width', '100%');
            $('#twitch-embed').css('height', '315px');
            $('#twitch-embed').html($('#url').val());
            $('iframe').css('width', '100%');
            $('#videoURL').val($('#url').val());
            $('#videoTipo').val($('#tipoVideo').val());
        }

        if ($('#tipoVideo').val() ==='youtube') {
            $('#card01').css('display', 'flex');
            $('#card01').css('width', '100%');
            $('#video').css('display', 'block');
            $('#video').attr('width', '100%');
            $('#video').attr('height', '315px');
            let dataUrl = $('#url').val().split('?')[1].split('v=')[1];
            console.log('https://www.youtube.com/embed/'+dataUrl);
            $('#videoURL').val(dataUrl);
            $('#videoTipo').val($('#tipoVideo').val());
            $('#video').attr('src', 'https://www.youtube.com/embed/'+dataUrl);
        }

        if ($('#tipoVideo').val() == 'odysee') {
            $('#card01').css('display', 'flex');
            $('#card01').css('width', '100%');
            $('#video').css('display', 'block');
            $('#video').attr('width', '100%');
            $('#video').attr('height', '315px');
            console.log($('#url').val());
            let dataUrl = $('#url').val().split('@')[1];
            console.log(dataUrl);
            $('#videoURL').val(dataUrl);
            $('#videoTipo').val($('#tipoVideo').val());
            $('#video').attr('src', 'https://odysee.com/$/embed/@'+dataUrl+'?r=HXTsPBNm28GzHyfHBiSZFjZdP7fVRhXp');
        }

        if ($('#tipoVideo').val() == 'twitch') {
            let dataTwitch = $('#url').val().split('.tv/')[1].split('/')[1];
            $('#card02').css('display', 'flex');
            $('#card02').css('width', '100%');
            $('#video').css('display', 'none');
            $('#video').css('width', '0px');
            $('#twitch-embed').css('display', 'block');
            $('#twitch-embed').css('width', '100%');
                new Twitch.Player("twitch-embed", {
                video: dataTwitch
                })
            $('iframe').css('width', '100%');
            $('iframe').css('height', '315px');
            $('#videoURL').val(dataTwitch);
            $('#videoTipo').val($('#tipoVideo').val());
        }
    }




    function eventoHome() {
        window.location.href = '../../index.html';
    }

    function eventoAtras() {
        window.location.href = '../indice.html';
    }

    function eventoCerrar() {
        $('#file1').val('');
        $('#colFiles').css('visibility', 'hidden');
        $('.card')[0].style.display = 'none';
        $('.card')[1].style.display = 'none';
        $('#text').val('');
        $('#footer').css('height', 'auto');
    }

    function eventoHastags() {
        let texto = this.value;
       

        if (texto.indexOf('#')!== -1 && texto.indexOf('\n')!== -1) {
           let hastagst = texto.slice(texto.indexOf('#'));

           $('#hastags').val(hastagst);

           if (hastagst.indexOf(' ')!==-1) {
                hastagst = hastagst.slice(0, hastagst.indexOf(' '))

                $('#hastags').val(hastagst);
           }

           if (hastagst.indexOf('\n')!==-1) {

                 hastagst = hastagst.slice(0, hastagst.indexOf('\n'))
                $('#hastags').val(hastagst);

            }
        }

    }


}