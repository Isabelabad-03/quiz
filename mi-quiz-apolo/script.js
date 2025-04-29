const quizData = [
    {
        question: "¿Según las fuentes, ¿qué tipo de cámara se menciona que está en el paquete de estiba del Comandante?",
        options: ["Cámara Hasselblad eléctrica", "Cámara de 16 milímetros", "Cámara de primeros planos"],
        correctAnswer: 1, // Índice 1 es "Cámara de 16 milímetros"
        justification: "Las fuentes mencionan que el paquete de estiba del Comandante contiene \"a 16-millimeter camera\"."
    },
    {
        question: "¿Cuál era el propósito del \"pequeño cilindro\" asociado a la cámara de 16 milímetros?",
        options: ["Un rollo de película de repuesto", "Un disparador remoto", "Una manivela para la cámara"],
        correctAnswer: 2, // Índice 2 es "Una manivela para la cámara"
        justification: "Las fuentes aclaran que es \"the camera crank... for the 16 sequence camera if it jams\"."
    },
    {
        question: "El Magazine Uniform de la cámara Hasselblad, recomendado para tomas interiores, estaba cargado con:",
        options: ["Película a color de alta velocidad", "Película en blanco y negro de alta velocidad", "Película infrarroja"],
        correctAnswer: 1, // Índice 1 es "Película en blanco y negro de alta velocidad"
        justification: "La fuente3 indica que el Magazine Uniform \"is loaded with high speed black-and-white film\"."
    },
    {
        question: "Para la fotografía de entrada (\"entry photography\") usando un magazine fresco de película a color interior, Houston recomendó para la fase del \"fireball\" una configuración de:",
        options: ["F 2.0 a 1/60 de segundo", "F 11 a 1/250 de segundo", "F 16 a 1/500 de segundo"],
        correctAnswer: 1, // Índice 1 es "F 11 a 1/250 de segundo"
        justification: "Las fuentes4 proporcionan las recomendaciones: \"If you are going to use a fresh - magazine of color interior film, we recommend the following exposure settings. F 11 at 1/250th frames per second... for the fireball\"."
    },
     {
        question: "Durante la Actividad Extravehicular (EVA) en la Luna, ¿dónde se encontraba la cámara de primeros planos (\"closeup camera\")?",
        options: ["En la cabina del Módulo Lunar (LM)", "En la superficie lunar, cerca del experimento sísmico", "En la MESA (Modular Equipment Stowage Assembly)"],
        correctAnswer: 2, // Índice 2 es "En la MESA (Modular Equipment Stowage Assembly)"
        justification: "La fuente6 muestra a Houston preguntando a Buzz Aldrin: \"Buzz, this is Houston. Have you removed the closeup camera from the MESA yet? Over.\", indicando que estaba en la MESA."
    },
     {
        question: "Según el reporte de los tripulantes, ¿aproximadamente cuántas exposiciones de película de 70 milímetros se tomaron en el Módulo Lunar (LM)?",
        options: ["Unas 300", "Unas 1000", "Unas 50"],
        correctAnswer: 0, // Índice 0 es "Unas 300"
        justification: "La fuente7 cita a un tripulante diciendo \"we figured we exposed some 300 in the LM\"."
    },
     {
        question: "Además de transmitir vistas generales, ¿para qué se utilizó la cámara de TV en relación con los instrumentos a bordo?",
        options: ["Para medir la distancia a la Tierra", "Para permitir a Houston verificar la visibilidad y lectura de la pantalla DSKY y luces indicadoras", "Para transmitir datos de telemetría de alta velocidad"],
        correctAnswer: 1, // Índice 1 es "Para permitir a Houston verificar la visibilidad y lectura de la pantalla DSKY y luces indicadoras"
        justification: "La fuente8 documenta cómo la tripulación mostró el DSKY a la cámara y preguntó si Houston (\"Goldstone\") podía leer los números y las palabras (\"VERB, NOUN, PROGRAM\") y ver la luz de actividad de la computadora. Houston confirmó que sí podían leerlos."
    },
     {
        question: "¿Cómo se describió la calidad de la señal de la cámara de TV al llegar a la estación terrestre de Goldstone?",
        options: ["Perfectamente nítida y en alta definición", "Un poco nevada (\"snowy\") pero una buena imagen", "Completamente perdida"],
        correctAnswer: 1, // Índice 1 es "Un poco nevada (\"snowy\") pero una buena imagen"
        justification: "La fuente8 reporta \"Goldstone reports they're receiving a TV picture coming down from you all - a little snowy, but a good TV picture\"."
    },
    {
        question: "Después de tomar numerosas fotos en el LM y el Módulo de Mando (CM) con las cámaras de 70 mm, ¿dónde reportaron los tripulantes que tenían ambas cámaras?",
        options: ["Guardadas en el Contenedor de Retorno de Muestras", "En la cabina", "Aún en la superficie lunar junto al LM"],
        correctAnswer: 1, // Índice 1 es "En la cabina"
        justification: "La fuente7 cita al tripulante afirmando que \"both cameras are in the cabin\"."
    },
    {
        question: "Durante la EVA, ¿qué hizo Neil Armstrong con el magazine de la cámara Hasselblad en relación con el Contenedor de Retorno de Muestras Lunar (SRSC)?",
        options: ["Lo colocó dentro del SRSC", "Lo enganchó al SRSC", "Lo dejó temporalmente en la escalera del LM"],
        correctAnswer: 1, // Índice 1 es "Lo enganchó al SRSC"
        justification: "La fuente9 registra a Neil respondiendo a Houston: \"I've got the Hasselblad magazine hooked to the SRSC now\"."
    }
];

const cardsContainer = document.getElementById('cards-container');
const scoreArea = document.getElementById('score-area');

let score = 0;
let answeredCount = 0;

// Función para cargar las preguntas creando las tarjetas
function loadQuiz() {
    cardsContainer.innerHTML = ''; // Limpiar contenido previo
    quizData.forEach((q, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-question-index', index); // Para referenciar la pregunta en quizData

        // Estructura HTML interna de la tarjeta con frontal y trasero
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <p>${index + 1}. ${q.question}</p>
                    <div class="options">
                        ${q.options.map((option, optionIndex) => `
                            <label>
                                <input type="radio" name="q${index}" value="${optionIndex}">
                                <span>${option}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
                <div class="card-back">
                    <div class="result-indicator"></div>
                    <p class="justification"></p>
                </div>
            </div>
        `;

        cardsContainer.appendChild(cardElement);

        // Añadir event listeners a los radio buttons dentro de esta tarjeta
        // Usamos 'change' que se activa cuando un radio button es seleccionado
        const radioButtons = cardElement.querySelectorAll(`input[name="q${index}"]`);
        radioButtons.forEach(radio => {
            radio.addEventListener('change', handleAnswerSelection);
        });
    });

    // Mostrar la puntuación inicial
    updateScoreDisplay();
}

// Función que maneja la selección de una respuesta en una tarjeta
function handleAnswerSelection(event) {
    const selectedRadio = event.target;
    const cardElement = selectedRadio.closest('.card'); // Encontrar la tarjeta padre
    const questionIndex = parseInt(cardElement.getAttribute('data-question-index'));
    const selectedAnswerIndex = parseInt(selectedRadio.value);
    const questionData = quizData[questionIndex];

    // Verificar si la tarjeta ya ha sido volteada (respondida)
    if (cardElement.classList.contains('is-flipped')) {
        return; // Si ya fue respondida, no hacemos nada más
    }

    const cardBack = cardElement.querySelector('.card-back');
    const resultIndicator = cardBack.querySelector('.result-indicator');
    const justificationElement = cardBack.querySelector('.justification');

    // Determinar si la respuesta es correcta
    const isCorrect = (selectedAnswerIndex === questionData.correctAnswer);

    // Actualizar el contenido del lado trasero de la tarjeta
    resultIndicator.classList.add(isCorrect ? 'correct' : 'incorrect');
    resultIndicator.textContent = isCorrect ? '✓' : '✗'; // Usar símbolos de texto
    resultIndicator.setAttribute('aria-label', isCorrect ? 'Correcto' : 'Incorrecto'); // Accesibilidad

    justificationElement.textContent = `Justificación: ${questionData.justification}`;

    // Voltear la tarjeta añadiendo la clase 'is-flipped'
    cardElement.classList.add('is-flipped');

    // Deshabilitar todos los radio buttons en esta tarjeta después de seleccionar una respuesta
    // Esto evita que el usuario cambie la respuesta después de voltear
    cardElement.querySelectorAll(`input[name="q${questionIndex}"]`).forEach(radio => {
        radio.disabled = true;
    });

    // Actualizar puntuación y contador de respuestas
    if (isCorrect) {
        score++;
    }
    answeredCount++;
    updateScoreDisplay();

    // Opcional: Verificar si todas las preguntas han sido respondidas
    if (answeredCount === quizData.length) {
        console.log("¡Quiz completado!");
        // Podrías añadir aquí lógica para mostrar un mensaje final, un botón de reiniciar, etc.
    }
}

// Función para actualizar el texto de la puntuación
function updateScoreDisplay() {
    scoreArea.textContent = `Puntuación: ${score} / ${answeredCount} respondidas (Total: ${quizData.length})`;
}

// Cargar el quiz cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', loadQuiz);