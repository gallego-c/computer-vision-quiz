window.questionsByTopic = window.questionsByTopic || {};
window.questionsByTopic.tema5 = [
    {
      "q": "¿Qué sucede cuando aplicamos el operador **dilatación** a una imagen binaria?",
      "opts": [
        "Las áreas blancas se expanden, aumentando el tamaño de los objetos presentes.",
        "Las áreas negras se expanden, aumentando el tamaño de los objetos oscuros.",
        "Elimina todos los detalles oscuros y pequeños.",
        "Reduce la intensidad de las zonas brillantes."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es la diferencia principal entre los operadores **apertura** y **erosión** en procesamiento morfológico?",
      "opts": [
        "La apertura elimina detalles pequeños brillantes, mientras que la erosión siempre oscurece la imagen.",
        "La erosión elimina los bordes, mientras que la apertura aumenta los bordes.",
        "La erosión suaviza la imagen, mientras que la apertura conserva los bordes.",
        "La apertura y erosión tienen los mismos efectos pero con diferentes kernels."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué propiedad tiene el operador **apertura** cuando se aplica a una imagen?",
      "opts": [
        "Elimina detalles pequeños más brillantes que el elemento estructural, sin oscurecer la imagen.",
        "Elimina detalles pequeños oscuros y reduce el tamaño de los objetos brillantes.",
        "Realza las zonas de bajo contraste mientras suaviza las áreas de alto contraste.",
        "Hace la imagen más clara y elimina objetos grandes."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es el propósito de la **transformada Top-Hat**?",
      "opts": [
        "Resalta detalles pequeños claros sobre un fondo oscuro.",
        "Realza detalles oscuros sobre un fondo brillante.",
        "Suaviza la imagen y reduce el ruido.",
        "Elimina objetos pequeños y resalta los grandes."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo se define la **transformada Bottom-Hat** en el contexto del procesamiento morfológico?",
      "opts": [
        "Es la diferencia entre la clausura de una imagen y la imagen original, resaltando detalles oscuros sobre un fondo claro.",
        "Es la diferencia entre la apertura y la imagen original, resaltando detalles brillantes.",
        "Es la resta de una imagen original con su dilatación, eliminando detalles oscuros.",
        "Resalta detalles brillantes de la imagen sin cambiar los bordes."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué efectos produce el **gradiente morfológico externo**?",
      "opts": [
        "Resalta las zonas claras de una imagen sobre un fondo oscuro.",
        "Resalta las zonas oscuras de la imagen, ayudando a mejorar el contraste.",
        "Detecta los bordes en áreas de alta intensidad.",
        "Elimina los bordes y suaviza la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo se calcula el **gradiente morfológico** de una imagen?",
      "opts": [
        "Se calcula como la diferencia entre la dilatación y la erosión de la imagen.",
        "Se calcula aplicando un filtro de paso bajo a la imagen.",
        "Es el resultado de la diferencia entre el borde interior y exterior de un objeto en la imagen.",
        "Se obtiene mediante la media de los valores de los píxeles."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es la **aplicación más común** de los **gradientes morfológicos**?",
      "opts": [
        "Detección de bordes y contornos en imágenes.",
        "Segmentación de imágenes basadas en el color.",
        "Suavizado de la imagen y eliminación de ruido.",
        "Aumento de la resolución de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué ocurre al aplicar la **dilatación** sobre una imagen binaria usando un elemento estructural de tamaño grande?",
      "opts": [
        "Las áreas blancas se expanden significativamente, eliminando los detalles pequeños.",
        "Se suavizan los bordes y se mantiene la forma de los objetos.",
        "Se aumenta el contraste entre las zonas claras y oscuras.",
        "La imagen se reduce y se pierden detalles importantes."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué efectos tiene aplicar un **filtro de la media armónica** en imágenes con **ruido tipo sal y pimienta**?",
      "opts": [
        "El filtro de la media armónica amplifica el ruido de tipo pimienta debido a los valores extremos en los píxeles.",
        "El filtro de la media armónica elimina el ruido de tipo pimienta mientras preserva los bordes.",
        "Suaviza la imagen de manera efectiva, eliminando tanto el ruido como los detalles.",
        "Aumenta el contraste y mejora la claridad de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo se aplica el operador **clausura** en la segmentación morfológica?",
      "opts": [
        "Primero se aplica dilatación, luego erosión para llenar huecos y pequeñas imperfecciones en las áreas oscuras.",
        "Primero se aplica erosión, luego dilatación para eliminar detalles oscuros pequeños.",
        "Es el proceso de suavizar la imagen, sin afectar las áreas oscuras.",
        "Primero se aplica un filtro de paso bajo y luego un filtro de paso alto."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué implica la **apertura secuencial alternada** en procesamiento morfológico?",
      "opts": [
        "Aplicar la erosión seguida de dilatación con elementos estructurales de tamaño creciente.",
        "Aplicar repetidamente la dilatación y erosión sin cambiar el tamaño del elemento estructural.",
        "Alternar entre dilatación y erosión sin aplicar ningún filtro.",
        "Aplicar un filtro de mediana y luego un filtro de paso alto."
      ],
      "correct": [0]
    },
    {
      "q": "En el contexto de **segmentación por texturas**, ¿qué operador morfológico es más útil cuando los patrones de textura están superpuestos?",
      "opts": [
        "La apertura con un elemento estructural de tamaño adecuado para separar las texturas.",
        "La erosión con un elemento estructural de gran tamaño.",
        "La dilatación para aumentar las zonas de textura.",
        "La media armónica para suavizar los detalles de textura."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué ocurre al aplicar **granulometría** en la segmentación de imágenes?",
      "opts": [
        "Se determina la distribución de tamaños de las partículas y se ajusta la segmentación según esos tamaños.",
        "Se aplica un filtro de suavizado para mejorar los bordes.",
        "Elimina todos los objetos pequeños, dejando solo los grandes.",
        "Suaviza las texturas, pero no ayuda en la segmentación."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo se define la **transformada Vers-Hat** en el procesamiento morfológico?",
      "opts": [
        "Combinación de las transformadas Top-Hat y Bottom-Hat para mejorar el contraste de la imagen.",
        "Aplicación de la transformada Top-Hat para realzar los detalles oscuros.",
        "Aplicación de la transformada Bottom-Hat para mejorar las texturas brillantes.",
        "Un filtro que solo realza las áreas brillantes de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo se utiliza la **granulometría** para estudiar las texturas de una imagen?",
      "opts": [
        "Se aplican operadores de apertura y clausura con elementos estructurales de tamaños crecientes para estudiar la eliminación de estructuras.",
        "Se usa el filtro de paso bajo para suavizar la imagen y mejorar la textura.",
        "Se aplica el gradiente morfológico para detectar cambios de textura.",
        "Se utiliza un filtro de la mediana para identificar las diferentes texturas."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué es un **elemento estructural plano** y cómo afecta al resultado de la **erosión** en una imagen?",
      "opts": [
        "Un elemento estructural plano es un kernel con todos los valores iguales a cero, y hace que la erosión reduzca la imagen sin eliminar detalles brillantes.",
        "Un elemento estructural plano tiene un solo valor, y no tiene ningún efecto sobre la imagen.",
        "Un elemento estructural plano suaviza la imagen y aumenta el contraste.",
        "Un elemento estructural plano se utiliza para cambiar el tamaño de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es la **ventaja** de usar la **transformada Top-Hat** en imágenes con texturas complejas?",
      "opts": [
        "Resalta detalles pequeños claros sobre un fondo oscuro sin alterar el fondo.",
        "Mejora los detalles oscuros y resalta los bordes de las texturas.",
        "Suaviza los bordes y elimina detalles innecesarios.",
        "Reduce el contraste de las texturas complejas."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué implica el proceso de **segmentación por texturas** usando **operadores morfológicos**?",
      "opts": [
        "Delimitar áreas de una imagen según los diferentes patrones de textura presentes.",
        "Aplicar un filtro de paso bajo para suavizar las texturas.",
        "Detectar bordes basados únicamente en la intensidad.",
        "Eliminar áreas de la imagen que contienen texto."
      ],
      "correct": [0]
    },
    {
      "q": "En el contexto de la **erosión morfológica**, ¿qué ocurre cuando se aplica un **elemento estructural de tamaño mayor** en una imagen con objetos pequeños?",
      "opts": [
        "Los objetos pequeños se eliminan más rápidamente, afectando especialmente las áreas brillantes.",
        "Los objetos pequeños se dilatan, mientras que los grandes permanecen intactos.",
        "La imagen se suaviza y los objetos grandes se erosionan sin cambiar su tamaño.",
        "Los objetos pequeños se eliminan más lentamente, mientras que los grandes permanecen igual."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo afecta el **producto de convolución morfológica** a la imagen binaria cuando el kernel es de tamaño \(3 \times 3\)?",
      "opts": [
        "Hace que la imagen se suavice al aplicar un filtro de paso bajo.",
        "Realza las estructuras pequeñas y suaviza los bordes.",
        "Detecta bordes y objetos pequeños mediante el cálculo de la diferencia de intensidades.",
        "Elimina detalles de la imagen pero preserva la resolución."
      ],
      "correct": [2]
    },
    {
      "q": "¿Qué ocurre si el **elemento estructural** usado en una **operación de dilatación** tiene una forma irregular o asimétrica?",
      "opts": [
        "La dilatación extenderá las zonas brillantes en la dirección de la asimetría del elemento.",
        "La dilatación disminuirá las áreas blancas de la imagen.",
        "No habrá efectos significativos ya que los elementos estructurales simétricos son más comunes.",
        "La dilatación tendrá el mismo efecto que si el elemento fuera simétrico."
      ],
      "correct": [0]
    },
    {
      "q": "En el caso de la **apertura** y **cerradura** morfológicas, ¿cómo afecta un elemento estructural **grande** en comparación con uno pequeño?",
      "opts": [
        "Un elemento grande elimina más detalles pequeños, mientras que un elemento pequeño preserva más detalles de la imagen original.",
        "Un elemento grande hace que la imagen se haga más borrosa, mientras que un elemento pequeño mejora los detalles.",
        "Un elemento grande resalta los bordes de la imagen mientras que uno pequeño suprime los detalles.",
        "Un elemento grande elimina los bordes y detalles mientras que uno pequeño resalta los bordes y el contraste."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué ocurre con el **resultado de la transformada Top-Hat** cuando se aplica a una imagen con objetos pequeños brillantes sobre un fondo oscuro?",
      "opts": [
        "Resalta los objetos brillantes pequeños, realzando detalles que de otra manera pasarían desapercibidos.",
        "Elimina todos los objetos brillantes y resalta las zonas oscuras.",
        "Reduce la intensidad de los objetos brillantes en la imagen.",
        "Elimina todos los objetos y áreas con bajo contraste."
      ],
      "correct": [0]
    },
    {
      "q": "En el procesamiento morfológico, ¿qué ocurre cuando se **aplica un filtro de dilatación seguido de erosión** (lo que se conoce como **apertura**)?",
      "opts": [
        "El operador de apertura elimina los detalles pequeños que están presentes en el fondo.",
        "El operador de apertura suaviza la imagen sin perder información de bordes.",
        "El operador de apertura aumenta el contraste en la imagen.",
        "El operador de apertura detecta bordes pero no suprime detalles."
      ],
      "correct": [0]
    },
    {
      "q": "En el procesamiento morfológico, ¿cuál es la principal ventaja de la **transformación Bottom-Hat**?",
      "opts": [
        "Realza los detalles oscuros pequeños y ayuda a detectar objetos sobre un fondo claro.",
        "Elimina todos los bordes y suaviza la imagen.",
        "Resalta detalles brillantes sobre un fondo oscuro.",
        "Es útil para aumentar el contraste de la imagen en áreas uniformes."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo afecta el **filtro de paso alto** en una imagen después de aplicar una **erosión**?",
      "opts": [
        "Detecta las zonas de cambio rápido en la intensidad y las resalta.",
        "Elimina el ruido sin afectar los detalles finos.",
        "Suaviza la imagen y elimina todos los detalles finos.",
        "Mejora la calidad de los bordes mientras elimina los detalles internos."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué ocurre cuando se aplica el operador **dilatación** a una imagen con ruido de tipo sal?",
      "opts": [
        "La dilatación aumenta la intensidad de las áreas brillantes y puede amplificar el ruido.",
        "La dilatación elimina las zonas de ruido al dilatar los objetos brillantes.",
        "La dilatación elimina el ruido en las áreas oscuras de la imagen.",
        "La dilatación disminuye la resolución de la imagen pero no afecta el ruido."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es el efecto de aplicar la **transformación Top-Hat** a una imagen con objetos pequeños oscuros sobre un fondo brillante?",
      "opts": [
        "Resalta los objetos oscuros pequeños sin alterar el fondo brillante.",
        "Suaviza la imagen eliminando los objetos oscuros.",
        "Reduce los detalles oscuros de la imagen.",
        "Elimina todos los objetos brillantes y los reemplaza por objetos oscuros."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es la diferencia principal entre los operadores **apertura** y **clausura** en imágenes morfológicas?",
      "opts": [
        "La apertura reduce el tamaño de los objetos pequeños mientras que la clausura los agranda.",
        "La apertura elimina objetos pequeños y la clausura realza los bordes de los objetos grandes.",
        "La apertura suaviza la imagen y la clausura realza los detalles más grandes.",
        "La apertura preserva las zonas oscuras mientras que la clausura aumenta las áreas brillantes."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo afecta la **erosión** a los bordes de una imagen?",
      "opts": [
        "La erosión hace que los bordes se vuelvan más nítidos y reduce el tamaño de los objetos.",
        "La erosión suaviza los bordes de la imagen sin cambiar su tamaño.",
        "La erosión preserva los bordes sin eliminar los detalles internos.",
        "La erosión no afecta a los bordes de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué ocurre cuando se **aplica un filtro de dilatación seguido de erosión** con un **elemento estructural pequeño** en una imagen binaria?",
      "opts": [
        "El operador de apertura elimina los detalles pequeños y suaviza la imagen.",
        "El operador de apertura aumenta el contraste de las áreas brillantes.",
        "El operador de apertura preserva los detalles pequeños y elimina las zonas oscuras.",
        "El operador de apertura resalta los objetos de mayor tamaño sin afectar los pequeños."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué propiedad tiene el **operador de dilatación** cuando se aplica repetidamente a una imagen?",
      "opts": [
        "La dilatación aumenta el tamaño de los objetos brillantes pero no cambia los bordes.",
        "La dilatación reduce el tamaño de los objetos pequeños y aumenta los grandes.",
        "La dilatación hace que la imagen se suavice y pierda detalles.",
        "La dilatación aumenta la cantidad de objetos oscuros en la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cómo se utiliza la **transformada Bottom-Hat** para segmentar áreas oscuras de la imagen?",
      "opts": [
        "La transformada Bottom-Hat resalta detalles pequeños oscuros sobre un fondo brillante.",
        "La transformada Bottom-Hat elimina detalles brillantes de la imagen.",
        "La transformada Bottom-Hat suaviza las áreas oscuras y mejora los bordes.",
        "La transformada Bottom-Hat realza las áreas brillantes y reduce las zonas oscuras."
      ],
      "correct": [0]
    },
    {
      "q": "En el procesamiento morfológico, ¿cómo se pueden **combinan operaciones de dilatación** y **erosión**?",
      "opts": [
        "Primero se aplica dilatación, luego erosión, para mejorar la segmentación.",
        "Primero se aplica erosión, luego dilatación, para eliminar detalles pequeños.",
        "Se alternan las operaciones sin un orden específico.",
        "Solo se utiliza la dilatación sin aplicar erosión."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué sucede al aplicar **erosión y dilatación** de forma sucesiva en la segmentación morfológica?",
      "opts": [
        "Se realiza un suavizado general y se reducen los detalles pequeños.",
        "El resultado de la erosión y dilatación es un aumento de bordes en la imagen.",
        "Los objetos grandes se erosionan y los pequeños se dilatan.",
        "No cambia la resolución de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Por qué es importante la elección del **elemento estructural** en la segmentación morfológica?",
      "opts": [
        "El elemento estructural determina el tamaño de los objetos que se eliminarán o preservarán.",
        "El elemento estructural define los bordes visibles en la imagen.",
        "El elemento estructural aumenta la resolución de la imagen.",
        "El elemento estructural no afecta el resultado de la segmentación."
      ],
      "correct": [0]
    },
    {
      "q": "En una imagen binaria, ¿qué ocurre al aplicar la **transformada de la media armónica**?",
      "opts": [
        "La media armónica amplifica el ruido de tipo pimienta mientras suaviza las áreas brillantes.",
        "La media armónica elimina el ruido de tipo pimienta sin afectar los bordes.",
        "La media armónica aumenta el contraste entre las zonas brillantes.",
        "La media armónica reduce el ruido en las áreas oscuras."
      ],
      "correct": [0]
    }
  ]


