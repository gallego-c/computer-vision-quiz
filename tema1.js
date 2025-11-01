window.questionsByTopic = window.questionsByTopic || {};
window.questionsByTopic.tema1 = [
  // Preguntas tipo test
  {
    q: "¿Qué es el muestreo en el proceso de digitalización de una imagen?",
    opts: [
      "El muestreo es el proceso de asignar colores a los píxeles de la imagen.",
      "El muestreo es el proceso de dividir una imagen continua en una serie de puntos discretos llamados píxeles, determinando así el número de píxeles que tendrá la imagen digitalizada.",
      "El muestreo es el proceso de ajustar la resolución de una imagen para mejorar su calidad.",
      "El muestreo es el proceso de dividir una imagen por colores y grados de intensidad, determinando la escala de grises o colores de dicha imagen."
    ],
    correct: [1]
  },
  {
    q: "¿Qué es la cuantificación en una imagen digital?",
    opts: [
      "La cuantificación es el proceso de convertir los píxeles de la imagen en coordenadas.",
      "La cuantificación es el proceso de asignar valores discretos a los niveles de intensidad de los píxeles.",
      "La cuantificación es el proceso de determinar el número total de píxeles en una imagen.",
      "La cuantificación es el proceso de dividir la imagen en píxeles según los colores presentes."
    ],
    correct: [1]
  },
  {
    q: "¿Cuáles son las ventajas del modelo HSI sobre el modelo RGB en el procesamiento de imágenes?",
    opts: [
      "El modelo HSI utiliza más colores que el modelo RGB, por lo que produce imágenes de mejor calidad.",
      "El modelo HSI es más eficiente para la visualización en pantallas digitales que el modelo RGB.",
      "El modelo HSI separa la información de color en tres componentes: tono, saturación e intensidad, facilitando la manipulación del color sin afectar la luminancia.",
      "El modelo HSI no necesita de una conversión matemática entre los diferentes componentes de color."
    ],
    correct: [2]
  },
  {
    q: "¿Cómo se define el modelo CMY y para qué se utiliza?",
    opts: [
      "El modelo CMY utiliza los colores rojo, verde y azul como primarios y se usa en imágenes digitales.",
      "El modelo CMY utiliza los colores cian, magenta y amarillo como primarios y se utiliza principalmente en sistemas de impresión.",
      "El modelo CMY es utilizado para la conversión entre imágenes digitales y analógicas.",
      "El modelo CMY utiliza los colores cian, magenta y amarillo como primarios y se usa para la visualización en pantallas."
    ],
    correct: [1]
  },
  {
    q: "¿Qué nos dice un histograma de una imagen con una distribución de intensidades uniformemente distribuida?",
    opts: [
      "La imagen tiene una alta densidad de píxeles oscuros.",
      "La imagen está completamente sobreexpuesta.",
      "La imagen tiene un buen contraste, con una variedad adecuada de intensidades.",
      "La imagen tiene un alto nivel de ruido."
    ],
    correct: [2]
  },
  {
    q: "¿Cómo puede el histograma indicar si una imagen tiene buen contraste?",
    opts: [
      "Un histograma con valores concentrados en una sola intensidad indica buen contraste.",
      "Un histograma con picos muy altos indica buen contraste.",
      "Un histograma bien distribuido a través de todo el rango de intensidades indica un buen contraste.",
      "Un histograma plano indica buen contraste."
    ],
    correct: [2]
  },
  {
    q: "¿Cuál es la principal diferencia entre el ruido aditivo y el multiplicativo en una imagen?",
    opts: [
      "El ruido aditivo se distribuye de manera uniforme por toda la imagen, mientras que el ruido multiplicativo se distribuye aleatoriamente.",
      "El ruido aditivo afecta solo las imágenes en color, mientras que el multiplicativo afecta las imágenes en blanco y negro.",
      "El ruido aditivo suma una cantidad aleatoria a los valores de intensidad, mientras que el ruido multiplicativo afecta la imagen multiplicando los valores de intensidad de los píxeles.",
      "El ruido aditivo es menos perceptible que el multiplicativo."
    ],
    correct: [2]
  },
  {
    q: "¿Qué tipo de ruido es modelado por una distribución normal y qué características tiene?",
    opts: [
      "Ruido impulsivo, caracterizado por picos repentinos en la intensidad de los píxeles.",
      "Ruido gaussiano, caracterizado por fluctuaciones aleatorias con una media \( \mu \) y una desviación estándar \( \sigma \).",
      "Ruido de saltos, que introduce variaciones grandes y abruptas en la imagen.",
      "Ruido uniforme, donde los valores de los píxeles se distribuyen de manera equitativa."
    ],
    correct: [1]
  },
  {
    q: "¿Qué condiciones deben cumplirse para que dos píxeles sean considerados vecinos directos?",
    opts: [
      "Deben estar a una distancia de dos píxeles uno del otro.",
      "Deben compartir una esquina.",
      "Deben compartir una arista (estar adyacentes horizontal o verticalmente).",
      "Deben tener valores de intensidad similares."
    ],
    correct: [2]
  },
  {
    q: "Explica qué significa que dos píxeles estén conectados según el criterio de conectividad-8.",
    opts: [
      "Dos píxeles son conectados solo si están alineados horizontalmente o verticalmente.",
      "Dos píxeles son conectados si comparten una esquina.",
      "Dos píxeles son conectados si comparten una esquina o una arista.",
      "Dos píxeles son conectados si tienen el mismo valor de intensidad."
    ],
    correct: [2]
  },

  // Preguntas de respuesta corta
  {
    q: "¿Qué es la digitalización de una imagen y qué procesos implica?",
    opts: [
      "Conversión de una imagen analógica a un formato que puede ser procesado por un ordenador.",
      "Obtención de una imagen de una fuente digital.",
      "Conversión de una imagen de alta resolución a baja resolución.",
      "Ninguna de las anteriores."
    ],
    correct: [0]
  },
  {
    q: "¿Qué determina la resolución espacial de una imagen digital?",
    opts: [
      "La cantidad de colores en la imagen.",
      "El número de píxeles de la imagen.",
      "El rango de intensidad de los colores.",
      "La cantidad de detalles en la imagen."
    ],
    correct: [1]
  },
  {
    q: "¿Cuál es la principal diferencia entre una imagen binaria y una en escala de grises?",
    opts: [
      "Las imágenes binarias solo tienen dos niveles de intensidad, mientras que las imágenes en escala de grises pueden tener muchos más niveles.",
      "Las imágenes binarias tienen más niveles de intensidad que las imágenes en escala de grises.",
      "Las imágenes binarias contienen solo tonos de gris, mientras que las imágenes en escala de grises contienen varios colores.",
      "No hay ninguna diferencia."
    ],
    correct: [0]
  },

  // Preguntas de modelo de color
  {
    q: "¿Qué modelo de color es más utilizado para sistemas de impresión?",
    opts: [
      "RGB",
      "CMY",
      "HSI",
      "YIQ"
    ],
    correct: [1]
  },
  {
    q: "¿Cómo se realiza la conversión entre los modelos RGB y CMY?",
    opts: [
      "Utilizando la fórmula \( R = L - C, G = L - M, B = L - Y \)",
      "Utilizando la fórmula \( R = C + Y + M \)",
      "Utilizando la fórmula \( R = L + C, G = M, B = Y \)",
      "Ninguna de las anteriores."
    ],
    correct: [3]
  },

  // Preguntas sobre el histograma de una imagen
  {
    q: "¿Qué indica un histograma de una imagen si tiene una mayor densidad en la parte izquierda?",
    opts: [
      "La imagen es más brillante.",
      "La imagen tiene un bajo contraste.",
      "La imagen tiende a ser más oscura.",
      "La imagen tiene un buen contraste."
    ],
    correct: [2]
  },
  {
    q: "¿Qué tipo de información proporciona un histograma de intensidad?",
    opts: [
      "La distribución de los valores de intensidad en la imagen.",
      "La resolución espacial de la imagen.",
      "La cantidad de ruido presente en la imagen.",
      "Ninguna de las anteriores."
    ],
    correct: [0]
  },

  // Preguntas sobre el ruido en la imagen
  {
    q: "¿Qué es el ruido impulsivo o sal y pimienta en una imagen?",
    opts: [
      "Introduce píxeles de intensidad baja o alta en la imagen.",
      "Se suma aleatoriamente a los valores de intensidad de los píxeles.",
      "Se multiplica por los valores de intensidad de los píxeles.",
      "Ninguna de las anteriores."
    ],
    correct: [0]
  },
  {
    q: "¿Qué es el ruido gaussiano?",
    opts: [
      "Un tipo de ruido uniforme con valores distribuidos entre 0 y 255.",
      "Un tipo de ruido modelado por una variable aleatoria normal con media \( \mu \) y desviación estándar \( \sigma \).",
      "Un ruido que se genera durante la transmisión de la imagen.",
      "Ninguna de las anteriores."
    ],
    correct: [1]
  },

  // Pregunta sobre relaciones espaciales entre píxeles
  {
    q: "¿Qué diferencia existe entre los vecinos directos e indirectos de un píxel?",
    opts: [
      "Los vecinos directos comparten una arista y los indirectos comparten una esquina.",
      "Los vecinos indirectos están más alejados de los vecinos directos.",
      "No hay diferencia.",
      "Los vecinos indirectos tienen los mismos valores de intensidad."
    ],
    correct: [0]
  }
];

