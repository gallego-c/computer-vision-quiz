window.questionsByTopic = window.questionsByTopic || {};
window.questionsByTopic.tema3 = [
  // Producto de correlación y convolución
  {
    q: "¿Qué es el **producto de correlación** en procesamiento de imágenes?",
    opts: [
      "Es una operación que compara los valores de los píxeles en la imagen con los de un kernel aplicado sobre la vecindad de cada píxel.",
      "Es el proceso de realzar el contraste de las zonas de borde de una imagen mediante la manipulación de las frecuencias.",
      "Es una operación en la que se aplica un filtro de paso bajo a la imagen para suavizarla.",
      "Es una operación que calcula la diferencia entre la imagen y su kernel."
    ],
    correct: [0]
  },

  {
    q: "¿Cuál de las siguientes propiedades es cierta para el **producto de correlación**?",
    opts: [
      "Es conmutativo, lo que significa que se puede aplicar el kernel antes o después sin cambiar el resultado.",
      "Es distributivo, es decir, el resultado de aplicar el producto de correlación a una imagen es el mismo sin importar el orden de los píxeles.",
      "Es lineal y siempre produce bordes más nítidos.",
      "Es sensible al ruido y crea artefactos visibles en la imagen."
    ],
    correct: [1]
  },

  // Filtros de la media
  {
    q: "¿Qué hace un **filtro de la media** en imágenes?",
    opts: [
      "Suaviza la imagen reemplazando cada píxel por la media de los píxeles en su vecindad.",
      "Realza los bordes de la imagen al suavizar las zonas de alto contraste.",
      "Elimina el ruido tipo pimienta, pero puede crear un desenfoque excesivo en los bordes.",
      "Hace que la imagen tenga menos detalles y más uniformidad de intensidad."
    ],
    correct: [0]
  },

  {
    q: "¿Cuáles son las desventajas de utilizar un **filtro de la media**?",
    opts: [
      "Puede suavizar demasiado la imagen, eliminando detalles importantes.",
      "No afecta el contraste de las imágenes.",
      "Es menos efectivo que el filtro de mediana en la eliminación de ruido tipo sal y pimienta.",
      "No se puede aplicar a imágenes grandes debido a su complejidad computacional."
    ],
    correct: [0, 2]
  },

  // Derivada digital y gradiente
  {
    q: "¿Qué es la **derivada digital de primer orden**?",
    opts: [
      "Es el cálculo de las diferencias de intensidad entre los píxeles adyacentes en una imagen.",
      "Es la suma de las intensidades de los píxeles vecinos.",
      "Es una aproximación de la tasa de cambio de la intensidad en una imagen.",
      "Es el promedio de las diferencias de intensidad en las direcciones \(x\) y \(y\)."
    ],
    correct: [0]
  },

  {
    q: "¿Cómo se calcula el **gradiente digital** en una imagen?",
    opts: [
      "Se utiliza la primera derivada en las direcciones \(x\) y \(y\) para calcular el módulo y la dirección del gradiente.",
      "Se obtiene multiplicando el valor de cada píxel por su vecino más cercano.",
      "Es el cálculo de la diferencia entre el valor máximo y mínimo de intensidad en una vecindad.",
      "Se calcula mediante la segunda derivada de la imagen para realzar los bordes."
    ],
    correct: [0]
  },

  {
    q: "¿Qué indica el **módulo del gradiente**?",
    opts: [
      "Indica el cambio en la intensidad de la imagen en la dirección de mayor variación.",
      "Mide la diferencia entre el valor máximo y el valor mínimo de los píxeles en la imagen.",
      "Indica la dirección del borde más pronunciado en una imagen.",
      "Es la medida de la suavidad de los bordes en una imagen."
    ],
    correct: [0]
  },

  // Filtro de Sobel y Roberts
  {
    q: "¿En qué se diferencia el **filtro de Roberts** del **filtro de Sobel**?",
    opts: [
      "El filtro de Roberts usa un kernel más pequeño (2x2), mientras que el filtro de Sobel utiliza un kernel más grande (3x3).",
      "El filtro de Roberts es más eficiente computacionalmente que el filtro de Sobel.",
      "El filtro de Sobel es más sensible al ruido que el filtro de Roberts.",
      "El filtro de Roberts aplica un enfoque de convolución de borde más suave que el filtro de Sobel."
    ],
    correct: [0]
  },

  {
    q: "¿Qué tipo de borde realza principalmente el **filtro de Sobel**?",
    opts: [
      "Bordes en las direcciones vertical y horizontal.",
      "Bordes diagonales y detalles finos.",
      "Bordes suaves en áreas de baja intensidad.",
      "Zonas de la imagen con contraste máximo."
    ],
    correct: [0]
  },

  // Filtro Laplaciano y LoG
  {
    q: "¿Qué es el **Laplaciano de una imagen**?",
    opts: [
      "Es una operación que calcula la segunda derivada en las direcciones \(x\) y \(y\), y realza los bordes.",
      "Es un filtro de suavizado que elimina detalles finos de la imagen.",
      "Es un filtro de paso bajo que suaviza las zonas de alto contraste.",
      "Es un filtro que aplica un enfoque de convolución sobre las frecuencias."
    ],
    correct: [0]
  },

  {
    q: "¿Cuál es el efecto principal de aplicar el **Laplaciano de una Gaussiana (LoG)** a una imagen?",
    opts: [
      "Detecta los bordes de la imagen mientras suaviza el ruido.",
      "Elimina todos los detalles pequeños de la imagen.",
      "Reduce la intensidad de las zonas con bordes pronunciados.",
      "Suaviza la imagen sin eliminar los bordes."
    ],
    correct: [0]
  },

  {
    q: "¿Cómo se define el **Laplaciano de una Gaussiana (LoG)**?",
    opts: [
      "Es el resultado de aplicar el Laplaciano a una imagen previamente suavizada con un filtro Gaussiano.",
      "Es una operación que calcula la derivada de segundo orden para resaltar los bordes.",
      "Es un filtro que se aplica para suavizar los detalles de la imagen antes de la segmentación.",
      "Es el proceso de aplicar un filtro de paso alto a la imagen."
    ],
    correct: [0]
  },

  // Filtro Diferencia de Gaussianas (DoG)
  {
    q: "¿Qué hace el filtro de **Diferencia de Gaussianas (DoG)**?",
    opts: [
      "Realza los bordes de la imagen restando dos imágenes suavizadas con diferentes valores de sigma.",
      "Suaviza la imagen aplicando una convolución con un filtro Gaussiano.",
      "Detecta el ruido multiplicativo en la imagen.",
      "Reduce el tamaño de la imagen sin perder detalles."
    ],
    correct: [0]
  },

  {
    q: "¿Cuáles son las ventajas del filtro **DoG (Diferencia de Gaussianas)** sobre otros filtros de bordes?",
    opts: [
      "Realza los bordes sin amplificar demasiado el ruido.",
      "Es muy eficiente computacionalmente y fácil de implementar.",
      "Elimina todos los detalles finos, enfocándose solo en los bordes principales.",
      "Suaviza las imágenes sin afectar la detección de bordes."
    ],
    correct: [0]
  },

  // Filtros no lineales (Mediana, Máximo, Mínimo)
  {
    q: "¿Qué efecto tiene el **filtro de la mediana**?",
    opts: [
      "Elimina el ruido impulsivo (sal y pimienta) preservando los bordes.",
      "Suaviza la imagen al reemplazar el valor de cada píxel con la mediana de su vecindad.",
      "Aumenta el contraste de los bordes mientras suaviza las zonas uniformes.",
      "Reduce el tamaño de la imagen."
    ],
    correct: [0]
  },

  {
    q: "¿Cuándo se utiliza el **filtro del máximo**?",
    opts: [
      "Se utiliza para eliminar el ruido de tipo pimienta en una imagen.",
      "Se utiliza para suavizar la imagen eliminando detalles.",
      "Se utiliza para realzar el contraste de las zonas oscuras.",
      "Se aplica para eliminar ruido gaussiano."
    ],
    correct: [0]
  },

  {
    q: "¿Qué aplicación tiene el **filtro del mínimo**?",
    opts: [
      "Eliminar el ruido de tipo sal en una imagen.",
      "Reducir el contraste de una imagen demasiado clara.",
      "Realzar los bordes de una imagen con bajo contraste.",
      "Aumentar el brillo de la imagen."
    ],
    correct: [0]
  },

  {
    q: "¿Qué hace el **filtro del punto medio**?",
    opts: [
      "Sustituye el valor de cada píxel por el promedio entre el valor máximo y mínimo en la vecindad de los píxeles.",
      "Sustituye el valor de cada píxel por la mediana de su vecindad.",
      "Realza los bordes y detalles finos de la imagen.",
      "Reduce el tamaño de la imagen eliminando detalles pequeños."
    ],
    correct: [0]
  },

  // Aplicación de los filtros
  {
    q: "¿Qué filtro es mejor para eliminar el **ruido tipo pimienta**?",
    opts: [
      "Filtro del máximo.",
      "Filtro de la mediana.",
      "Filtro gaussiano.",
      "Filtro de paso bajo."
    ],
    correct: [1]
  },

  {
    q: "¿Qué filtro es más efectivo para **eliminar el ruido tipo sal**?",
    opts: [
      "Filtro del mínimo.",
      "Filtro de la mediana.",
      "Filtro de paso bajo.",
      "Filtro de Sobel."
    ],
    correct: [0]
  },
  
    {
      "q": "¿Qué es el producto de **correlación** en procesamiento de imágenes?",
      "opts": [
        "Es una operación en la que se aplica un kernel a la imagen para resaltar detalles de bordes.",
        "Es el proceso de realzar el contraste de las zonas de borde de una imagen mediante la manipulación de las frecuencias.",
        "Es una operación en la que se aplica un filtro de paso bajo a la imagen para suavizarla.",
        "Es una operación que calcula la diferencia entre la imagen y su kernel."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál de las siguientes propiedades es cierta para el **producto de correlación**?",
      "opts": [
        "Es conmutativo, lo que significa que se puede aplicar el kernel antes o después sin cambiar el resultado.",
        "Es distributivo, es decir, el resultado de aplicar el producto de correlación a una imagen es el mismo sin importar el orden de los píxeles.",
        "Es lineal y siempre produce bordes más nítidos.",
        "Es sensible al ruido y crea artefactos visibles en la imagen."
      ],
      "correct": [1]
    },
    {
      "q": "¿Qué hace un **filtro de la media** en imágenes?",
      "opts": [
        "Suaviza la imagen reemplazando cada píxel por la media de los píxeles en su vecindad.",
        "Realza los bordes de la imagen al suavizar las zonas de alto contraste.",
        "Elimina el ruido impulsivo (sal y pimienta) aplicando la mediana en lugar de la media.",
        "Utiliza un kernel Gaussiano para difuminar los bordes de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuáles son las desventajas de utilizar un **filtro de la media**?",
      "opts": [
        "Puede suavizar demasiado la imagen, eliminando detalles importantes.",
        "No afecta el contraste de las imágenes.",
        "Es menos efectivo que el filtro de mediana en la eliminación de ruido tipo sal y pimienta.",
        "No se puede aplicar a imágenes grandes debido a su complejidad computacional."
      ],
      "correct": [0, 2]
    },
    {
      "q": "¿Qué es la **derivada digital de primer orden**?",
      "opts": [
        "Es el cálculo de las diferencias de intensidad entre los píxeles adyacentes en una imagen.",
        "Es la suma de las intensidades de los píxeles vecinos.",
        "Es una aproximación de la tasa de cambio de la intensidad en una imagen.",
        "Es el promedio de las intensidades de los píxeles en una vecindad."
      ],
      "correct": [1]
    },
    {
      "q": "¿Cómo se calcula el **gradiente digital** en una imagen?",
      "opts": [
        "Se utiliza la primera derivada en las direcciones \(x\) y \(y\) para calcular el módulo y la dirección del gradiente.",
        "Se obtiene multiplicando el valor de cada píxel por su vecino más cercano.",
        "Es el cálculo de la diferencia entre el valor máximo y mínimo de intensidad en una vecindad.",
        "Se calcula mediante la segunda derivada de la imagen para realzar los bordes."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué indica el **módulo del gradiente**?",
      "opts": [
        "Indica el cambio en la intensidad de la imagen en la dirección de mayor variación.",
        "Mide la diferencia entre el valor máximo y mínimo de los píxeles en la imagen.",
        "Indica la dirección del borde más pronunciado en una imagen.",
        "Es la medida de la suavidad de los bordes en una imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿En qué se diferencia el **filtro de Roberts** del **filtro de Sobel**?",
      "opts": [
        "El filtro de Sobel usa un kernel más grande (3x3) y es menos sensible al ruido que el filtro de Roberts.",
        "El filtro de Sobel es más preciso pero más lento que el filtro de Roberts.",
        "El filtro de Roberts es más eficiente en tiempo computacional y menos sensible al ruido.",
        "El filtro de Sobel aplica un enfoque de convolución de borde más suave que el filtro de Roberts."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué tipo de borde realza principalmente el **filtro de Sobel**?",
      "opts": [
        "Bordes en las direcciones vertical y horizontal.",
        "Bordes diagonales y detalles finos.",
        "Bordes suaves en áreas de baja intensidad.",
        "Zonas de la imagen con contraste máximo."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué es el **Laplaciano de una imagen**?",
      "opts": [
        "Es una operación que calcula la segunda derivada en las direcciones \(x\) y \(y\), y realza los bordes.",
        "Es un filtro de suavizado que elimina detalles finos de la imagen.",
        "Es un filtro de paso bajo que suaviza las zonas de alto contraste.",
        "Es un filtro que aplica un enfoque de convolución sobre las frecuencias."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es el **efecto del Laplaciano de una Gaussiana (LoG)** en una imagen?",
      "opts": [
        "Detecta los bordes de la imagen mientras suaviza el ruido.",
        "Realza todos los detalles sin importar su tamaño.",
        "Elimina los bordes y las estructuras pequeñas de la imagen.",
        "Suaviza la imagen y detecta los bordes al mismo tiempo."
      ],
      "correct": [3]
    },
    {
      "q": "¿Cómo se define el **Laplaciano de una Gaussiana (LoG)**?",
      "opts": [
        "Es el resultado de aplicar el Laplaciano a una imagen previamente suavizada con un filtro Gaussiano.",
        "Es una operación que calcula la derivada de segundo orden para resaltar los bordes.",
        "Es un filtro que se aplica para suavizar los detalles de la imagen antes de la segmentación.",
        "Es el proceso de aplicar un filtro de paso alto a la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué hace el filtro de **Diferencia de Gaussianas (DoG)**?",
      "opts": [
        "Realza los bordes de la imagen restando dos imágenes suavizadas con diferentes valores de sigma.",
        "Suaviza la imagen aplicando una convolución con un filtro Gaussiano.",
        "Detecta el ruido multiplicativo en la imagen.",
        "Reduce el tamaño de la imagen sin perder detalles."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuáles son las ventajas del filtro **DoG (Diferencia de Gaussianas)** sobre otros filtros de bordes?",
      "opts": [
        "Realza los bordes sin amplificar demasiado el ruido.",
        "Es muy eficiente computacionalmente y fácil de implementar.",
        "Elimina todos los detalles finos, enfocándose solo en los bordes principales.",
        "Suaviza las imágenes sin afectar la detección de bordes."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué efecto tiene el **filtro de la mediana**?",
      "opts": [
        "Elimina el ruido impulsivo (sal y pimienta) preservando los bordes.",
        "Suaviza la imagen al reemplazar el valor de cada píxel con la mediana de su vecindad.",
        "Aumenta el contraste de los bordes mientras suaviza las zonas uniformes.",
        "Reduce el tamaño de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuándo se utiliza el **filtro del máximo**?",
      "opts": [
        "Se utiliza para eliminar el ruido de tipo pimienta en una imagen.",
        "Se utiliza para suavizar la imagen eliminando detalles.",
        "Se utiliza para realzar el contraste de las zonas oscuras.",
        "Se aplica para eliminar ruido gaussiano."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué aplicación tiene el **filtro del mínimo**?",
      "opts": [
        "Eliminar el ruido de tipo sal en una imagen.",
        "Reducir el contraste de una imagen demasiado clara.",
        "Realzar los bordes de una imagen con bajo contraste.",
        "Aumentar el brillo de la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué hace el **filtro del punto medio**?",
      "opts": [
        "Sustituye el valor de cada píxel por el promedio entre el valor máximo y mínimo en la vecindad de los píxeles.",
        "Sustituye el valor de cada píxel por la mediana de su vecindad.",
        "Realza los bordes y detalles finos de la imagen.",
        "Reduce el tamaño de la imagen eliminando detalles pequeños."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué filtro es mejor para eliminar el **ruido tipo pimienta**?",
      "opts": [
        "Filtro del máximo.",
        "Filtro de la mediana.",
        "Filtro de paso bajo.",
        "Filtro de Sobel."
      ],
      "correct": [1]
    },
    {
      "q": "¿Qué filtro es más efectivo para **eliminar el ruido tipo sal**?",
      "opts": [
        "Filtro del mínimo.",
        "Filtro de la mediana.",
        "Filtro de paso bajo.",
        "Filtro de Sobel."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué es un **kernel separable** en el procesamiento de imágenes?",
      "opts": [
        "Un kernel que se puede descomponer en dos vectores, uno para las filas y otro para las columnas.",
        "Un kernel que solo funciona en el dominio frecuencial.",
        "Un kernel que tiene un solo valor para toda la imagen.",
        "Un kernel que se aplica solo a las áreas de bordes en la imagen."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es la principal ventaja de usar un **kernel separable** en comparación con uno no separable?",
      "opts": [
        "Los kernels separables requieren menos operaciones computacionales, lo que reduce el tiempo de procesamiento.",
        "Los kernels separables permiten obtener resultados más precisos en la detección de bordes.",
        "Los kernels separables se utilizan exclusivamente para suavizar la imagen.",
        "Los kernels separables son menos eficientes en la detección de bordes."
      ],
      "correct": [0]
    },
    {
      "q": "¿Por qué el **filtro de la media armónica** puede empeorar el **ruido de tipo sal y pimienta**?",
      "opts": [
        "Porque el filtro de la media armónica suaviza los bordes, pero no es eficaz contra el ruido impulsivo.",
        "Porque al usar la media armónica, los valores extremos de los píxeles afectan más que los valores normales.",
        "Porque la media armónica no altera los píxeles de bajo contraste.",
        "Porque elimina las áreas de alta frecuencia de la imagen, disminuyendo los bordes."
      ],
      "correct": [1]
    }

];
