window.questionsByTopic = window.questionsByTopic || {};
window.questionsByTopic.tema6 = [
    {
      "q": "¿Cuál es la principal diferencia entre los métodos de **segmentación por umbralización global** y **segmentación por umbralización local**?",
      "opts": [
        "La umbralización global utiliza un único umbral para toda la imagen, mientras que la umbralización local define umbrales en subregiones basadas en propiedades locales.",
        "La umbralización local usa un único umbral calculado globalmente, mientras que la umbralización global aplica diferentes umbrales según la textura.",
        "La umbralización global depende de la textura de la imagen, mientras que la umbralización local no.",
        "La umbralización local siempre resulta en una imagen binaria, mientras que la global no."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál de las siguientes características es un **desafío** en la **segmentación basada en umbralización** en imágenes con **bajo contraste**?",
      "opts": [
        "Los objetos en la imagen se segmentan demasiado bien, lo que produce un exceso de información.",
        "Es difícil encontrar un umbral óptimo debido a la falta de picos bien definidos en el histograma.",
        "La imagen es demasiado compleja para segmentar correctamente sin aplicar un filtro de suavizado.",
        "El ruido de la imagen se reduce demasiado, eliminando detalles importantes."
      ],
      "correct": [1]
    },
    {
      "q": "¿Qué ocurre cuando se utiliza el **método de Otsu** para segmentar una imagen que tiene varios picos en su histograma?",
      "opts": [
        "El método de Otsu calculará el valor medio de todos los píxeles y lo usará como umbral.",
        "El método de Otsu no puede segmentar imágenes con más de dos picos en su histograma.",
        "El método de Otsu selecciona un umbral que minimiza la varianza intra-clase y maximiza la varianza inter-clase, pero puede fallar si hay más de dos picos.",
        "El método de Otsu funciona bien incluso con imágenes con varios picos, pero requiere de un ajuste manual del umbral."
      ],
      "correct": [2]
    },
    {
      "q": "En el **método de umbralización de Otsu**, ¿qué se intenta optimizar para encontrar el umbral óptimo?",
      "opts": [
        "Minimizar la varianza intraclase.",
        "Maximizar la varianza interclase.",
        "Minimizar la suma total de las intensidades.",
        "Maximizar el número de píxeles en cada clase."
      ],
      "correct": [0, 1]
    },
    {
      "q": "¿Qué significa que el **método de umbralización global** sea **bimodal**?",
      "opts": [
        "Significa que el histograma tiene dos picos claramente definidos, lo que facilita la selección de un umbral único.",
        "Significa que la imagen tiene múltiples texturas que no pueden ser segmentadas por un único umbral.",
        "Significa que la segmentación no es posible debido a la complejidad de la imagen.",
        "Significa que el histograma tiene una forma uniforme y no presenta variabilidad."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué ocurre si los objetos en una imagen tienen **niveles de intensidad muy diferentes** pero el fondo tiene una iluminación uniforme?",
      "opts": [
        "La umbralización global no puede detectar correctamente los objetos, pero la local lo hará con precisión.",
        "La umbralización global funciona bien, pero la umbralización local podría ser más eficiente al ajustar el umbral en subregiones.",
        "La umbralización global eliminará todo el fondo sin poder detectar los objetos.",
        "Puede ser necesario usar múltiples umbrales para una imagen cuasi-binaria."
      ],
      "correct": [1, 3]
    },
    {
      "q": "¿Cuál es el **efecto** de la **segmentación basada en discontinuidades** en una imagen con bordes difusos?",
      "opts": [
        "Resalta los bordes difusos y mejora la segmentación en áreas con poco contraste.",
        "Divide la imagen en áreas de igual intensidad, sin considerar las discontinuidades.",
        "La segmentación basada en discontinuidades detecta bordes abruptos, pero tiene dificultades para segmentar bordes difusos o suaves.",
        "Detecta bordes difusos y los segmenta de manera precisa, incluso en imágenes ruidosas."
      ],
      "correct": [2]
    },
    {
      "q": "¿Qué ventajas tiene el **método de Marr-Hildreth** sobre métodos básicos de detección de bordes?",
      "opts": [
        "Es rápido y no requiere de una preparación previa de la imagen.",
        "Es especialmente eficaz para detectar bordes en imágenes ruidosas y con condiciones de luz no ideales.",
        "Aplica un filtro gaussiano previo que reduce el ruido antes de detectar bordes.",
        "No requiere la aplicación de un filtro de suavizado previo."
      ],
      "correct": [1, 2]
    },
    {
      "q": "¿Por qué la **transformada de distancia** es útil en la **segmentación morfológica**?",
      "opts": [
        "Permite identificar los puntos más alejados del borde de cada objeto, lo que facilita la segmentación y evita la sobresegmentación.",
        "Elimina completamente el ruido y mejora la calidad de los bordes.",
        "Puede servir para generar marcadores en el método watershed.",
        "Detecta los puntos más cercanos a los bordes, simplificando el proceso de segmentación."
      ],
      "correct": [0, 2]
    },
    {
      "q": "En el algoritmo **k-means** para segmentación de imágenes, ¿cómo se determina el número óptimo de **clusters**?",
      "opts": [
        "Se usa el **método de Otsu** para determinar el número óptimo de clusters según la varianza de intensidad.",
        "Se usa el **método del codo**, buscando el valor k donde la inercia (WCSS) deja de disminuir significativamente.",
        "El número de clusters se define manualmente según el número de objetos esperados en la imagen.",
        "Se pueden utilizar métricas como el coeficiente de silueta para evaluar la calidad del clustering."
      ],
      "correct": [1, 2, 3]
    },
    {
      "q": "¿Qué ventaja tiene el **método Watershed** en la segmentación de imágenes con **objetos tocando**?",
      "opts": [
        "El método Watershed no es capaz de segmentar objetos tocando, siempre los fusiona en un solo objeto.",
        "El método Watershed puede ser usado solo si los objetos están completamente separados.",
        "El método Watershed permite segmentar los objetos tocando al tratar cada mínimo local como un marcador, evitando la sobresegmentación.",
        "Usando marcadores apropiados, puede separar objetos que se tocan o solapan parcialmente."
      ],
      "correct": [2, 3]
    },
    {
      "q": "¿Cuáles son **desventajas** del **método Watershed**?",
      "opts": [
        "No detecta bordes con suficiente precisión.",
        "Es muy lento y no adecuado para imágenes grandes.",
        "Es susceptible a la sobresegmentación cuando la imagen tiene mucho ruido o detalles finos.",
        "Requiere la selección de marcadores apropiados para evitar sobresegmentación."
      ],
      "correct": [2, 3]
    },
    {
      "q": "¿Qué técnica de segmentación por similitud utiliza un **agrupamiento iterativo** para separar los píxeles según sus características de intensidad?",
      "opts": [
        "El **método k-means** segmenta la imagen en clusters según el valor de intensidad de los píxeles.",
        "La **umbralización global** separa los píxeles en dos regiones con base en un único umbral.",
        "La **segmentación morfológica** utiliza un elemento estructural para definir los bordes entre objetos.",
        "La **segmentación basada en textura** clasifica los píxeles en función de patrones de textura predefinidos."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué resultado se obtiene al aplicar **k-means** a una imagen de alta complejidad con múltiples colores?",
      "opts": [
        "El algoritmo solo divide la imagen en dos colores básicos.",
        "El algoritmo divide la imagen en k clusters según las similitudes de intensidad, formando regiones homogéneas.",
        "El algoritmo mejora el contraste de la imagen, resaltando los bordes.",
        "El algoritmo agrupa píxeles con características similares en cada cluster."
      ],
      "correct": [1, 3]
    },
    {
      "q": "¿Qué ocurre si el **número de clusters** k en el algoritmo **k-means** es demasiado grande?",
      "opts": [
        "La segmentación se simplifica demasiado y pierde información importante.",
        "El algoritmo se ejecuta más rápido, pero los resultados no son precisos.",
        "La segmentación se vuelve demasiado detallada, lo que podría generar muchas subregiones pequeñas.",
        "Aumenta la complejidad computacional sin mejora significativa en la calidad de segmentación."
      ],
      "correct": [2, 3]
    },
    {
      "q": "Una imagen presenta un histograma con **tres picos bien diferenciados**. Aplicando umbralización global con dos umbrales T₁ y T₂, ¿qué tipo de imagen resultante obtendremos?",
      "opts": [
        "Una imagen con gradiente continuo entre los tres niveles.",
        "Una imagen idéntica a la original pero con contraste mejorado.",
        "Una imagen binaria con valores 0 y 1.",
        "Una imagen cuasi-binaria con tres valores: 0, 1 y 2."
      ],
      "correct": [3]
    },
    {
      "q": "En el **método de la media** para umbralización, si una imagen tiene contraste perfecto (histograma plano), ¿qué valor de umbral T se obtendrá después de la primera iteración?",
      "opts": [
        "T = 0, ya que todos los valores están uniformemente distribuidos.",
        "T = 255, el máximo valor de intensidad.",
        "T = 128, la media de todos los niveles de gris.",
        "El algoritmo convergerá rápidamente ya que T' será igual a T."
      ],
      "correct": [2, 3]
    },
    {
      "q": "El **método de Otsu** busca el umbral óptimo mediante:",
      "opts": [
        "Maximizar la varianza intraclase y minimizar la varianza interclase.",
        "Minimizar la varianza intraclase y maximizar la varianza interclase.",
        "Encontrar el punto medio entre los dos picos del histograma.",
        "Calcular la media iterativa hasta convergencia."
      ],
      "correct": [1]
    },
    {
      "q": "Dada una imagen con iluminación no uniforme, ruido considerable y múltiples objetos de diferentes tamaños, ¿qué tipo de umbralización sería más apropiada?",
      "opts": [
        "Umbralización global con el método de la media.",
        "Umbralización global con el método de Otsu.",
        "Umbralización local mediante el método de las propiedades locales.",
        "Umbralización local por el método de la partición."
      ],
      "correct": [2, 3]
    },
    {
      "q": "En el proceso de **etiquetado de componentes conexas**, si al recorrer horizontalmente encontramos un píxel no nulo cuyo vecino izquierdo también es no nulo pero su vecino superior tiene una etiqueta diferente, ¿qué debemos hacer?",
      "opts": [
        "Asignar una nueva etiqueta al píxel actual.",
        "Asignar la etiqueta del vecino izquierdo y fusionar las etiquetas.",
        "Asignar la etiqueta del vecino superior únicamente.",
        "Fusionar las etiquetas incluye todos los píxeles a la izquierda hasta encontrar un píxel del fondo."
      ],
      "correct": [1, 3]
    },
    {
      "q": "Considera la siguiente máscara para detección de líneas: [[-1, 2, -1], [-1, 2, -1], [-1, 2, -1]]. ¿Qué características tiene?",
      "opts": [
        "Detecta líneas horizontales.",
        "Detecta líneas verticales.",
        "Es una aproximación de la segunda derivada en dirección vertical.",
        "El valor 2 representa la dirección de la línea a detectar."
      ],
      "correct": [1, 2]
    },
    {
      "q": "En la **detección de bordes**, ¿cuál es la principal diferencia entre un borde tipo escalón y un borde tipo rampa?",
      "opts": [
        "El borde tipo escalón tiene un cambio brusco de intensidad, mientras que el tipo rampa tiene un cambio gradual.",
        "El borde tipo rampa solo se detecta con filtros de segunda derivada.",
        "El borde tipo escalón aparece únicamente en imágenes con ruido.",
        "Ambos pueden detectarse pero el tipo rampa requiere más píxeles para representarse."
      ],
      "correct": [0, 3]
    },
    {
      "q": "En el **método de Marr-Hildreth**, un píxel se considera que 'pasa por cero' cuando:",
      "opts": [
        "Su valor de intensidad es exactamente cero.",
        "En al menos una dirección hay dos píxeles vecinos que cambian de signo.",
        "Su segunda derivada es máxima en todas las direcciones.",
        "Hay una transición de negativo a positivo o viceversa en la imagen filtrada con LoG."
      ],
      "correct": [1, 3]
    },
    {
      "q": "¿Por qué en el método de Marr-Hildreth se añade el criterio adicional de que la diferencia en valor absoluto entre píxeles vecinos debe ser mayor que un umbral T?",
      "opts": [
        "Para aumentar la velocidad del algoritmo.",
        "Para eliminar bordes irrelevantes desde el punto de vista de la segmentación.",
        "Para detectar únicamente bordes horizontales y verticales.",
        "Para reducir la detección de falsos bordes causados por ruido o pequeñas variaciones."
      ],
      "correct": [1, 3]
    },
    {
      "q": "En el **método de Canny**, después de calcular el gradiente y su dirección, se aplica la supresión de no máximos. ¿Qué significa este paso?",
      "opts": [
        "Se eliminan todos los píxeles con gradiente menor que un umbral global.",
        "Se ponen a cero los píxeles que no son máximos locales en la dirección del gradiente.",
        "Se suavizan los bordes detectados mediante un filtro gaussiano.",
        "Se adelgazan los bordes para que tengan un grosor de un píxel."
      ],
      "correct": [1, 3]
    },
    {
      "q": "Comparando los métodos de detección de bordes, ¿cuál es generalmente considerado el **mejor método** para detección de bordes?",
      "opts": [
        "Filtro de Sobel.",
        "Filtro de Prewitt.",
        "Método de Marr-Hildreth.",
        "Método de Canny."
      ],
      "correct": [3]
    },
    {
      "q": "En el **algoritmo k-means** para segmentación, ¿qué representa la medida WCSS (Within Cluster Sum of Squares)?",
      "opts": [
        "La distancia total entre todos los centroides.",
        "La suma de las distancias al cuadrado entre cada píxel y el centroide de su cluster.",
        "El número óptimo de clusters para la imagen.",
        "Una medida de cuán similares son los píxeles asignados a un mismo cluster."
      ],
      "correct": [1, 3]
    },
    {
      "q": "El **método del codo** en k-means permite:",
      "opts": [
        "Calcular automáticamente los centroides iniciales.",
        "Determinar el número óptimo de clusters k balanceando precisión y complejidad.",
        "Eliminar outliers de la imagen antes de la segmentación.",
        "Identificar el punto donde la inercia deja de disminuir significativamente."
      ],
      "correct": [1, 3]
    },
    {
      "q": "¿Cuál es la principal **desventaja del método watershed** en presencia de ruido o baja resolución?",
      "opts": [
        "No puede detectar bordes curvos.",
        "Requiere demasiada memoria computacional.",
        "Produce sobresegmentación de la imagen.",
        "Genera demasiados mínimos locales que se interpretan como regiones separadas."
      ],
      "correct": [2, 3]
    },
    {
      "q": "Para resolver el problema de sobresegmentación en watershed, se utilizan **marcadores**. ¿Qué es un marcador?",
      "opts": [
        "Un píxel o conjunto de píxeles seleccionados para convertirse en mínimos globales mediante imposición de mínimos.",
        "Un filtro que se aplica antes del watershed para suavizar la imagen.",
        "Una línea que separa manualmente las diferentes regiones.",
        "Un punto o región que representa el centro de cada objeto a segmentar."
      ],
      "correct": [0, 3]
    },
    {
      "q": "En una imagen binaria donde múltiples objetos están **ligeramente solapados**, ¿cómo puede la transformada de distancia ayudar al método watershed?",
      "opts": [
        "Permite separar completamente los objetos sin necesidad de marcadores.",
        "Identifica el centro de cada objeto como candidato a marcador, permitiendo evitar sobresegmentación incluso con solapamiento.",
        "Elimina automáticamente los objetos solapados de la imagen.",
        "Genera múltiples centros en objetos solapados que pueden usarse como marcadores individuales."
      ],
      "correct": [1, 3]
    },
    {
      "q": "Considera que aplicas el **método de la media** a una imagen y obtienes T=93 en solo 2 iteraciones. Si después aplicas el **método de Otsu** a la misma imagen y obtienes T=76, ¿qué puedes concluir?",
      "opts": [
        "Hay un error en los cálculos ya que ambos métodos deben dar el mismo resultado.",
        "Otsu optimiza la varianza entre clases, lo que puede dar un umbral diferente al método de la media que se basa en promedios iterativos.",
        "El método de la media siempre da umbrales más altos que Otsu.",
        "Ambos métodos son válidos pero optimizan diferentes criterios."
      ],
      "correct": [1, 3]
    },
    {
      "q": "En el contexto de segmentación, ¿cuál de las siguientes afirmaciones sobre las **propiedades de la segunda derivada** es CORRECTA?",
      "opts": [
        "Detecta peor las líneas que la primera derivada.",
        "El signo de la segunda derivada puede ayudar a distinguir transiciones de claro a oscuro o viceversa.",
        "Es útil para detectar puntos aislados.",
        "Detecta mucho mejor las líneas que la primera derivada."
      ],
      "correct": [1, 2, 3]
    },
    {
      "q": "Si una imagen tiene varios objetos claros sobre fondo oscuro pero con **niveles de intensidad muy diferentes entre los objetos**, ¿cuántos umbrales necesitarás típicamente?",
      "opts": [
        "Un único umbral es suficiente.",
        "Dos umbrales para crear una imagen cuasi-binaria con tres valores.",
        "Tantos umbrales como objetos diferentes haya.",
        "El histograma presentará tres picos fácilmente identificables."
      ],
      "correct": [1, 3]
    },
    {
      "q": "Dada una máscara de convolución [[-1, -1, 2], [-1, 2, -1], [2, -1, -1]], ¿qué tipo de estructura detectará?",
      "opts": [
        "Líneas horizontales.",
        "Líneas verticales.",
        "Líneas diagonales a +45º.",
        "Líneas diagonales a -45º."
      ],
      "correct": [2]
    },
    {
      "q": "En el **algoritmo k-means**, ¿cuándo se detiene el proceso iterativo?",
      "opts": [
        "Cuando todos los píxeles tienen el mismo valor.",
        "Cuando los centroides no cambian significativamente o se alcanza un número máximo de iteraciones.",
        "Después de exactamente 10 iteraciones.",
        "Cuando la diferencia entre centroides consecutivos es menor que un valor ε."
      ],
      "correct": [1, 3]
    },
    {
      "q": "Si al aplicar el **método watershed** a una imagen obtienes cientos de regiones pequeñas cuando esperabas pocas regiones grandes, ¿cuál es el problema más probable?",
      "opts": [
        "Los marcadores están mal posicionados.",
        "La imagen tiene sobresegmentación debido a ruido o irregularidades y necesita usar marcadores.",
        "El algoritmo watershed no es apropiado para esa imagen.",
        "Hay demasiados mínimos locales debido a ruido o detalles finos."
      ],
      "correct": [1, 3]
    },
    {
      "q": "En el método de umbralización local mediante **propiedades locales**, el umbral T_xy = aσ_xy + bμ_xy depende de:",
      "opts": [
        "Solo la media global de la imagen.",
        "La desviación típica y la media de los valores de intensidad en el vecindario N₈(x,y).",
        "El histograma completo de la imagen.",
        "Las propiedades locales de cada píxel y sus vecinos."
      ],
      "correct": [1, 3]
    },
    {
      "q": "¿Cuál de los siguientes casos NO es adecuado para **segmentación por umbralización global**?",
      "opts": [
        "Imagen con histograma bimodal claramente definido.",
        "Imagen con iluminación uniforme y alto contraste.",
        "Imagen con iluminación no uniforme y múltiples texturas.",
        "Imagen con bajo contraste y área grande entre picos del histograma."
      ],
      "correct": [2, 3]
    },{
    "q": "En el detector de bordes de Canny, ¿por qué se usan dos umbrales (alto y bajo) en lugar de uno?",
    "opts": [
      "Para detectar bordes en dos escalas diferentes",
      "Para aplicar histéresis: umbrales bajos extienden bordes fuertes detectados con umbral alto",
      "Es más rápido computacionalmente con dos umbrales",
      "Para separar bordes horizontales de verticales"
    ],
    "correct": [1]
  }
  
  ];