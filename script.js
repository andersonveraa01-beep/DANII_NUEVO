/* =========================
   CAMBIO DE ESCENAS
========================= */

function cambiarEscena(id) {

    const escenas = document.querySelectorAll(".escena");

    escenas.forEach(escena => {
        escena.classList.remove("activa");
    });

    const nuevaEscena = document.getElementById(id);

    if (nuevaEscena) {
        nuevaEscena.classList.add("activa");
    }
}


/* =========================
   COMENZAR
========================= */

function mostrarCarta() {

    cambiarEscena("carta");

}


/* =========================
   ABRIR CARTA
========================= */

function abrirCarta() {

    const sobre = document.getElementById("sobre");

    if (sobre) {
        sobre.classList.add("abierto");
    }

    setTimeout(() => {
        escribirCarta();
    }, 800);
}


/* =========================
   ESCRIBIR CARTA
========================= */

function escribirCarta() {

    const texto = `
Me alegro que hayas llegado a mi vida y poco a poco 
te hayas convertido en alguien muy especial.

Por eso quería preparar algo diferente para ti.

Quizás no sea el mas expresivo  
pero espero que estas pequeñas flores amarillas 
te recuerden lo mucho que vales.

Nunca dejes de sonreír 
y nunca olvides lo especial que eres negrita. 💛
`;

    const mensaje = document.getElementById("mensaje");
    const sobre = document.getElementById("sobre");
    const carta = document.getElementById("textoCarta");

    if (!mensaje || !carta) {
        return;
    }

    if (sobre) {
        sobre.style.display = "none";
    }

    carta.classList.add("visible");

    mensaje.textContent = "";

    let posicion = 0;

    function escribir() {

        if (posicion < texto.length) {

            mensaje.textContent += texto.charAt(posicion);

            posicion++;

            setTimeout(escribir, 35);
        }
    }

    escribir();
}


/* =========================
   MOSTRAR FOTO
========================= */

function mostrarFoto() {

    cambiarEscena("foto");

}


/* =========================
   MOSTRAR FINAL
========================= */

function mostrarFinal() {

    cambiarEscena("final");

    crearCorazones();

}


/* =========================
   VOLVER AL INICIO
========================= */

function volverInicio() {

    location.reload();

}


/* =========================
   CORAZONES
========================= */

function crearCorazones() {

    const cantidad = 25;

    for (let i = 0; i < cantidad; i++) {

        const corazon = document.createElement("div");

        corazon.textContent =
            Math.random() > 0.5
                ? "❤️"
                : "💛";

        corazon.style.position = "fixed";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.bottom = "-40px";

        corazon.style.fontSize =
            (15 + Math.random() * 25) + "px";

        corazon.style.zIndex = "10";

        corazon.style.pointerEvents = "none";

        document.body.appendChild(corazon);

        const duracion =
            3000 + Math.random() * 4000;

        corazon.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(-110vh) rotate(${Math.random() * 360}deg)`,

                    opacity: 0
                }
            ],

            {
                duration: duracion,
                easing: "ease-out"
            }

        );

        setTimeout(() => {

            corazon.remove();

        }, duracion);
    }
}