const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const imagenContenedor = document.getElementById('imagenContenedor');

boton1.addEventListener('click', function() {
    mostrarTexto('Pantalla de Mensajes');
});

boton2.addEventListener('click', function() {
    mostrarTexto('Pantalla de Posts');
});

boton3.addEventListener('click', function() {
    mostrarTexto('Pantalla de Comunidad');
});

function mostrarTexto(texto) {
    document.body.innerHTML = `
        <div class="contenido-nuevo">${texto}</div>
        <div class="boton-regreso">
            <img src="return.png" alt="Regresar" id="boton-regresar">
        </div>
    `;

    document.getElementById('boton-regresar').addEventListener('click', mostrarPantallaPrincipal);
    const nuevoDiv = document.createElement('div');
    nuevoDiv.textContent = texto;
    nuevoDiv.className = 'contenido-nuevo';
    document.body.appendChild(nuevoDiv);
}

function mostrarPantallaPrincipal() {
    const htmlPantallaPrincipal = `
        <div class="titulo">
            <img src="NexusWave.png" alt="NexusWave Logo">
            <img src="subtituloImagen.png" alt="Descripción" class="imagen-pequena">
        </div>
        <div class="subtitulo">
            Elige un botón
        </div>
        <div class="botonera">
            <div class="boton-con-texto">
                <button id="boton1"></button>
                <div class="texto-boton">Mensajes</div>
            </div>
            <div class="boton-con-texto">
                <button id="boton2"></button>
                <div class="texto-boton">Post</div>
            </div>
            <div class="boton-con-texto">
                <button id="boton3"></button>
                <div class="texto-boton">Comunidad</div>
            </div>
        </div>
        <div id="imagenContenedor"></div>
    `;

    document.body.innerHTML = htmlPantallaPrincipal;
    agregarEventListenersABotones();
}

function agregarEventListenersABotones() {
    document.getElementById('boton1').addEventListener('click', function() {
        mostrarTexto('Pantalla de Mensajes');
    });
    document.getElementById('boton2').addEventListener('click', function() {
        mostrarTexto('Pantalla de Posts');
    });
    document.getElementById('boton3').addEventListener('click', function() {
        mostrarTexto('Pantalla de Comunidad');
    });
}

mostrarPantallaPrincipal();