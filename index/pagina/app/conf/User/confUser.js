$(window).on('load', codigo);

function codigo() {
    indiceIdiomas();
    idUser = window.location.href.split('?')[1].split('=')[1];
    $('#eligeIdioma').on('change', eventoIdioma);
    $('#menuPerfil').on('click', eventoPerfil);
    $('#menuConfig').on('click', eventoConfig);
    $('#menuUser').on('click', eventoUser);
    $('#menuCuenta').on('click', eventoCuenta);
    $('#menuSesion').on('click', eventoSesion);
    $('#toggle').on('change', eventoToogle);
    $('#formCuentaPasword').on('submit', e=>eventoComparaCont(e));
    $('#atras').attr('href', '../../accesPrinc.php?id='+idUser);
    $('#formComPassword').on('submit',  e=>eventoComparaContCom(e));

    for (const value of document.getElementsByClassName('ojoPassword')) {
        value.addEventListener('click', muestraCont);
        value.style.cursor = "pointer";
    }
    
    for (const value of document.getElementsByClassName('ojoPassword2')) {
        value.addEventListener('click', muestraCont2);
        value.style.cursor = "pointer";
    }


    for (const value of document.getElementsByClassName('idUser')) {
        value.value = idUser;
    }


    function eventoToogle() {
        if (this.checked) {
            $('body').css('background-color', 'white'); 

            for (let index = 0; index < document.getElementsByClassName('divMenu').length; index++) {
            
                document.getElementsByClassName('divMenu')[index].style.borderColor = 'black';

                document.getElementsByClassName('divMenu')[index].childNodes[1].style.fill = 'black';

                document.getElementsByClassName('divMenu')[index].childNodes[3].style.color = 'black';
                
            }
            

        }else{
            $('body').css('background-color', '#333333'); 

            for (let index = 0; index < document.getElementsByClassName('divMenu').length; index++) {
            
                document.getElementsByClassName('divMenu')[index].style.borderColor = 'white';
                
                document.getElementsByClassName('divMenu')[index].childNodes[1].style.fill = '#ffc107';

                document.getElementsByClassName('divMenu')[index].childNodes[3].style.color = '#ffc107';
                
            }
        }
           
    }

    function eventoPerfil() {
        defecto();
        $('#menuPerfil').css('background-color', 'white');
        $('#menuPerfil').css('opacity', '100%');
        $('#perfil').css('display','block');
    }

    function eventoConfig() {
        defecto();
        $('#menuConfig').css('background-color', 'white');
        $('#menuConfig').css('opacity', '100%');
        $('#config').css('display','block');
    }

    function eventoUser() {
        defecto();
        $('#menuUser').css('background-color', 'white');
        $('#menuUser').css('opacity', '100%');
        $('#usuarios').css('display','block');
    }

    function eventoCuenta() {
        defecto();
        $('#menuCuenta').css('background-color', 'white');
        $('#menuCuenta').css('opacity', '100%');
        $('#cuenta').css('display','block');
    }

    function eventoSesion() {
        window.location.replace('../../../indice.html');
    }


    function defecto() {
        for (let index = 0; index < document.getElementsByClassName('divMenu').length; index++) {
            
            document.getElementsByClassName('divMenu')[index].style.backgroundColor = 'inherit';
            document.getElementsByClassName('divMenu')[index].style.opacity = '50%';
            
        }

        for (let index = 0; index < document.getElementsByClassName('divSubmenu').length; index++) {
            
            document.getElementsByClassName('divSubmenu')[index].style.display = 'none';
            
        }
    }


    function eventoComparaCont(e) {

        e.preventDefault();

        let contrasena01 = $('#passwordNewCuenta').val();
        let contrasena02 = $('#passwordRepCuenta').val();

        if (contrasena01 !== contrasena02) {
            for (const value of document.getElementsByClassName('errorPasswordCambia')) {
                value.innerHTML = 'Error, las contraseñas no coinciden, asegúrate de que ambas coincidan.';
            }
        }else{
            for (const value of document.getElementsByClassName('errorPasswordCambia')) {
                value.innerHTML = '';
            }
            
            document.getElementById('formCuentaPasword').submit();
        }

    }

    function eventoComparaContCom(e) {

        e.preventDefault();

        let contrasena01 = $('#passwordComCambCom').val();
        let contrasena02 = $('#passwordComRepCambCom').val();

        if (contrasena01 !== contrasena02) {
            for (const value of document.getElementsByClassName('errorPasswordCambia')) {
                value.innerHTML = 'Error, las contraseñas no coinciden, asegúrate de que ambas coincidan.';
            }
        }else{
            for (const value of document.getElementsByClassName('errorPasswordCambia')) {
                value.innerHTML = '';
            }
            
            document.getElementById('formComPassword').submit();
        }

    }

    let dataDesb = new FormData();

    dataDesb.append('idUser', idUser);

    fetch('../UsuariosBack/bloq/desbloq.php', {
        url: '../UsuariosBack/bloq/desbloq.php',
        method: 'POST',
        body: dataDesb
    })
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let contCHeck = 0;

        for (const value of data) {
            document.getElementById('formDesbUsuarios').innerHTML += '<div class="row p-4 align-items-center"><div class="col-auto"><input type="hidden" name="idUser" id="idUser" value="'+idUser+'"><input type="checkbox" value="'+value[2]+'" name="bloq[]" id="bloq'+contCHeck+++'"></div><div class="col-3 col-sm-auto my-3 my-sm-0"><img class="rounded-circle" width="50" height="50" src="../../../'+value[1]+'" alt=""></div><div class="col-5 col-sm-7"><span>'+value[0]+'</span></div><div class="col-12 col-sm-auto text-center text-sm-end mx-0 mx-lg-5 my-2 my-sm-0"><span>Bloqueado: </span><span id="span'+value[2]+'"></span></div></div>';


            document.getElementById('span'+value[2]+'').innerHTML = 'No';
        }

        fetch('../UsuariosBack/bloq/devuelveBloq.php', {
            url: '../UsuariosBack/bloq/devuelveBloq.php',
            method: 'POST',
            body: dataDesb
        })
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            if (data !== null) {
                for (const value of document.getElementsByName('bloq[]')) {
                    for (const value2 of data) {
                        if (value2 == value.value) {
                            document.getElementById('bloq1').checked = true;
                            document.getElementById('span'+value.value+'').innerHTML = 'Si';
                        }else{
                            document.getElementById('span'+value.value+'').innerHTML = 'No';
                        }
                    }
                }
            }
            
        })

    })





    fetch('../ConfigPerfil/tarians/tarians.php', {
        url: '../ConfigPerfil/tarians/tarians.php',
        method: 'POST',
        body: dataDesb
    })
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let contCHeck = 0;
        console.log(data);

        for (const value of data) {
            document.getElementById('deleteUserTariansForm').innerHTML += '<div class="row" style="padding: 20px 0px"><input type="hidden" name="idUserTariansUser" id="idUserTarians" value="'+idUser+'"><div class="col-12 col-sm-7"><div class="row"><div class="col-10 col-sm-auto my-3 my-sm-0"><input type="checkbox" value="'+value[6]+'" name="tariansUser[]" id="tariansDelete'+contCHeck+++'"><span style="padding-left: 10px;">'+value[5]+'</span></div><div class="col-10 col-sm-7"><span>'+value[0]+'</span></div></div></div><div class="col-12 col-sm-4"><span>Fecha: </span><span>'+value[4]+'</span></div></div>';
        }
    })



    fetch('../ConfigPerfil/comentarios/comments.php', {
        url: '../ConfigPerfil/comentarios/comments.php',
        method: 'POST',
        body: dataDesb
    })
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let contCHeck = 0;
        console.log(data);

        for (const value of data) {
            document.getElementById('deleteUserCommentsForm').innerHTML += '<div class="row" style="padding: 20px 0px"><input type="hidden" name="idUserComments" id="idUserComments" value="'+idUser+'"><div class="col-12 col-sm-7"><div class="row"><div class="col-10 col-sm-auto my-3 my-sm-0"><input type="checkbox" value="'+value[3]+'" name="comments[]" id="comentarioDelete'+contCHeck+++'"><span style="padding-left: 10px;">'+value[2]+'</span></div><div class="col-10 col-sm-7"><span>'+value[0]+'</span></div></div></div><div class="col-12 col-sm-4"><span>Fecha: </span><span>'+value[1]+'</span></div></div>';
        }
    })



    function muestraCont() {
        let input = this.nextElementSibling;
        
        if (input.type === 'password') {
            input.type = 'text';
        }else{
            input.type = 'password';
        }

        
    }


    function muestraCont2() {
        
        let input = this.nextElementSibling;
        
        if (input.type === 'password') {
            input.type = 'text';
        }else{
            input.type = 'password';
        }

        
    }

    function indiceIdiomas() {
        fetch('../Admin/confIdiomaAdmin.json')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data)
        var idioma = localStorage.getItem('localLanguajes');
        if (idioma===undefined || idioma === 'null') {
            idioma = sessionStorage.getItem('sesionLanguajes');
        }
            //START PAGE
            $('#txtHome').html(data[idioma].home);
            $('#atras').html(data[idioma].back);
            //PERFIL
            $('#perfil23').html(data[idioma].profile);
            $('#textAdministrador').html(data[idioma].interiorProfile.admin);
            $('#textUsuariosAdmin').html(data[idioma].interiorProfile.interiorAdmin.users);
            $('#textComentariosAdmin').html(data[idioma].interiorProfile.comments);
            $('#textComunidadAdmin').html(data[idioma].interiorProfile.community);
            for (const value of  document.getElementsByClassName('botonDelete')) {
                value.innerHTML = data[idioma].interiorProfile.interiorAdmin.interiorUser.deleteButton;
            }
            $('#textInfo01').html(data[idioma].interiorProfile.interiorCommunity.keyss.info);
            $('.keyssAdmin').html(data[idioma].interiorProfile.interiorCommunity.keyss.keyss);
            $('.passwordAdmin').html(data[idioma].interiorProfile.interiorCommunity.keyss.password);
            $('#keyssComAdmin').html(data[idioma].interiorProfile.interiorCommunity.deleteCom.communityKeyss);
            $('#passwordComAdmin').html(data[idioma].interiorProfile.interiorCommunity.deleteCom.communityPassword);
            $('.keyssAdminComUser').html(data[idioma].interiorProfile.interiorCommunity.deleteCom.userKeyss);
            $('.passwordAdminComUser').html(data[idioma].interiorProfile.interiorCommunity.deleteCom.userPassword);
            $('.passwordRepeat').html(data[idioma].interiorProfile.interiorCommunity.password.repeatPassword);
            $('.passwordNewCom').html(data[idioma].interiorProfile.interiorCommunity.password.newPassword);
            $('#nuevaImagen').html(data[idioma].interiorProfile.interiorCommunity.img.img);
            $('#newNameCom').html(data[idioma].interiorProfile.interiorCommunity.name.name);
            $('#textInfo02').html(data[idioma].interiorProfile.interiorCommunity.password.info);
            $('#textInfo03').html(data[idioma].interiorProfile.interiorCommunity.img.info);
            $('.send').html(data[idioma].interiorProfile.interiorCommunity.img.button);
            $('#textInfo04').html(data[idioma].interiorProfile.interiorCommunity.name.info);
            $('#textInfo05').html(data[idioma].interiorProfile.interiorCommunity.deleteCom.info);
            $('.botonDelete').html(data[idioma].interiorProfile.interiorAdmin.interiorUser.deleteButton);
            $('#editNamePerfil').html(data[idioma].editName);
            $('.nameUserText').html(data[idioma].interiorEditName.name);
            $('.passwordUserText').html(data[idioma].interiorEditName.password);
            $('#cambiaImgtext').html(data[idioma].interiorEditImg.img);
            $('#deletePerfilText').html(data[idioma].deleteProfile);
            //END PERFIL
            //START CONFIGURACION
            $('#chooseLanguage').html(data[idioma].interiorConfig.interior.language);
            $('#option0').html(data[idioma].interiorConfig.interior.language);
            $('#perm').html(data[idioma].interiorConfig.interior.button);
            $('.comments').html(data[idioma].interiorConfig.comments);
            //END CONFIGURACION
            //START USERS
            $('.bloqDesbloq').html(data[idioma].interiorUser.interior.button);
            //END USERS
            //START ACCOUNT
            $('.passwordAccount').html(data[idioma].interiorAccount.password);
            $('#infopasswordAccount').html(data[idioma].interiorAccount.interiorPassword.info);
            $('#keyssAccount').html(data[idioma].interiorAccount.keyss);
            $('#keyssAccountInfo').html(data[idioma].interiorAccount.interiorKeyss.info);
            //END ACCOUNT
            $('#configuracion').html(data[idioma].config);
            $('#usuariostext').html(data[idioma].users);
            $('#cuentatext').html(data[idioma].account);
            $('#cerrarSession').html(data[idioma].logout);
            //END PAGE
    })
    }
    

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

}