window.questionsByTopic = window.questionsByTopic || {};
window.questionsByTopic.tema7 = [
    {
      "q": "¿Cuál es la diferencia principal entre un descriptor **invariante** y un descriptor **covariante** frente a una transformación?",
      "opts": [
        "Un descriptor invariante no cambia su valor cuando se aplica la transformación, mientras que un descriptor covariante cambia proporcionalmente a cómo cambia la imagen.",
        "Un descriptor covariante no cambia su valor cuando se aplica la transformación, mientras que un descriptor invariante cambia proporcionalmente.",
        "Ambos tipos de descriptores cambian de la misma forma, pero los invariantes son más precisos.",
        "Los descriptores invariantes solo se aplican a imágenes binarias, mientras que los covariantes se aplican a imágenes en escala de grises."
      ],
      "correct": [0]
    },
    {
      "q": "El **área** de un objeto es un ejemplo de descriptor que tiene las siguientes propiedades:",
      "opts": [
        "Es invariante frente a rotaciones, simetrías y traslaciones.",
        "Es covariante frente a dilataciones y reducciones.",
        "Es un descriptor topológico que mide la conectividad.",
        "Es un descriptor geométrico basado en regiones."
      ],
      "correct": [0, 1, 3]
    },
    {
      "q": "Una imagen binaria tiene **conectividad (4,4)**. ¿Qué significa esto?",
      "opts": [
        "Los píxeles del fondo tienen conectividad-4 y los píxeles de los objetos también tienen conectividad-4.",
        "Los píxeles del fondo tienen conectividad-8 y los píxeles de los objetos tienen conectividad-4.",
        "Todos los píxeles de la imagen tienen conectividad-8.",
        "Solo se consideran vecinos directos tanto para fondo como para objetos."
      ],
      "correct": [0, 3]
    },
    {
      "q": "Para una imagen binaria con conectividad **(4,8)**, ¿cuántos píxeles anteriores se deben examinar al etiquetar componentes conexas?",
      "opts": [
        "Solo el píxel de la izquierda.",
        "Los cuatro píxeles anteriores: (x-1,y-1), (x-1,y), (x-1,y+1) y (x,y-1).",
        "Todos los ocho vecinos del píxel actual.",
        "Solo los píxeles superior e izquierdo."
      ],
      "correct": [1]
    },
    {
      "q": "Un **camino digital** en una imagen binaria se define como:",
      "opts": [
        "Una sucesión de píxeles donde todos tienen el mismo valor de intensidad.",
        "Una sucesión donde cada píxel está conectado a exactamente dos píxeles del camino (excepto los extremos).",
        "Cualquier conjunto de píxeles conectados en la imagen.",
        "Una línea recta entre dos puntos de la imagen."
      ],
      "correct": [0, 1]
    },
    {
      "q": "¿Cuál es la diferencia entre un **camino digital** y una **curva digital**?",
      "opts": [
        "No hay diferencia, son lo mismo.",
        "Una curva digital es un camino digital donde el píxel inicial y final son el mismo.",
        "Un camino digital solo puede ser de tipo 4, mientras que una curva puede ser de tipo 8.",
        "Una curva digital siempre tiene más píxeles que un camino digital."
      ],
      "correct": [1]
    },
    {
      "q": "Según la definición del curso, para contar el **número de agujeros** en una imagen binaria, ¿qué conectividad se debe usar?",
      "opts": [
        "Siempre se debe usar conectividad (4,4).",
        "Siempre se debe usar conectividad (8,8).",
        "Siempre se debe usar conectividad (4,8).",
        "La conectividad puede ser cualquiera."
      ],
      "correct": [2]
    },
    {
      "q": "Para determinar si una componente conexa del fondo es un **agujero**, debemos verificar:",
      "opts": [
        "Que exista una 4-curva que la contenga.",
        "Que exista una 8-curva que la contenga.",
        "Que tenga más de 5 píxeles.",
        "Que esté completamente rodeada por píxeles de valor 1."
      ],
      "correct": [1, 3]
    },
    {
      "q": "La **característica de Euler** de una imagen binaria se calcula como:",
      "opts": [
        "Número de componentes conexas menos número de agujeros.",
        "Número de agujeros menos número de componentes conexas.",
        "Número de componentes conexas más número de agujeros.",
        "Área total dividida por el perímetro total."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué propiedades conserva el **esqueleto** de un objeto?",
      "opts": [
        "La conectividad de los píxeles del objeto.",
        "El número de agujeros del objeto.",
        "Las propiedades geométricas del objeto (en cierto modo).",
        "El área exacta del objeto original."
      ],
      "correct": [0, 1, 2]
    },
    {
      "q": "La **transformada de la distancia** de una imagen binaria:",
      "opts": [
        "Genera una imagen en escala de grises usando la distancia de cada píxel al píxel del fondo más cercano.",
        "Solo se aplica a píxeles con valor de intensidad 1.",
        "Permite identificar el esqueleto del objeto buscando máximos locales.",
        "Es un descriptor estadístico."
      ],
      "correct": [0, 1, 2]
    },
    {
      "q": "¿Cuál de los siguientes NO es un descriptor topológico?",
      "opts": [
        "Número de componentes conexas.",
        "Número de agujeros.",
        "Perímetro.",
        "Característica de Euler."
      ],
      "correct": [2]
    },
    {
      "q": "El **perímetro** de un objeto se puede calcular mediante:",
      "opts": [
        "Contando los píxeles en el borde del objeto.",
        "Usando filtros de realce o operadores morfológicos.",
        "Mediante una aproximación poligonal del borde.",
        "Todas las anteriores son correctas."
      ],
      "correct": [3]
    },
    {
      "q": "En la aproximación poligonal del perímetro, la fórmula **P = h + v + √2·d** representa:",
      "opts": [
        "h = segmentos horizontales, v = segmentos verticales, d = segmentos diagonales.",
        "h = altura del objeto, v = volumen, d = diámetro.",
        "Una aproximación que suele ser más precisa que contar píxeles del borde.",
        "Un método que evita el problema de bordes dobles."
      ],
      "correct": [0, 2, 3]
    },
    {
      "q": "La **compacidad** de un objeto se define como:",
      "opts": [
        "El cociente entre el perímetro y el área.",
        "El cociente entre el cuadrado del perímetro y el área.",
        "El cociente entre el área y el perímetro.",
        "La suma del perímetro y el área."
      ],
      "correct": [1]
    },
    {
      "q": "El **diámetro** de un objeto es:",
      "opts": [
        "El valor de la mayor distancia entre píxeles del objeto.",
        "Define el eje mayor del objeto.",
        "Depende de la función de distancia escogida (d₂, d₄ o d₈).",
        "Siempre es el doble del radio del objeto."
      ],
      "correct": [0, 1, 2]
    },
    {
      "q": "El **eje menor** de un objeto se define como:",
      "opts": [
        "El eje perpendicular al eje mayor en el punto medio del eje mayor.",
        "La menor distancia entre dos píxeles del objeto.",
        "El segmento que une los píxeles más cercanos del borde.",
        "El diámetro dividido por dos."
      ],
      "correct": [0]
    },
    {
      "q": "La **excentricidad** de un objeto mide:",
      "opts": [
        "El grado de desviación de la forma del objeto con respecto a una circunferencia.",
        "El cociente entre la longitud del eje mayor y la longitud del eje menor.",
        "Para una circunferencia perfecta, la excentricidad es exactamente 1.",
        "Cuanto mayor sea la excentricidad, más alargado es el objeto."
      ],
      "correct": [0, 1, 2, 3]
    },
    {
      "q": "La **firma** de un objeto:",
      "opts": [
        "Es una representación unidimensional del borde del objeto.",
        "Se calcula usando el centroide del objeto como punto de referencia.",
        "Requiere parametrizar un ángulo θ en el intervalo [0,2π].",
        "Se normaliza dividiendo r por √(A/π)."
      ],
      "correct": [0, 1, 2, 3]
    },
    {
      "q": "En el **código de cadena C-4**, ¿cuántas direcciones posibles hay?",
      "opts": [
        "2 direcciones.",
        "4 direcciones (0, 1, 2, 3).",
        "8 direcciones.",
        "16 direcciones."
      ],
      "correct": [1]
    },
    {
      "q": "En el **código de cadena C-8**, ¿cuántas direcciones posibles hay?",
      "opts": [
        "4 direcciones.",
        "6 direcciones.",
        "8 direcciones (0, 1, 2, 3, 4, 5, 6, 7).",
        "10 direcciones."
      ],
      "correct": [2]
    },
    {
      "q": "Al generar un código de cadena, ¿desde qué píxel se empieza?",
      "opts": [
        "Desde cualquier píxel del borde.",
        "Desde el centroide del objeto.",
        "Desde el píxel con valor de intensidad distinto de cero más alto y más a la izquierda.",
        "Desde el píxel más cercano al origen de coordenadas."
      ],
      "correct": [2]
    },
    {
      "q": "Los códigos de cadena C-8 permiten calcular:",
      "opts": [
        "Una aproximación poligonal al perímetro del objeto.",
        "El número de componentes horizontales como #0 + #4.",
        "El número de componentes verticales como #2 + #6.",
        "El número de componentes diagonales como #1 + #3 + #5 + #7."
      ],
      "correct": [0, 1, 2, 3]
    },
    {
      "q": "¿Puede un código de cadenas detectar si un objeto tiene un **agujero**?",
      "opts": [
        "Sí, siempre.",
        "No, porque un agujero cambia la forma interior sin cambiar el contorno exterior.",
        "Solo si el agujero es suficientemente grande.",
        "Solo con códigos C-8, no con C-4."
      ],
      "correct": [1]
    },
    {
      "q": "¿Es el código de cadenas **invariante frente a rotaciones**?",
      "opts": [
        "Sí, es completamente invariante.",
        "No, una rotación cambia el código de cadenas aunque sea el mismo objeto.",
        "Solo para rotaciones de 90 grados.",
        "Solo para códigos C-4."
      ],
      "correct": [1]
    },
    {
      "q": "Los **momentos estadísticos centrales** de orden n se definen respecto a:",
      "opts": [
        "El valor máximo de intensidad.",
        "El valor mínimo de intensidad.",
        "La media de la imagen.",
        "El centroide del objeto."
      ],
      "correct": [2]
    },
    {
      "q": "Para los momentos estadísticos centrales, se cumple que:",
      "opts": [
        "μ₀(r) = 1",
        "μ₁(r) = 0",
        "μ₂(r) representa la varianza.",
        "μ₃(r) representa la asimetría."
      ],
      "correct": [0, 1]
    },
    {
      "q": "En los **momentos estadísticos no centrales**, m₀,₀ representa:",
      "opts": [
        "La suma de todos los valores de intensidad de la imagen.",
        "Para una imagen binaria, el área de las componentes conexas.",
        "El centroide del objeto.",
        "La varianza de la imagen."
      ],
      "correct": [0, 1]
    },
    {
      "q": "El **centroide** de un objeto en una imagen binaria se puede calcular como:",
      "opts": [
        "C = (m₁,₀/m₀,₀, m₀,₁/m₀,₀)",
        "Usando momentos estadísticos no centrales.",
        "Como el píxel con máximo valor en la transformada de la distancia.",
        "Todas las anteriores son correctas."
      ],
      "correct": [0, 1, 2, 3]
    },
    {
      "q": "La **suavidad** de una imagen:",
      "opts": [
        "Determina si los niveles de gris varían mucho o no.",
        "Es cero o pequeña cuando la región es suave (niveles de gris constantes).",
        "Es uno cuando los niveles de gris varían mucho.",
        "Se calcula como S(r) = 1 - 1/(1 + σ²(r))."
      ],
      "correct": [0, 1, 2, 3]
    },
    {
      "q": "La **asimetría** A(r) de una imagen indica:",
      "opts": [
        "Si hay un sesgo hacia valores de intensidad bajos (oscuros) o altos (claros).",
        "Si A(r) < 0, la imagen tiene muchas zonas oscuras.",
        "Si A(r) > 0, la imagen tiene muchas zonas claras.",
        "Si A(r) = 0, hay la misma proporción de zonas oscuras y claras."
      ],
      "correct": [0, 1, 2, 3]
    },
    {
      "q": "La **uniformidad** U(r) de una imagen:",
      "opts": [
        "Determina la variación en la frecuencia relativa de los valores de intensidad.",
        "Es máxima cuando todos los píxeles tienen el mismo nivel de intensidad.",
        "Es cero cuando todos los niveles de gris están representados por igual.",
        "Se calcula como la suma de p²(rᵢ)."
      ],
      "correct": [0, 1, 2, 3]
    },
    {
      "q": "La **entropía** E(r) de una imagen:",
      "opts": [
        "Determina la aleatoriedad de los niveles de gris presentes en la imagen.",
        "Se calcula como E(r) = -Σ p(rᵢ)·log₂(p(rᵢ)).",
        "Es máxima cuando todos los niveles de gris tienen la misma probabilidad.",
        "Es mínima cuando solo hay un nivel de gris en la imagen."
      ],
      "correct": [0, 1, 2, 3]
    },
    {
      "q": "¿Cuál de los siguientes descriptores es más útil para discriminar entre una imagen **oscura** y una **clara**?",
      "opts": [
        "Suavidad.",
        "Asimetría.",
        "Uniformidad.",
        "Entropía."
      ],
      "correct": [1]
    },
    {
      "q": "Los **descriptores topológicos** son:",
      "opts": [
        "Invariantes frente a transformaciones geométricas que deforman los objetos.",
        "Invariantes frente a isometrías (rotaciones, traslaciones, simetrías).",
        "Útiles para discriminar objetos según su forma y conectividad.",
        "Dependientes del color de los objetos."
      ],
      "correct": [0, 1, 2]
    },
    {
      "q": "Los **descriptores geométricos** son:",
      "opts": [
        "Casi todos invariantes frente a isometrías.",
        "Útiles para discriminar objetos según propiedades del contorno.",
        "Incluyen área, perímetro, compacidad y diámetro.",
        "Siempre invariantes frente a dilataciones y reducciones."
      ],
      "correct": [0, 1, 2]
    },
    {
      "q": "Los **descriptores estadísticos** son:",
      "opts": [
        "Invariantes frente a transformaciones geométricas.",
        "Especialmente invariantes frente a dilataciones y reducciones.",
        "Útiles para discriminar objetos según la distribución de valores de intensidad.",
        "Incluyen momentos estadísticos, suavidad, asimetría, uniformidad y entropía."
      ],
      "correct": [0, 1, 2, 3]
    },
    {
      "q": "Si una imagen tiene conectividad **(8,4)**, ¿qué tipo de conectividad tienen los píxeles del fondo?",
      "opts": [
        "Conectividad-4.",
        "Conectividad-8.",
        "Conectividad-16.",
        "No tienen conectividad definida."
      ],
      "correct": [1]
    },
    {
      "q": "¿Cuál es una **desventaja** de usar filtros de realce u operadores morfológicos para calcular el perímetro?",
      "opts": [
        "Son muy lentos computacionalmente.",
        "Pueden producir bordes dobles, multiplicando el perímetro por dos o más.",
        "No funcionan con imágenes binarias.",
        "Requieren demasiada memoria."
      ],
      "correct": [1]
    },
    {
      "q": "Para calcular el perímetro usando códigos de cadena C-8 y la fórmula P = H + V + √2·D:",
      "opts": [
        "H = #0 + #4 (componentes horizontales).",
        "V = #2 + #6 (componentes verticales).",
        "D = #1 + #3 + #5 + #7 (componentes diagonales).",
        "Este método suele dar una aproximación más precisa que la aproximación poligonal básica."
      ],
      "correct": [0, 1, 2, 3]
    },
    {
      "q": "La **firma normalizada** de un objeto:",
      "opts": [
        "Se obtiene dividiendo r por √(A/π).",
        "Es invariante frente a cambios de escala (dilataciones/reducciones).",
        "Permite comparar objetos de diferentes tamaños.",
        "Depende de la elección del centroide."
      ],
      "correct": [0, 1, 2, 3]
    },
    {
      "q": "En una imagen con conectividad **(4,8)**, si encontramos un píxel no nulo cuyos cuatro píxeles anteriores tienen intensidad 0:",
      "opts": [
        "Se le asigna la etiqueta del píxel izquierdo.",
        "Se le asigna la etiqueta del píxel superior.",
        "Se le asigna una etiqueta nueva.",
        "Se fusionan todas las etiquetas existentes."
      ],
      "correct": [2]
    },
    {
      "q": "¿Cuál de las siguientes afirmaciones sobre la **transformada de la distancia** es FALSA?",
      "opts": [
        "Solo se aplica a píxeles con valor de intensidad 1.",
        "Permite identificar el esqueleto buscando máximos locales.",
        "Es un descriptor geométrico.",
        "Genera una representación en escala de grises de la imagen binaria."
      ],
      "correct": [2]
    },
    {
      "q": "Si la **excentricidad** de un objeto es aproximadamente 1, esto indica que:",
      "opts": [
        "El objeto tiene forma muy alargada.",
        "El objeto tiene forma aproximadamente circular.",
        "El eje mayor y el eje menor tienen longitudes similares.",
        "El objeto es un cuadrado."
      ],
      "correct": [1, 2]
    },
    {
      "q": "Los **descriptores basados en regiones** describen:",
      "opts": [
        "La distribución de todos los píxeles del objeto sobre el plano.",
        "Solo las variaciones a lo largo del contorno.",
        "Incluyen área y momentos estadísticos.",
        "Son menos precisos que los descriptores basados en contornos."
      ],
      "correct": [0, 2]
    },
    {
      "q": "Los **descriptores basados en contornos** describen:",
      "opts": [
        "Variaciones a lo largo del contorno o bordes del objeto.",
        "Incluyen perímetro, firma y código de cadenas.",
        "La distribución completa de píxeles en el objeto.",
        "Son útiles cuando la forma del borde es importante."
      ],
      "correct": [0, 1, 3]
    },
    {
      "q": "Si dos objetos tienen la misma **compacidad**, ¿qué podemos concluir?",
      "opts": [
        "Tienen exactamente la misma forma.",
        "Tienen la misma relación entre perímetro² y área.",
        "Necesariamente tienen el mismo perímetro.",
        "Necesariamente tienen la misma área."
      ],
      "correct": [1]
    },
    {
      "q": "Para una imagen binaria, ¿cuál es la relación entre el número de agujeros (H), el número de componentes conexas (C) y la característica de Euler (χ)?",
      "opts": [
        "χ = C - H",
        "χ = H - C",
        "χ = C + H",
        "χ = C × H"
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué descriptor(es) permite(n) reconstruir completamente la forma de un objeto?",
      "opts": [
        "El área.",
        "El código de cadenas.",
        "La firma (con suficientes muestras).",
        "El perímetro."
      ],
      "correct": [1, 2]
    }
  ];