const contenido = document.getElementById("contenido");
const boton = document.getElementById("startButton");

boton.addEventListener("click", iniciar);

function iniciar() {

    contenido.classList.add("fadeOut");

    setTimeout(() => {

        contenido.innerHTML = `

            <h1>Inicializando...</h1>

            <p class="subtitle">
                Preparando la aplicación...
            </p>

            <div class="progress">
                <div class="progress-bar" id="barra"></div>
            </div>

            <div class="percent" id="porcentaje">
                0%
            </div>

        `;

        contenido.classList.remove("fadeOut");
        contenido.classList.add("fadeIn");

        cargar();

    }, 600);

}

function cargar() {

    let progreso = 0;

    const barra = document.getElementById("barra");
    const porcentaje = document.getElementById("porcentaje");

    const intervalo = setInterval(() => {

        progreso++;

        barra.style.width = progreso + "%";
        porcentaje.innerHTML = progreso + "%";

        if (progreso >= 100) {

            clearInterval(intervalo);

            setTimeout(analizar, 800);

        }

    }, 30);

}

function analizar() {

    contenido.classList.add("fadeOut");

    setTimeout(() => {

        contenido.innerHTML = `

            <h1>Analizando registros...</h1>

            <div id="lista"></div>

        `;

        contenido.classList.remove("fadeOut");
        contenido.classList.add("fadeIn");

        escribirLista();

    }, 600);

}

function escribirLista() {

    const registros = [

        "✓ Primera salida encontrada",
        "✓ Muchas risas",
        "✓ Conversaciones muy agradables",
        "✓ Excelente compañía",
        "✓ Ganas de repetir la experiencia"

    ];

    const lista = document.getElementById("lista");

    let i = 0;

    const intervalo = setInterval(() => {

        const linea = document.createElement("p");

        linea.className = "registro";

        linea.innerHTML = registros[i];

        lista.appendChild(linea);

        i++;

        if (i >= registros.length) {

            clearInterval(intervalo);

            setTimeout(resultado, 1500);

        }

    }, 700);

}

function resultado() {

    contenido.classList.add("fadeOut");

    setTimeout(() => {

        contenido.innerHTML = `

            <h1>Resultado encontrado</h1>

            <p class="subtitle">
                Después de analizar toda la información...
                <br><br>
                Existe una única recomendación.
            </p>

            <button id="continuar">
                Ver recomendación
            </button>

        `;

        contenido.classList.remove("fadeOut");
        contenido.classList.add("fadeIn");

        document
            .getElementById("continuar")
            .addEventListener("click", mostrarInvitacion);

    }, 600);

}

function mostrarInvitacion(){

    contenido.classList.add("fadeOut");

    setTimeout(()=>{

        contenido.innerHTML=`

        <h1>Hola, Conny </h1>

        <p class="subtitle">

            Después de analizar cuidadosamente toda la información...

            <br><br>

            Llegué a una conclusión.

        </p>

        <p class="mensaje">

            Disfruté muchísimo salir contigo.

            <br><br>

            Y casualmente...

            <br><br>

            Me gutaría repetirlo.

        </p>

        <button id="preguntar">

            Continuar

        </button>

        `;

        contenido.classList.remove("fadeOut");
        contenido.classList.add("fadeIn");

        document
        .getElementById("preguntar")
        .addEventListener("click",preguntaFinal);

    },600);

}

function preguntaFinal(){

    contenido.classList.add("fadeOut");

    setTimeout(()=>{

        contenido.innerHTML=`

        <h1>Tengo una pregunta...</h1>

        <p class="mensaje">

            ¿Aceptarías una segunda cita conmigo?

        </p>

        <p class="subtitle">

            📅 Este sábado

            <br>

            🕕 6:00 PM

        </p>

        <button id="si">

            Sí 

        </button>

        `;

        contenido.classList.remove("fadeOut");
        contenido.classList.add("fadeIn");

        document
        .getElementById("si")
        .addEventListener("click",final);

    },600);

}

function final(){

    contenido.classList.add("fadeOut");

    setTimeout(()=>{

        contenido.innerHTML=`

        <h1>🥹</h1>

        <h2>¡¡Misión aceptada!!</h2>

        </p>

        <p class="subtitle">

            Nos vemos el sábado 

        </p>

        `;

        contenido.classList.remove("fadeOut");
        contenido.classList.add("fadeIn");

        lanzarConfeti();

    },600);

}
function lanzarConfeti(){

    for(let i=0;i<150;i++){

        confetti({

            particleCount:1,

            spread:90,

            origin:{
                x:Math.random(),
                y:Math.random()-0.2
            }

        });

    }

}