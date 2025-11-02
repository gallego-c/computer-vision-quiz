window.questionsByTopic = window.questionsByTopic || {};
window.questionsByTopic.tema2 = [
  // Preguntas sobre procesamiento en el dominio espacial y frecuencial
  {
    q: "¿Qué es el dominio espacial?",
    opts: [
      "Métodos basados en la manipulación directa de los píxeles de la imagen y sus valores de intensidad asociados.",
      "Métodos basados en la manipulación de frecuencias obtenidas por transformada de Fourier.",
      "Operaciones que usan filtros de paso bajo y paso alto.",
      "Operaciones de contorno y transformaciones geométricas."
    ],
    correct: [0]
  },

  {
    q: "¿Qué operaciones están involucradas en el procesado en el dominio frecuencial?",
    opts: [
      "Operaciones basadas en la manipulación de los valores de intensidad de los píxeles.",
      "Transformaciones geométricas como rotación y escalado.",
      "Manipulación de las frecuencias de la imagen mediante la transformada de Fourier.",
      "Operaciones puntuales sobre los valores de intensidad."
    ],
    correct: [2]
  },

  // Operaciones puntuales
  {
    q: "¿Qué son las operaciones puntuales en el procesamiento de imágenes?",
    opts: [
      "Transformaciones que se aplican a cada píxel de la imagen de manera individual, sin considerar los píxeles vecinos.",
      "Operaciones como la de convolución y correlación.",
      "Filtros que afectan las frecuencias de la imagen en el dominio frecuencial.",
      "Transformaciones que se aplican a cada píxel de la imagen teniendo en cuenta los píxeles vecinos."
    ],
    correct: [0]
  },

  {
    q: "¿Cuáles son ejemplos de operaciones puntuales sobre imágenes?",
    opts: [
      "Operaciones aritméticas como suma, resta, multiplicación y división.",
      "Operaciones de filtrado en el dominio frecuencial.",
      "Transformaciones geométricas y de intensidad.",
      "Operaciones de correlación y convolución."
    ],
    correct: [0, 2]
  },

  // Dominio espacial y frecuencial
  {
    q: "¿Cuál es la principal diferencia entre el dominio espacial y el dominio frecuencial?",
    opts: [,
      "El dominio espacial se utiliza para realizar transformaciones geométricas, mientras que el dominio frecuencial se usa para filtrar la imagen.",
      "El dominio espacial maneja la intensidad de los píxeles, mientras que el dominio frecuencial maneja las frecuencias y la resolución.",
      "El dominio espacial manipula los píxeles de forma puntual, mientras que el dominio frecuencial se usa para operaciones aritméticas.",
      "El dominio espacial se refiere a la manipulación directa de los píxeles, mientras que el dominio frecuencial manipula las frecuencias obtenidas de la transformada de Fourier."
    ],
    correct: [3]
  },

  // Operaciones aritméticas
  {
    q: "¿Qué son las operaciones aritméticas en el procesamiento de imágenes?",
    opts: [
      "Operaciones que aplican filtros de suavizado a la imagen.",
      "Operaciones que modifican el valor de intensidad de cada píxel mediante operaciones matemáticas.",
      "Operaciones que transforman la imagen en el dominio frecuencial.",
      "Operaciones que modifican el tamaño o la resolución de la imagen."
    ],
    correct: [1]
  },

  {
    q: "¿Qué operaciones aritméticas se pueden realizar en el procesamiento de imágenes?",
    opts: [
      "Suma, resta, multiplicación y división entre imágenes o entre una imagen y una constante.",
      "Transformaciones logarítmicas y exponenciales.",
      "Interpolación bilineal y bicúbica.",
      "Operaciones de detección de bordes y contornos."
    ],
    correct: [0]
  },

  //Operaciones logicas
  {
    q: "¿Qué son las operaciones lógicas en el procesamiento de imágenes?",
    opts: [
      "Operaciones que se aplican a los valores de intensidad de los píxeles utilizando operadores lógicos.",
      "Operaciones que combinan múltiples imágenes en una sola.",
      "Operaciones que alteran la geometría de la imagen.",
      "Operaciones que se realizan en el dominio frecuencial."
    ],
    correct: [0]
  },
  {
    q: "¿Se pueden aplicar operaciones lógicas a imágenes en escala de grises?",
    opts: [
      "Sí, las operaciones lógicas se pueden aplicar a imágenes en escala de grises.",
      "No, solo se pueden aplicar a imágenes binarias.",
      "Depende del tipo de operación lógica.",
      "Ninguna de las anteriores."
    ],
    correct: [1]
  },
  {
    q: "¿Cuáles son ejemplos de operaciones lógicas en el procesamiento de imágenes?",
    opts: [
      "Operaciones de logaritmos y exponenciales.",
      "Operaciones de combinación de imágenes mediante AND, OR y NOT.",
      "Operacion XOR.",
      "Ninguna de las anteriores."
    ],
    correct: [1,2]
  },

  {
    q: "¿Dadas dos imágenes binarias A y B, cada una con solo un objeto, la operación que devuelve la imagen conteniendo ambos objetos es:",
    opts: [
      "A AND B",
      "A XOR B",
      "A OR B",
      "Ninguna de las anteriores."
    ],
    correct: [2]
  },
  //Transformaciones de intensidad
  {
    q: "¿Qué son las transformaciones de intensidad en el procesamiento de imágenes?",
    opts: [
      "Operaciones que alteran la geometría de la imagen.",
      "Operaciones que transforman la imagen en el dominio frecuencial.",
      "Operaciones que modifican los valores de intensidad de los píxeles de una imagen.",
      "Transformaciones definidas como una función T: [0, L − 1] → [0, L − 1], donde L es la intensidad máxima (generalmente, 256)"
    ],
    correct: [2, 3]
  },
  {
    q: "¿Cuáles son ejemplos de transformaciones de intensidad?",
    opts: [ 
      "Transformaciones lineales, logarítmicas y exponenciales.",
      "Transformaciones de potencia n-ésima y raíz n-ésima.",
      "Transformaciones definidas a trozos.",
      "Transformaciones basadas en el histograma de la imagen."
    ],
    correct: [0, 1, 2, 3]
  },

  {
    q: "¿Qué es una transformación logarítmica en el procesamiento de imágenes?",
    opts: [
      "Una transformación que utiliza la función exponencial para modificar los valores de intensidad.",
      "Una transformación que aplica la función logarítmica para expandir los valores de intensidad bajos y comprimir los altos.",
      "Una transformación que aplica una función lineal a los valores de intensidad.",
      "Una transformación que utiliza la raíz cuadrada para ajustar los valores de intensidad."
    ],
    correct: [1]
  },
  {
    q: "¿Qué afirmaciones son ciertas sobre la transformaciones de intensidad?",
    opts: [
      "En la transformacion lineal, el parametro 'a' controla el contraste de la imagen i 'b' controla el brillo.",
      "La transformacion negativa es util para mejorar regiones claras donde los pixeles oscuros son predominantes.",
      "La transformacion logaritmica incrementa el contraste en las regiones de alta intensidad.",
      "La transformacion exponencial incrementa el contraste en las regiones de alta intensidad."
    ],
    correct: [0, 1, 3]
  },
  {
    q: "¿Qué transformacion corresponde a esta afirmacion? Se utiliza para expandir los valores de intensidad bajos y comprimir los valores altos, mejorando los detalles en las áreas oscuras de la imagen.",
    opts: [
      "Transformación logarítmica",
      "Transformación exponencial",
      "Transformación de potencia n-ésima",
      "Transformación negativa"
    ],
    correct: [0]
  },
  {
    q: "¿Qué transformacion corresponde a esta afirmacion? Se utiliza para incrementar el contraste en las regiones de alta intensidad y disminuirlo en regiones oscuras.",
    opts: [
      "Transformación logarítmica",
      "Transformación exponencial",
      "Transformación de potencia n-ésima",
      "Transformación negativa"
    ],
    correct: [1]
  },
  {
    q: "En una transformación de potencia n-ésima, ¿qué efecto tiene aumentar el valor de gamma (γ) por encima de 1?",
    opts: [
      "Aumenta el contraste en las regiones de alta intensidad.",
      "Disminuye el contraste en las regiones de alta intensidad.",
      "No tiene efecto en la imagen.",
      "Tiene un efecto similar a la transformación exponencial."
    ],
    correct: [0, 3]
  },
  {
    q: "¿Qué es una transformación definida a trozos en el procesamiento de imágenes?",
    opts: [
      "Una transformacion que mantiene la intensidad dentro del rango de interés y asigna un valor constante a los píxeles restantes",
      "Una transformación que se aplica solo a los bordes de la imagen.",
      "Una transformación que transforma solo un rango específico de valores de intensidad.",
      "Una transformación que combina múltiples imágenes en una sola."
    ],
    correct: [0, 2]
  },
  // Histogramas: equalización, expansion y normalización
  {
    q: "¿Porque se aplica la normalización de histogramas?",
    opts: [
      "Para mejorar el contraste de la imagen.",
      "Para reducir el ruido en la imagen.",
      "Para aumentar la resolución de la imagen.",
      "Para cambiar el tamaño de la imagen."
    ],
    correct: [0]
  },
  {
    q: "¿Qué es la equalización de histogramas?",
    opts: [
      "Es un método para ajustar el contraste de una imagen al redistribuir los valores de intensidad.",
      "Es un método para reducir el tamaño de una imagen.",
      "Es un método para aumentar la resolución de una imagen.",
      "Es un método para cambiar el formato de una imagen."
    ],
    correct: [0]
  },
  {
    q: "¿Cuál es el objetivo de la expansión de histogramas?",
    opts: [
      "Aumentar el contraste en las regiones de baja intensidad.",
      "Disminuir el contraste en las regiones de alta intensidad.",
      "Mantener el contraste original de la imagen.",
      "Eliminar el ruido de la imagen."
    ],
    correct: [0]
  },

  // Transformaciones geométricas
  {
    q: "¿Qué son las transformaciones geométricas en el procesamiento de imágenes?",
    opts: [
      "Operaciones que modifican directamente los valores de intensidad de los píxeles.",
      "Operaciones que alteran la posición, orientación, escala o forma de la imagen sin modificar la información de los píxeles.",
      "Operaciones que transforman la imagen en el dominio frecuencial.",
      "Operaciones que aplican efectos visuales como el aumento de contraste."
    ],
    correct: [1]
  },

  {
    q: "¿Cuáles son los tipos de transformaciones geométricas lineales?",
    opts: [
      "Isometrías, escalado, cortes y proyecciones.",
      "Remolinos, distorsiones radiales y ondulaciones.",
      "Rotaciones, traslaciones y escalado.",
      "Operaciones aritméticas sobre píxeles y filtrado."
    ],
    correct: [0]
  },

  // Interpolación
  {
    q: "¿Qué tipos de interpolación se utilizan en las transformaciones geométricas?",
    opts: [
      "Interpolación logarítmica y exponencial.",
      "Interpolación mediante transformaciones geométricas.",
      "Interpolación en el dominio frecuencial.",
      "Vecino más cercano, bilineal y cúbica."
    ],
    correct: [3]
  },

  {
    q: "¿Qué es la interpolación bilineal?",
    opts: [
      "Es un método que asigna a cada píxel un valor de intensidad promedio de los 4 píxeles más cercanos.",
      "Es un método que asigna el valor de intensidad al píxel más cercano.",
      "Es un método que utiliza la información de 16 píxeles más cercanos para calcular el valor de intensidad.",
      "Es un método que aplica transformaciones logarítmicas para interpolar los valores."
    ],
    correct: [0]
  },

  {
    q: "¿Qué es la interpolación cúbica?",
    opts: [
      "Es un método que asigna a cada píxel un valor de intensidad promedio de los 4 píxeles más cercanos.",
      "Es un método que asigna el valor de intensidad al píxel más cercano.",
      "Es un método que utiliza la información de 16 píxeles más cercanos para calcular el valor de intensidad.",
      "Es un método que aplica transformaciones logarítmicas para interpolar los valores."
    ],
    correct: [2]
  },
  {
    q: "¿Qué es la interpolación por vecino más cercano?",
    opts: [
      "Es un método que asigna a cada píxel un valor de intensidad promedio de los 4 píxeles más cercanos.",
      "Es un método que asigna el valor de intensidad al píxel más cercano.",
      "Es un método que utiliza la información de 16 píxeles más cercanos para calcular el valor de intensidad.",
      "Es un método que aplica transformaciones logarítmicas para interpolar los valores."
    ],
    correct: [1]
  },

  // Preguntas específicas sobre operaciones aritméticas
  {
    q: "¿Qué ocurre al realizar la **suma de dos imágenes** en el dominio espacial?",
    opts: [
      "Los valores de intensidad de cada píxel de la imagen resultante se calculan sumando los valores correspondientes de las dos imágenes.",
      "La imagen resultante tendrá un rango de intensidad más estrecho que las imágenes originales.",
      "Solo se pueden sumar imágenes con el mismo tamaño y resolución.",
      "El resultado será una imagen en blanco y negro."
    ],
    correct: [0, 2]
  },

  {
    q: "¿Qué se obtiene al realizar la **suma de una imagen y una constante**?",
    opts: [
      "Cada valor de intensidad en la imagen se incrementa por una constante, lo que hace que la imagen se aclare.",
      "Cada píxel de la imagen se sustituye por un valor fijo dado por la constante.",
      "La constante se resta de todos los píxeles de la imagen, lo que oscurece la imagen.",
      "La suma de una constante hace que la imagen pierda todos sus detalles."
    ],
    correct: [0]
  },

  {
    q: "¿Qué efecto tiene la **resta entre dos imágenes**?",
    opts: [
      "El valor de cada píxel de la imagen resultante es la diferencia entre las intensidades de píxeles correspondientes de las dos imágenes.",
      "El resultado de la resta siempre será una imagen en blanco y negro.",
      "La resta se utiliza para reducir el tamaño de la imagen.",
      "La imagen resultante tendrá una intensidad global mucho mayor que las originales."
    ],
    correct: [0]
  },

  {
    q: "¿Qué sucede al realizar la **multiplicación de dos imágenes** en el dominio espacial?",
    opts: [
      "Cada valor de intensidad en el píxel de la imagen resultante se calcula multiplicando los valores correspondientes de las dos imágenes.",
      "El valor de intensidad se multiplica por una constante predefinida.",
      "El proceso aumenta la resolución de la imagen.",
      "La multiplicación de imágenes no es posible en el dominio espacial."
    ],
    correct: [0]
  },

  {
    q: "¿Cuál es el efecto de la **división de dos imágenes**?",
    opts: [
      "El valor de intensidad de cada píxel de la imagen resultante es el cociente de los valores de intensidad correspondientes de las dos imágenes.",
      "La división reduce la intensidad global de la imagen.",
      "La imagen resultante tendrá menos detalles en las zonas más claras.",
      "La división de imágenes no puede realizarse si una imagen tiene valores de intensidad cero."
    ],
    correct: [0, 3]
  },

  // Transformaciones geométricas específicas
  {
    q: "¿Qué es una **transformación isométrica** en el contexto del procesamiento de imágenes?",
    opts: [
      "Es una transformación geométrica que preserva las distancias entre los píxeles, como la rotación, traslación y reflexión.",
      "Es una transformación que altera las proporciones de la imagen, como el escalado.",
      "Es un tipo de corte oblicuo que se aplica sobre una imagen.",
      "Las transformaciones isométricas solo aplican a imágenes 3D."
    ],
    correct: [0]
  },

  {
    q: "¿Qué efecto tiene el **escalado de una imagen**?",
    opts: [
      "Modifica el tamaño de la imagen manteniendo la misma forma.",
      "Cambia las proporciones de la imagen, estirándola o comprimiéndola.",
      "Conserva la resolución original y solo altera la forma.",
      "Escalar la imagen no afecta su calidad ni resolución."
    ],
    correct: [1]
  },

  {
    q: "¿Qué es una **transformación de corte** en el procesamiento de imágenes?",
    opts: [
      "Es una transformación que altera la orientación de la imagen, cortando a lo largo de ángulos oblicuos.",
      "Corta la imagen en trozos iguales y los distribuye en diferentes posiciones.",
      "Es una transformación que cambia la resolución de la imagen sin modificar su orientación.",
      "No tiene efecto visual en la imagen."
    ],
    correct: [0]
  },

  {
    q: "¿Qué es una **proyección** en las transformaciones geométricas?",
    opts: [
      "Es una transformación que proyecta la imagen sobre un nuevo plano, manteniendo la colinealidad de los objetos.",
      "Es una forma de agrandar los objetos de la imagen.",
      "Es una transformación que rota la imagen sobre su eje central.",
      "Solo afecta a imágenes en 3D."
    ],
    correct: [0]
  },

  {
    q: "¿Qué tipo de **transformación no lineal** distorsiona la imagen creando un efecto de remolino?",
    opts: [
      "Transformación tipo remolino (swirl), que distorsiona la imagen alrededor de un píxel central.",
      "Transformación tipo ondulación (ripple), que crea ondas sinusoidales en la imagen.",
      "Transformación radial, que expande o contrae la imagen como si fuera una lente.",
      "Transformación de proyección, que altera la dirección de la imagen."
    ],
    correct: [0]
  },

  {
    q: "¿Qué efecto tiene la **transformación tipo ondulatorio (ripple)** en una imagen?",
    opts: [
      "Introduce distorsiones sinusoidales en la dirección de los ejes \(x\) o \(y\), creando ondas.",
      "Desplaza los píxeles de manera aleatoria, sin un patrón específico.",
      "Modifica la escala de la imagen sin alterar su forma.",
      "Rotaciona la imagen alrededor de un centro fijo."
    ],
    correct: [0]
  },

  {
    q: "¿Qué es una **distorsión radial** en el procesamiento de imágenes?",
    opts: [
      "Una transformación que altera la imagen según su proximidad al centro, simulando el efecto de una lente esférica.",
      "Es una transformación que crea ondas sinusoidales en la imagen.",
      "Es un proceso que rota la imagen de manera angular.",
      "No tiene ningún efecto visible sobre la imagen."
    ],
    correct: [0]
  },

  {
    q: "¿Qué tipo de **interpolación** se utiliza cuando se necesitan calcular nuevos valores de intensidad para píxeles no enteros después de una transformación geométrica?",
    opts: [
      "Interpolación bilineal, que calcula los valores a partir de los 4 píxeles más cercanos.",
      "Interpolación cúbica, que utiliza los 16 píxeles más cercanos para calcular los nuevos valores.",
      "Interpolación vecina más cercana, que asigna el valor del píxel más cercano.",
      "Interpolación de Fourier, que utiliza transformadas matemáticas para calcular los valores."
    ],
    correct: [0, 1]
  }
];
