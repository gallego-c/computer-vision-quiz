window.questionsByTopic = window.questionsByTopic || {};
window.questionsByTopic.tema4 = [
    {
      "q": "¿Qué ocurre si el elemento estructural \(B\) tiene un número impar de píxeles?",
      "opts": [
        "La erosión no es conmutativa.",
        "La erosión es conmutativa.",
        "La dilatación no es conmutativa.",
        "La dilatación es conmutativa."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué significa la dualidad de los operadores morfológicos?",
      "opts": [
        "La erosión es el complemento de la dilatación y viceversa.",
        "La dilatación siempre se aplica antes de la erosión.",
        "Los operadores morfológicos no tienen dualidad.",
        "La dilatación y erosión no se pueden aplicar juntos."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué propiedad tiene el operador apertura aplicado dos veces?",
      "opts": [
        "Es idempotente, es decir, aplicar dos veces da el mismo resultado que aplicarlo solo una vez.",
        "Es conmutativo.",
        "Siempre mejora la resolución de la imagen.",
        "No afecta la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué ocurre si aplicamos el operador apertura a un conjunto al que ya le hemos pasado dicho operador antes?",
      "opts": [
        "El operador apertura es idempotente, por lo que el resultado es el mismo que aplicar solo una vez.",
        "El operador apertura se vuelve ineficaz.",
        "El conjunto se vuelve más cerrado.",
        "El resultado cambia debido a la acción del operador."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué efectos tiene el operador de dilatación sobre una imagen binaria?",
      "opts": [
        "Hace que las áreas blancas se expandan.",
        "Hace que las áreas negras se expandan.",
        "Comprime las zonas blancas.",
        "Hace que las áreas blancas se contraigan."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué sucede con el operador erosión cuando se aplica a una imagen binaria?",
      "opts": [
        "Hace que las áreas blancas se contraigan.",
        "Hace que las áreas blancas se expandan.",
        "Reduce la resolución de la imagen.",
        "Hace que las zonas negras se expandan."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo se calcula el **producto de convolución** en el dominio espacial?",
      "opts": [
        "Multiplicando cada píxel de la imagen por el valor correspondiente del kernel y luego sumando los resultados.",
        "Aplicando un filtro de paso bajo sobre la imagen.",
        "Multiplicando los valores de intensidad de los píxeles por la constante de la imagen.",
        "Aplicando un filtro de suavizado."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué técnica es la más óptima para calcular el **producto de convolución** de una imagen con un kernel de tamaño \(3 \times 3\) de forma computacionalmente eficiente?",
      "opts": [
        "Usar un kernel separable.",
        "Aplicar la transformada de Fourier a la imagen.",
        "Usar un kernel de mayor tamaño.",
        "Aplicar la transformada de Laplace."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué es un **kernel separable**?",
      "opts": [
        "Es un kernel que se puede descomponer en dos vectores, uno para filas y otro para columnas.",
        "Es un kernel que solo se aplica a imágenes de una dimensión.",
        "Es un kernel que no puede aplicarse en el dominio espacial.",
        "Es un kernel que opera sobre todos los píxeles de la imagen simultáneamente."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es la principal ventaja de utilizar un **kernel separable** sobre uno no separable?",
      "opts": [
        "Los kernels separables requieren menos operaciones computacionales, lo que reduce el tiempo de procesamiento.",
        "Los kernels separables dan resultados más precisos.",
        "Los kernels separables funcionan mejor en la eliminación de ruido.",
        "Los kernels separables son más fáciles de implementar en hardware."
      ],
      "correct": [0]
    },
    {
      "q": "¿Por qué el **filtro de la media armónica** puede empeorar el **ruido de tipo sal y pimienta**?",
      "opts": [
        "Porque el filtro de la media armónica da más peso a los píxeles extremos, afectando más el ruido.",
        "Porque la media armónica es más efectiva para eliminar el ruido impulsivo.",
        "Porque suaviza las zonas de alta intensidad pero no afecta el ruido.",
        "Porque no afecta a los bordes de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo se calcula la **primera derivada digital** de una imagen?",
      "opts": [
        "Calculando la diferencia de intensidades entre los píxeles adyacentes en la dirección \(x\) o \(y\).",
        "Realizando un promedio ponderado de los valores de intensidad de los píxeles vecinos.",
        "Aplicando un filtro de paso bajo sobre la imagen.",
        "Multiplicando los valores de intensidad de los píxeles."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué representa el **gradiente digital** de una imagen?",
      "opts": [
        "Es una medida del cambio de intensidad de la imagen en las direcciones \(x\) y \(y\).",
        "Es la suma de los valores de intensidad de los píxeles vecinos.",
        "Es el valor máximo de intensidad en la imagen.",
        "Es el promedio de las intensidades de todos los píxeles."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo se calcula el **módulo del gradiente** de una imagen?",
      "opts": [
        "Es la raíz cuadrada de la suma de los cuadrados de las derivadas en las direcciones \(x\) y \(y\).",
        "Es la diferencia entre el valor máximo y mínimo de intensidad en la imagen.",
        "Es el valor de la media de todas las intensidades de los píxeles.",
        "Es el valor promedio de las derivadas en ambas direcciones."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo se calcula el **Laplaciano** en el contexto del procesamiento de imágenes?",
      "opts": [
        "Es la segunda derivada de la imagen, calculada a partir de las derivadas parciales en \(x\) y \(y\).",
        "Es el promedio de las intensidades de los píxeles vecinos.",
        "Es el cambio de intensidad a través de un filtro Gaussiano.",
        "Es una medida de la diferencia entre la imagen original y la imagen suavizada."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué efecto tiene el operador de **dilatación** en una imagen binaria?",
      "opts": [
        "Expande las áreas blancas de la imagen.",
        "Contrae las áreas negras de la imagen.",
        "Aumenta la resolución de la imagen.",
        "Reduce la cantidad de píxeles blancos."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué hace el operador de **erosión** sobre una imagen binaria?",
      "opts": [
        "Reduce las áreas blancas y elimina pequeños detalles.",
        "Expande las áreas negras de la imagen.",
        "Suaviza las áreas blancas en la imagen.",
        "Aumenta el tamaño de los píxeles blancos."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué efectos tiene aplicar un **filtro de la mediana** en una imagen?",
      "opts": [
        "Elimina el ruido tipo sal y pimienta preservando los bordes.",
        "Realza los bordes de la imagen.",
        "Suaviza la imagen sin eliminar los detalles finos.",
        "Reduce el contraste y elimina detalles importantes."
      ],
      "correct": [0]
    },
    {
      "q": "¿En qué casos se usa un **filtro de paso bajo** en procesamiento de imágenes?",
      "opts": [
        "Cuando se desea suavizar la imagen y eliminar detalles finos.",
        "Cuando se quiere resaltar los bordes de la imagen.",
        "Cuando se requiere aumentar el contraste de la imagen.",
        "Cuando se quiere detectar bordes agudos."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es la principal ventaja del **filtro de paso alto** en la detección de bordes?",
      "opts": [
        "Realza los detalles y bordes de alto contraste en la imagen.",
        "Elimina las zonas uniformes y suaviza la imagen.",
        "Aumenta la intensidad de las zonas oscuras.",
        "Hace que los bordes sean menos definidos."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué es un **kernel separable** en el procesamiento de imágenes?",
      "opts": [
        "Un kernel que se puede descomponer en dos vectores, uno para las filas y otro para las columnas.",
        "Un kernel que solo se aplica en el dominio frecuencial.",
        "Un kernel que no tiene parámetros definidos.",
        "Un kernel que se aplica a toda la imagen de manera uniforme."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué significa que un **kernel sea separable**?",
      "opts": [
        "Que se puede dividir en dos vectores para reducir la cantidad de operaciones.",
        "Que funciona solo en imágenes de una dimensión.",
        "Que es capaz de detectar bordes en todas las direcciones.",
        "Que se puede aplicar sin necesidad de realizar convoluciones."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es la **principal ventaja de un kernel separable** sobre uno no separable?",
      "opts": [
        "Requiere menos operaciones computacionales, mejorando la eficiencia.",
        "Ofrece resultados más precisos.",
        "Detecta bordes con mayor claridad.",
        "Es menos susceptible al ruido."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál de las siguientes afirmaciones es verdadera para el operador **erosión** aplicado a una imagen binaria \(A\) y un elemento estructural \(B\) con un número **impar de píxeles**?",
      "opts": [
        "El operador erosión es conmutativo cuando el número de píxeles de \(B\) es impar.",
        "El operador erosión no es conmutativo, ya que la forma del elemento estructural influye en los resultados.",
        "El operador erosión se vuelve idempotente cuando el número de píxeles de \(B\) es impar.",
        "La erosión es conmutativa únicamente cuando el número de píxeles de \(B\) es par."
      ],
      "correct": [1]
    },
    {
      "q": "¿Cómo se puede calcular la **derivada digital de segundo orden** de una imagen utilizando diferencias finitas?",
      "opts": [
        "Se calcula mediante la diferencia de las primeras derivadas entre píxeles adyacentes.",
        "Se realiza calculando la diferencia entre el valor de la segunda derivada y el valor del píxel.",
        "Se utiliza la técnica de diferencias centradas, restando el valor de un píxel de la media de los píxeles vecinos en ambas direcciones.",
        "Se obtiene multiplicando las intensidades de los píxeles por las derivadas en \(x\) y \(y\)."
      ],
      "correct": [2]
    },
    {
      "q": "¿Cuál es la **condición necesaria** para que un kernel sea **separable** en el procesamiento de imágenes?",
      "opts": [
        "El kernel debe ser simétrico alrededor de su centro.",
        "La matriz del kernel debe poder ser descompuesta en el producto de dos vectores, uno para filas y otro para columnas.",
        "El kernel debe tener dimensiones \(3 \times 3\) o mayores.",
        "El kernel debe tener un número impar de elementos."
      ],
      "correct": [1]
    },
    {
      "q": "En un **producto de convolución** con un kernel de tamaño \(3 \times 3\), ¿cuál es el método más eficiente para su cálculo cuando se utiliza una imagen de gran tamaño?",
      "opts": [
        "Aplicar la **transformada de Fourier** para convertir la imagen y el kernel al dominio frecuencial y luego multiplicarlos.",
        "Aplicar un **kernel separable**, descomponiendo la convolución en dos pasos, uno en filas y otro en columnas.",
        "Multiplicar el kernel directamente por la imagen y calcular los resultados pixel por pixel.",
        "Usar un **algoritmo de convolución rápida** basado en la técnica de **diferencias finitas**."
      ],
      "correct": [1]
    },
    {
      "q": "En el contexto de **detección de bordes** usando el **filtro de Sobel**, ¿qué ocurre cuando el **elemento estructural** es **separable**?",
      "opts": [
        "El tiempo de computación disminuye porque la operación de convolución se puede descomponer en dos pasos lineales, uno en el dominio de las filas y otro en el de las columnas.",
        "El tiempo de computación aumenta debido a la complejidad adicional de realizar múltiples pasos de convolución.",
        "El resultado no cambia, ya que la separación del kernel no influye en los bordes detectados.",
        "El filtro se vuelve ineficaz para bordes diagonales."
      ],
      "correct": [0]
    },
    {
      "q": "¿Por qué el **filtro de la media armónica** puede empeorar el **ruido de tipo sal y pimienta**?",
      "opts": [
        "Porque en el filtro de la media armónica, los valores extremos de píxeles tienen un **efecto desproporcionado** sobre el resultado, amplificando el ruido.",
        "Porque el filtro de la media armónica da más peso a los píxeles cercanos al valor medio, reduciendo el efecto del ruido.",
        "Porque el filtro de la media armónica es un filtro de paso alto que amplifica las áreas suaves, eliminando el ruido.",
        "Porque al ser un filtro no lineal, no tiene ningún impacto en el ruido."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es el **problema principal** de usar un **filtro de paso bajo** para la detección de bordes?",
      "opts": [
        "Un filtro de paso bajo suaviza los bordes y elimina las frecuencias altas necesarias para detectar los cambios de intensidad.",
        "Un filtro de paso bajo no suaviza lo suficiente y no elimina el ruido.",
        "Un filtro de paso bajo es demasiado sensible a las frecuencias altas, generando bordes falsos.",
        "Un filtro de paso bajo solo afecta a los bordes diagonales y no puede detectar bordes horizontales o verticales."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es el resultado **típico** de la **aplicación de un filtro de Laplaciano** sobre una imagen?",
      "opts": [
        "Detecta los bordes de la imagen al calcular la segunda derivada de los píxeles adyacentes.",
        "Suaviza la imagen y reduce el contraste.",
        "Elimina el ruido de tipo sal y pimienta.",
        "Aumenta el brillo de los píxeles en las zonas oscuras de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué tipo de **ruido** es el más afectado por un **filtro de la mediana**?",
      "opts": [
        "Ruido impulsivo o sal y pimienta.",
        "Ruido gaussiano.",
        "Ruido multiplicativo.",
        "Ruido de cuantificación."
      ],
      "correct": [0]
    },
    {
      "q": "¿Por qué la **transformada de Fourier** es útil en el cálculo del **producto de convolución**?",
      "opts": [
        "Porque permite realizar la convolución en el dominio frecuencial, lo que reduce la complejidad computacional.",
        "Porque la transformada de Fourier mejora la calidad de los bordes detectados.",
        "Porque convierte los valores de intensidad de los píxeles en frecuencias de onda.",
        "Porque facilita la eliminación del ruido en la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo se puede calcular el **módulo del gradiente** de una imagen utilizando el **filtro de Sobel**?",
      "opts": [
        "Aplicando el filtro de Sobel para las direcciones \(x\) y \(y\), y luego calculando la raíz cuadrada de la suma de los cuadrados de los resultados.",
        "Aplicando el filtro de Sobel para detectar bordes en la imagen sin calcular el gradiente.",
        "Aplicando el filtro de Sobel solo en una dirección (horizontal o vertical).",
        "Aplicando un filtro de paso bajo antes de la detección de bordes."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué ocurre cuando se aplica el **producto de convolución** entre una imagen \(f(x, y)\) y un kernel \(K\)?",
      "opts": [
        "Se obtiene una nueva imagen donde cada píxel es el resultado de la suma ponderada de los píxeles vecinos multiplicados por los coeficientes del kernel.",
        "La imagen resultante es más suave, con menos detalles y bordes.",
        "Se detectan las zonas de alta intensidad sin alterar la resolución.",
        "La imagen resultante tiene bordes más difusos."
      ],
      "correct": [0]
    },
    {
      "q": "¿En qué se diferencia el **filtro de Roberts** del **filtro de Sobel** en cuanto a la detección de bordes?",
      "opts": [
        "El filtro de Sobel usa un kernel más grande (3x3) y es más efectivo en bordes más definidos.",
        "El filtro de Roberts detecta bordes en las direcciones diagonal y vertical, mientras que el filtro de Sobel solo en direcciones verticales.",
        "El filtro de Roberts utiliza un kernel más pequeño (2x2), lo que lo hace más sensible a los bordes finos.",
        "El filtro de Sobel es más sensible a los bordes diagonales."
      ],
      "correct": [2]
    },
    {
      "q": "¿Qué es un **kernel separable** y por qué es útil en la **convolución** de imágenes?",
      "opts": [
        "Es un kernel que puede ser descompuesto en dos vectores, uno para las filas y otro para las columnas, lo que reduce el número de cálculos.",
        "Es un kernel que siempre produce mejores resultados en la suavización de la imagen.",
        "Es un kernel que puede ser aplicado solo a imágenes en escala de grises.",
        "Es un kernel que funciona solo en el dominio frecuencial."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es la principal **desventaja** del **filtro de la media armónica**?",
      "opts": [
        "Amplifica los valores de píxeles extremos, lo que empeora el ruido de tipo sal y pimienta.",
        "Suaviza excesivamente las imágenes, eliminando detalles importantes.",
        "Es muy lento en términos computacionales, especialmente para imágenes grandes.",
        "Aumenta la cantidad de ruido en la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Por qué el **filtro de paso alto** es útil para **detectar bordes**?",
      "opts": [
        "Resalta las áreas de la imagen con cambios rápidos en la intensidad, que corresponden a los bordes.",
        "Elimina las áreas con baja intensidad y preserva las zonas suaves.",
        "Suaviza la imagen y mejora la calidad de los bordes.",
        "Aumenta el brillo de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué sucede cuando se aplica el **filtro de paso bajo** a una imagen?",
      "opts": [
        "Elimina las frecuencias altas, lo que suaviza la imagen y reduce el ruido.",
        "Realza los detalles y bordes en la imagen.",
        "Elimina las zonas de alta intensidad.",
        "Aumenta el contraste en la imagen."
      ],
      "correct": [0]
    }
  ]



