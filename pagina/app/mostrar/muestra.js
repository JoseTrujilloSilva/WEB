$(window).on('load', codigo);

function codigo() {
    var texto = 0;
    var foto = 0;
    var video = 0;
    var pdf = 0;
    var carousel = new Array;
    var contCarousel = 0;

    let nameUser = window.location.href.split('?')[1].split(',')[2].split('=')[1];
    let fotoUser = window.location.href.split('?')[1].split(',')[1].split('=')[1];
    var idUser = window.location.href.split('?')[1].split(',')[0].split('=')[1];

    let dataRecoge = new FormData();

    dataRecoge.append('idUser', idUser);

    $('#nextMovil').on('click', eventoCarouselNext);
    $('#lastMovil').on('click', eventoCarouselAtras);
    $('#next').on('click', eventoCarouselNext);
    $('#last').on('click', eventoCarouselAtras);
    $('#home').on('click', eventoHome);
    $('#atras').on('click', eventoAtras);
    $('#text').val('');
    $('#idUser').val(idUser);
    $('#nameUser').val(nameUser);
    $('#fotoUser').val(fotoUser);
    $('#explorar').attr('href', '../explorar/explorar.html?idUser='+idUser);
    $('#idUserTarian').val(idUser);
    $('#favoritos').attr('href', '../explorar/favoritos/favURL.php?idUser='+idUser);
   
    $('#url').val(window.location.href);

    $('#fotoPerfil').attr('src', '../'+fotoUser);
    $('#nombrePerfil').html(nameUser);
    $('#nombrePerfil2').html(nameUser);
    $('#inicio').attr('href', '../accesPrinc.php?id='+idUser);


    function eventoHome() {
        window.location.href = '../../index.html';
    }

    function eventoAtras() {
        window.location.href = '../indice.html';
    }

   
    llamaCarousel();


    function eventoCarouselNext() {
        
        contCarousel++;

        llamaCarousel();
    }


    function eventoCarouselAtras() {
        
        contCarousel--;

        llamaCarousel();
        
    }

    function llamaCarousel() {
        $('#contenedorPrinc').css('height', '');
        $('#nameUserCont').html('');
        $('#retarianContenido').html('');
        $('#contenedorPrinc').css('background-color', 'white');
        $('#contenedorPrinc').css('height', '45vh');
        $('#imagen').css('display', 'none');
        $('#contenido').css('display', 'none');
        $('#videoContent').css('display', 'none');
        $('#videoContent2').css('display', 'none');
        $('#pdf').css('display', 'none');
        $('#descripcion').css('color', 'white');
        $('#svgRetarians').css('display', 'none');
        
        

        fetch('./muestraTarians.php', {
             url: './muestraTarians.php',
             method: 'POST',
             body: dataRecoge
        })
        .then(function(res){
            return res.json();
        })
        .then(function(data){
    
            console.log(data[contCarousel]);
        
           


            for (const value of data) {
                value[0]!==null? texto = 1 : texto = 0;
                value[1]!==null? foto = 1 : foto = 0; 
                value[2]!==null? video = 1 : video = 0; 
                value[3]!==null? pdf = 1 : pdf = 0;           
    
                carousel.push([value, texto, foto, video, pdf]);
            }
            
            let idTarian = carousel[contCarousel][0][5];

            $('#fechaTarian').html(data[0][4]);
            $('#idTarianComment').val(idTarian);
            $('#idTarianDelete').val(idTarian);
            

            if (contCarousel===data.length-1) {
                $('#next').css('visibility', 'hidden');
                document.getElementById('nextMovil').disabled = true;
            }else{
                $('#next').css('visibility', 'visible');
                document.getElementById('nextMovil').disabled = false;
            }
    
            if (contCarousel===0) {
                $('#last').css('visibility', 'hidden');
                document.getElementById('lastMovil').disabled = true;
            }else{
                $('#last').css('visibility', 'visible');
                document.getElementById('lastMovil').disabled = false;
            }
    
            if (data.length===1) {
                $('#next').css('display', 'none');
                document.getElementById('next').style.opacity='0';
                document.getElementById('nextMovil').disabled = true;
                document.getElementById('nextMovil').style.opacity = '100%';
                $('#last').css('visibility', 'hidden');
                document.getElementById('lastMovil').disabled = true;
                document.getElementById('lastMovil').style.opacity = '100%';
            }
    
            $('#card01').css('display', 'none');
            $('#video').css('display', 'none');
            $('#card02').css('display', 'none');
            $('#twitch-embed').css('display', 'none');
            $('iframe').css('display', 'none');
            switch (true) {
                case contCarousel>0&&contCarousel<carousel.length-1:
                    $('#last').css('visibility', 'visible');
                    break;
                
                case contCarousel==carousel.length-1:
                    $('#next').css('visibility', 'hidden');
                break;
            }
    
            if (contCarousel==0) {
                $('#last').css('visibility', 'hidden');
                $('#next').css('visibility', 'visible');
            }
    
                switch (true) {
                    case carousel[contCarousel][2]===1:
                        if (data[contCarousel][8]==='1') {
                            $('#svgRetarians').css('display', 'block');
                            $('#contenedorPrinc').css('background-image', 'url('+'../mostrar/'+carousel[contCarousel][0][1]+')');
                            $('#contenedorPrinc').css('background-size', 'contain');
                            $('#contenedorPrinc').css('background-repeat', 'no-repeat');
                            $('#contenedorPrinc').css('background-position', 'center');
                        $('#contenido').css('display', 'block');
                        $('#contenido').html(carousel[contCarousel][0][0]);
                        $('#contenido').css('color', 'red');
                        $('#nameUserCont').html('Retarians de: '+nameUser);
                        $('#retarianContenido').html(data[contCarousel][7]);
                        $('#nombrePerfil2').html(data[contCarousel][6]);
                        console.log('Es una imagen prueba');
                        $('#fechaTarian').html(carousel[contCarousel][0][4]);
                        $('#descripcion').html('');
                        $('#idTarianComment').val(carousel[contCarousel][0][5]);
                        }else{
                        $('#nameUserCont').html('');
                        $('#retarianContenido').html('');
                            console.log('Es una imagen');
                        $('#contenedorPrinc').css('display', 'block');
                        $('#fechaTarian').html(carousel[contCarousel][0][4]);
                        $('#descripcion').html(carousel[contCarousel][0][0]);
                        $('#contenedorPrinc').css('background-image', 'url('+'../mostrar/'+carousel[contCarousel][0][1]+')');
                        $('#contenedorPrinc').css('background-size', 'contain');
                        $('#contenedorPrinc').css('background-repeat', 'no-repeat');
                        $('#contenedorPrinc').css('background-position', 'center');
                        $('#idTarianComment').val(carousel[contCarousel][0][5]);
                        }
                        break;
                    case carousel[contCarousel][3]===1:
                        if (data[contCarousel][8]==='1') {
                            if (data[contCarousel][9] ==='youtube') {
                                $('#card01').css('display', 'flex');
                                $('#card01').css('width', '100%');
                                $('#video').css('display', 'block');
                                $('#video').attr('width', '100%');
                                $('#video').attr('height', '300px');
                                $('#video').attr('src', 'https://www.youtube.com/embed/'+carousel[contCarousel][0][2]);
                            }
                            if (data[contCarousel][9] === 'odysee') {
                                $('#card01').css('display', 'flex');
                                $('#card01').css('width', '100%');
                                $('#video').css('display', 'block');
                                $('#video').attr('width', '100%');
                                $('#video').attr('height', '300px');
                                $('#video').attr('src', 'https://odysee.com/$/embed/@'+carousel[contCarousel][0][2]+'?r=HXTsPBNm28GzHyfHBiSZFjZdP7fVRhXp');
                            }
                            if (data[contCarousel][9] === 'twitch') {
                                $('#card02').css('display', 'flex');
                                $('#card02').css('width', '100%');
                                $('#video').css('display', 'none');
                                $('#video').css('width', '0px');
                                $('#twitch-embed').css('display', 'block');
                                $('#twitch-embed').css('width', '100%');
                                    new Twitch.Player("twitch-embed", {
                                    video:carousel[contCarousel][0][2]
                                    })
                                $('iframe').css('width', '100%');
                                $('iframe').css('height', '300px');
                            }
                            if (data[contCarousel][9] === 'notype') {
                                $('#card02').css('display', 'flex');
                                $('#card02').css('width', '100%');
                                $('#twitch-embed').css('display', 'block');
                                $('#twitch-embed').css('width', '100%');
                                $('#twitch-embed').css('height', '300px');
                                $('#twitch-embed').html(carousel[contCarousel][0][2]);
                                $('iframe').css('width', '100%');
                            }
                            $('#svgRetarians').css('display', 'block');
                        $('#nameUserCont').html('Retarians de: '+nameUser);
                        $('#retarianContenido').html(data[contCarousel][7]);
                        $('#fechaTarian').html(carousel[contCarousel][0][4]);
                        $('#contenedorPrinc').css('display', 'none');
                        $('#descripcion').html(carousel[contCarousel][0][0]);
                        $('#descripcion').css('color', 'red');
                        $('#idTarianComment').val(carousel[contCarousel][0][5]);
                        }else{
                            if (data[contCarousel][9]==='youtube') {
                                $('#card01').css('display', 'flex');
                                $('#card01').css('width', '100%');
                                $('#video').css('display', 'block');
                                $('#video').attr('width', '100%');
                                $('#video').attr('height', '300px');
                                $('#video').attr('src', 'https://www.youtube.com/embed/'+carousel[contCarousel][0][2]);
                            }
                            if (data[contCarousel][9] === 'odysee') {
                                $('#card01').css('display', 'flex');
                                $('#card01').css('width', '100%');
                                $('#video').css('display', 'block');
                                $('#video').attr('width', '100%');
                                $('#video').attr('height', '300px');
                                $('#video').attr('src', 'https://odysee.com/$/embed/@'+carousel[contCarousel][0][2]+'?r=HXTsPBNm28GzHyfHBiSZFjZdP7fVRhXp');
                            }
                            if (data[contCarousel][9] === 'twitch') {
                                $('#card02').css('display', 'flex');
                                $('#card02').css('width', '100%');
                                $('#video').css('display', 'none');
                                $('#video').css('width', '0px');
                                $('#twitch-embed').css('display', 'block');
                                $('#twitch-embed').css('width', '100%');
                                    new Twitch.Player("twitch-embed", {
                                    video:carousel[contCarousel][0][2]
                                    })
                                $('iframe').css('width', '100%');
                                $('iframe').css('height', '300px');
                            }
                            if (data[contCarousel][9] === 'notype') {
                                $('#card02').css('display', 'flex');
                                $('#card02').css('width', '100%');
                                $('#twitch-embed').css('display', 'block');
                                $('#twitch-embed').css('width', '100%');
                                $('#twitch-embed').css('height', '300px');
                                $('#twitch-embed').html(carousel[contCarousel][0][2]);
                                $('iframe').css('width', '100%');
                            }
                        $('#fechaTarian').html(carousel[contCarousel][0][4]);
                        $('#contenedorPrinc').css('display', 'none');
                        $('#contenedorPrinc').css('background', 'none');
                        $('#pdf').css('display', 'none');
                        console.log('Es un video');
                        $('#descripcion').html(carousel[contCarousel][0][0]);
                        $('#idTarianComment').val(carousel[contCarousel][0][5]);
                        }
                    
    
                        break;
    
                    case carousel[contCarousel][4]===1:
                    if (data[contCarousel][8]==='1') {
                        $('#svgRetarians').css('display', 'block');
                        $('#contenido').css('display', 'block');
                        $('#contenido').html(carousel[contCarousel][0][0]);
                        $('#contenido').css('color', 'red');
                        $('#pdf').attr('href', '../mostrar/'+carousel[contCarousel][0][3]);
                        $('#pdf').css('display', 'inline');
                        $('#pdf').html(carousel[contCarousel][0][3]);
                        $('#nameUserCont').html('Retarians de: '+nameUser);
                        $('#retarianContenido').html(data[contCarousel][7]);
                        $('#fechaTarian').html(carousel[contCarousel][0][4]);
                        $('#descripcion').html(carousel[contCarousel][0][0]);
                        $('#contenedorPrinc').css('background', 'white');
                        $('#contenedorPrinc').css('padding', '0');
                        $('#idTarianComment').val(carousel[contCarousel][0][5]);
                            console.log('Es un pdf');
                    }else{
                        $('#fechaTarian').html(carousel[contCarousel][0][4]);
                        $('#pdf').attr('href', '../mostrar/'+carousel[contCarousel][0][3]);
                        $('#pdf').css('display', 'inline');
                        $('#pdf').html(carousel[contCarousel][0][3]);
                        $('#descripcion').html(carousel[contCarousel][0][0]);
                        $('#contenedorPrinc').css('background', 'white');
                        $('#contenedorPrinc').css('padding', '0');
                        $('#idTarianComment').val(carousel[contCarousel][0][5]);
                            console.log('Es un pdf');
                    }
                  
                        break;
    
    
    
                    default:
                        
                    if (data[contCarousel][8]==='1') {
                        $('#svgRetarians').css('display', 'block');
                        $('#nameUserCont').html('Retarians de: '+nameUser)
                        $('#nombrePerfil2').html(data[contCarousel][6]);
                        $('#fechaTarian').html(carousel[contCarousel][0][4]);
                        $('#contenido').html(carousel[contCarousel][0][0]);
                        $('#contenido').css('display', 'block');
                        $('#contenido').css('color', 'red');
                        $('#retarianContenido').html(data[contCarousel][7]);
                        $('#descripcion').html('');
                        $('#contenedorPrinc').css('background', 'white');
                        $('#contenedorPrinc').css('padding', '0');
                        $('#idTarianComment').val(carousel[contCarousel][0][5]);
                    }else{
                        $('#nombrePerfil2').html(nameUser);
                        $('#contenido').css('color', 'black');
                        $('#fechaTarian').html(carousel[contCarousel][0][4]);
                        $('#contenido').html(carousel[contCarousel][0][0])
                        $('#contenido').css('display', 'block');
                        $('#descripcion').html('');
                        $('#contenedorPrinc').css('background', 'white');
                        $('#contenedorPrinc').css('padding', '0');
                        $('#idTarianComment').val(carousel[contCarousel][0][5]);
                    }
                    
                       
    
                        console.log('Es un texto');
                }
    
        })
    }
    
}