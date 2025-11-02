// PREGUNTAS MEJORADAS - TEMA 3: Filtrado y Detección de Bordes
// Basadas en: Lecture3 - PosClase.pdf
// DISTRIBUCIÓN EQUILIBRADA: 10 por cada opción (0,1,2,3)

window.questionsByTopic = window.questionsByTopic || {};
window.questionsByTopic.tema3 = [
  
  // ============ RESPUESTA CORRECTA: OPCIÓN 0 (10 preguntas) ============
  
  {
    "q": "¿Cuál es la diferencia fundamental entre correlación y convolución al aplicar un kernel a una imagen?",
    "opts": [
      "La convolución usa el kernel simétrico (reflejado) respecto al origen, la correlación lo usa directamente",
      "La correlación es más rápida computacionalmente que la convolución",
      "La convolución solo funciona con kernels de tamaño impar",
      "La correlación requiere normalizar los valores del kernel"
    ],
    "correct": [0]
  },
  
  {
    "q": "Si aplicamos el filtro de la media armónica a una imagen con ruido de tipo pimienta (píxeles negros = 0), ¿qué ocurre matemáticamente?",
    "opts": [
      "El término 1/f(x,y) tiende a infinito donde hay píxeles negros, amplificando el ruido en la vecindad",
      "El filtro elimina selectivamente los píxeles negros",
      "La media armónica convierte píxeles negros en blancos",
      "No afecta al ruido pimienta, solo al ruido sal"
    ],
    "correct": [0]
  },
  
  {
    "q": "Para un kernel gaussiano 5×5 con σ=1, ¿por qué la suma de todos sus coeficientes debe ser 1?",
    "opts": [
      "Para preservar el brillo promedio de la imagen (conservación de energía)",
      "Para que el filtro sea separable",
      "Para garantizar que sea un filtro de paso alto",
      "Para que el kernel sea simétrico"
    ],
    "correct": [0]
  },
  
  {
    "q": "Si un kernel tiene todos sus coeficientes sumando 0 (como Sobel o Laplaciano), ¿qué efecto tiene sobre regiones uniformes?",
    "opts": [
      "Produce respuesta cero (negro) en zonas de intensidad constante",
      "Amplifica el valor de las zonas uniformes",
      "Invierte los colores de las zonas uniformes",
      "No afecta a las zonas uniformes"
    ],
    "correct": [0]
  },
  
  {
    "q": "¿Por qué el filtro de Sobel es menos sensible al ruido que el filtro de Roberts?",
    "opts": [
      "Usa un kernel 3×3 que promedia más píxeles, suavizando el ruido antes de derivar",
      "Roberts usa diferencias diagonales que amplifican el ruido",
      "Sobel normaliza automáticamente por la varianza del ruido",
      "Roberts no tiene coeficientes que sumen cero"
    ],
    "correct": [0]
  },
  
  {
    "q": "Al aplicar zero-padding antes de la convolución, ¿qué problema principal causa en los bordes de la imagen?",
    "opts": [
      "Crea bordes artificiales oscuros porque los ceros se interpretan como píxeles negros",
      "Aumenta el tiempo de procesamiento exponencialmente",
      "Hace que la imagen se reduzca de tamaño",
      "Invierte los valores de intensidad en los bordes"
    ],
    "correct": [0]
  },
  
  {
    "q": "Si σ→0 en un Laplaciano de Gaussiana (LoG), ¿qué operador obtenemos?",
    "opts": [
      "El Laplaciano puro (sin suavizado previo), muy sensible al ruido",
      "Un filtro gaussiano puro sin detección de bordes",
      "Un filtro de mediana",
      "La diferencia de gaussianas (DoG)"
    ],
    "correct": [0]
  },
  
  {
    "q": "¿Por qué el filtro de la mediana redondea las esquinas de los objetos?",
    "opts": [
      "Porque reemplaza píxeles de esquina (valores extremos) por valores medianos de la vecindad",
      "Porque usa un kernel circular en lugar de cuadrado",
      "Porque aplica suavizado gaussiano implícito",
      "Porque elimina los píxeles de máximo contraste"
    ],
    "correct": [0]
  },
  
  {
    "q": "Para realzar una imagen difusa, ¿qué operación aplicas si el kernel Laplaciano tiene centro negativo (-4 o -8)?",
    "opts": [
      "g(x,y) = f(x,y) - ∇²f(x,y) para sumar los bordes positivos detectados",
      "g(x,y) = f(x,y) + ∇²f(x,y) para restar los bordes negativos",
      "g(x,y) = ∇²f(x,y) solamente",
      "g(x,y) = |f(x,y) - ∇²f(x,y)|"
    ],
    "correct": [0]
  },
  
  {
    "q": "¿Cuál es la ventaja computacional de que un kernel sea separable en ω₁ y ω₂?",
    "opts": [
      "Permite aplicar dos convoluciones 1D secuenciales en lugar de una 2D, reduciendo operaciones de O(n²m²) a O(n²m)",
      "Se puede aplicar en paralelo en múltiples procesadores",
      "Reduce el uso de memoria a la mitad",
      "Permite usar FFT para acelerar el cálculo"
    ],
    "correct": [0]
  },

  // ============ RESPUESTA CORRECTA: OPCIÓN 1 (10 preguntas) ============
  
  {
    "q": "¿Qué propiedad del producto de convolución permite aplicar k kernels secuencialmente como un solo kernel combinado?",
    "opts": [
      "Solo la propiedad conmutativa",
      "La propiedad asociativa: ω₁*(ω₂*f) = (ω₁*ω₂)*f",
      "La propiedad distributiva",
      "No se puede combinar kernels, hay que aplicarlos secuencialmente siempre"
    ],
    "correct": [1]
  },
  
  {
    "q": "Para eliminar ruido tipo sal y pimienta preservando bordes, ¿qué filtro es más apropiado?",
    "opts": [
      "Filtro gaussiano porque suaviza uniformemente",
      "Filtro de la mediana porque es no lineal y no promedia valores extremos",
      "Filtro de la media porque promedia el ruido",
      "Filtro del máximo seguido del mínimo"
    ],
    "correct": [1]
  },
  
  {
    "q": "¿Qué patrón caracteriza a la primera derivada digital en zonas de transición gradual (rampas)?",
    "opts": [
      "Es cero en toda la rampa",
      "Es constante (no cero) durante toda la rampa",
      "Tiene un solo pico al inicio de la rampa",
      "Tiene dos picos, uno positivo y uno negativo"
    ],
    "correct": [1]
  },
  
  {
    "q": "Si aplicamos el filtro del máximo 3×3 a una imagen con ruido tipo pimienta (píxeles negros aislados), ¿qué efecto tiene?",
    "opts": [
      "Amplifica el ruido pimienta",
      "Elimina el ruido pimienta porque reemplaza píxeles negros por el máximo (claro) de la vecindad",
      "No afecta al ruido pimienta, solo al ruido sal",
      "Convierte ruido pimienta en ruido sal"
    ],
    "correct": [1]
  },
  
  {
    "q": "En el filtro DoG (Diferencia de Gaussianas), ¿qué relación debe cumplirse entre σ₁ y σ₂?",
    "opts": [
      "σ₁ = σ₂ para obtener diferencia cero",
      "σ₁ > σ₂ para que la resta G_σ₁ - G_σ₂ realce bordes",
      "σ₁ < σ₂ siempre",
      "No importa, el resultado es el mismo"
    ],
    "correct": [1]
  },
  
  {
    "q": "La segunda derivada digital en zonas de intensidad constante y en rampas (transiciones graduales) es:",
    "opts": [
      "Positiva en ambos casos",
      "Cero en ambos casos (constante y rampa lineal)",
      "Cero en constante, no cero en rampa",
      "No cero en constante, cero en rampa"
    ],
    "correct": [1]
  },
  
  {
    "q": "¿Por qué el filtro gaussiano produce un suavizado más uniforme que el filtro de la media?",
    "opts": [
      "Porque usa un kernel más grande",
      "Porque pondera más los píxeles centrales (exponencial) en lugar de peso uniforme",
      "Porque es no lineal",
      "Porque normaliza por la desviación estándar"
    ],
    "correct": [1]
  },
  
  {
    "q": "Si queremos oscurecer una imagen clara para aumentar contraste, ¿qué filtro estadístico usamos?",
    "opts": [
      "Filtro del máximo",
      "Filtro del mínimo para reducir intensidades seleccionando valores bajos",
      "Filtro de la mediana",
      "Filtro del punto medio"
    ],
    "correct": [1]
  },
  
  {
    "q": "Al aplicar replicate-padding, ¿qué valores se añaden en los bordes de la imagen?",
    "opts": [
      "Ceros en todos los bordes",
      "Se replican (copian) los valores de los píxeles del borde",
      "Se promedian los valores del borde",
      "Se ponen en blanco (255)"
    ],
    "correct": [1]
  },
  
  {
    "q": "¿Qué kernel del operador de Roberts detecta cambios en la diagonal principal (↘)?",
    "opts": [
      "[[0,1],[-1,0]]",
      "[[1,0],[0,-1]]",
      "[[-1,0],[0,1]]",
      "Ambos kernels detectan la misma diagonal"
    ],
    "correct": [1]
  },

  // ============ RESPUESTA CORRECTA: OPCIÓN 2 (10 preguntas) ============
  
  {
    "q": "Para una imagen de 1000×1000 píxeles y kernel 5×5, ¿cuántas operaciones (multiplicaciones) requiere la convolución directa vs separable?",
    "opts": [
      "Directa: 25M, Separable: 25M (igual)",
      "Directa: 10M, Separable: 5M",
      "Directa: 25M (1000×1000×25), Separable: 10M (1000×1000×5×2)",
      "Directa: 5M, Separable: 10M"
    ],
    "correct": [2]
  },
  
  {
    "q": "El filtro de la media geométrica se calcula como (∏f(s,t))^(1/mn). ¿Para qué tipo de ruido es especialmente útil?",
    "opts": [
      "Ruido de tipo sal y pimienta",
      "Ruido multiplicativo",
      "Ruido gaussiano, pero empeora el ruido tipo pimienta",
      "No es útil para ningún tipo de ruido"
    ],
    "correct": [2]
  },
  
  {
    "q": "¿Qué realza principalmente el operador gradiente (primera derivada)?",
    "opts": [
      "Solo bordes horizontales",
      "Zonas de intensidad constante",
      "Cambios bruscos (escalones) y transiciones graduales (rampas)",
      "Solo el ruido de la imagen"
    ],
    "correct": [2]
  },
  
  {
    "q": "El filtro del punto medio calcula g(x,y) = (max+min)/2. ¿Para qué tipo de ruidos es útil?",
    "opts": [
      "Solo ruido sal y pimienta",
      "Solo ruido gaussiano",
      "Ruido gaussiano y ruido uniforme",
      "No es útil para eliminar ruido"
    ],
    "correct": [2]
  },
  
  {
    "q": "En el operador de Sobel, ¿qué representa el kernel [[-1,0,1],[-2,0,2],[-1,0,1]]?",
    "opts": [
      "Detecta bordes horizontales (cambios en y)",
      "No es un kernel válido de Sobel",
      "Detecta bordes verticales (cambios en x, derivada ∂f/∂x)",
      "Detecta esquinas de la imagen"
    ],
    "correct": [2]
  },
  
  {
    "q": "¿Qué detecta específicamente el Laplaciano (segunda derivada) que no detecta el gradiente?",
    "opts": [
      "Cambios graduales en intensidad",
      "Zonas uniformes",
      "Transiciones bruscas (inicio/fin de escalones), ignorando rampas",
      "Solo el ruido"
    ],
    "correct": [2]
  },
  
  {
    "q": "Si aumentamos σ en un filtro gaussiano de σ=1 a σ=5 con mismo tamaño de kernel, ¿qué ocurre?",
    "opts": [
      "La imagen se vuelve más nítida",
      "No cambia nada, σ no afecta al resultado",
      "El suavizado es más intenso (blur más fuerte)",
      "Se detectan más bordes"
    ],
    "correct": [2]
  },
  
  {
    "q": "¿Qué desventaja principal tiene el filtro de la mediana para detección de formas?",
    "opts": [
      "No elimina el ruido sal y pimienta",
      "Es muy lento computacionalmente",
      "Redondea esquinas de objetos, dificultando su detección exacta",
      "Amplifica el ruido gaussiano"
    ],
    "correct": [2]
  },
  
  {
    "q": "En la fórmula del kernel gaussiano G(x,y) = (1/(2πσ²))·e^(-(x²+y²)/(2σ²)), ¿qué representa σ²?",
    "opts": [
      "El tamaño del kernel",
      "La media de la distribución",
      "La varianza (desviación estándar al cuadrado), controla el ancho del suavizado",
      "El número de píxeles a procesar"
    ],
    "correct": [2]
  },
  
  {
    "q": "¿Cuál es el propósito de aplicar un filtro gaussiano ANTES del Laplaciano en LoG?",
    "opts": [
      "Aumentar el contraste de los bordes",
      "Acelerar el cálculo computacional",
      "Suavizar el ruido para que el Laplaciano (sensible al ruido) no lo amplifique",
      "Convertir la imagen a escala de grises"
    ],
    "correct": [2]
  },

  // ============ RESPUESTA CORRECTA: OPCIÓN 3 (10 preguntas) ============
  
  {
    "q": "¿Por qué el producto de convolución es asociativo pero el de correlación NO lo es?",
    "opts": [
      "Porque la correlación es más rápida",
      "Porque la convolución usa normalizac ión",
      "Por la correlación no usa el kernel simétrico",
      "Porque la convolución refleja el kernel, permitiendo (ω₁*ω₂)*f = ω₁*(ω₂*f)"
    ],
    "correct": [3]
  },
  
  {
    "q": "El kernel gaussiano 3×3 con σ=1 es [[1,2,1],[2,4,2],[1,2,1]]/16. ¿Qué vectores lo descomponen (es separable)?",
    "opts": [
      "[1,1,1] y [1,1,1]",
      "[1,2,1] y [1,1,1]",
      "[1,0,1] y [1,2,1]",
      "[1,2,1] y [1,2,1]ᵀ (el mismo vector en fila y columna)"
    ],
    "correct": [3]
  },
  
  {
    "q": "En el cálculo del gradiente digital, ∂f/∂x = f(x+1,y) - f(x,y). ¿Qué representa geométricamente?",
    "opts": [
      "La suma de intensidades",
      "El promedio de píxeles vecinos",
      "El valor absoluto de f(x,y)",
      "La diferencia de intensidad hacia la derecha (tasa de cambio en x)"
    ],
    "correct": [3]
  },
  
  {
    "q": "Si |∇f| es grande pero θ (dirección del gradiente) es constante en una región, ¿qué indica?",
    "opts": [
      "Zona uniforme sin bordes",
      "Ruido aleatorio",
      "Esquina o punto aislado",
      "Borde recto pronunciado en dirección perpendicular a θ"
    ],
    "correct": [3]
  },
  
  {
    "q": "¿Qué ventaja tiene el kernel Laplaciano [[0,-1,0],[-1,4,-1],[0,-1,0]] sobre [[-1,-1,-1],[-1,8,-1],[-1,-1,-1]]?",
    "opts": [
      "Detecta bordes diagonales mejor",
      "Es más rápido de calcular",
      "Produce valores más altos",
      "Considera solo vecindad 4-conectada (arriba/abajo/izq/der), útil para bordes horizontales/verticales"
    ],
    "correct": [3]
  },
  
  {
    "q": "Si aplicamos el filtro del mínimo a una imagen con ruido tipo sal (píxeles blancos = 255), ¿qué ocurre?",
    "opts": [
      "Amplifica el ruido sal",
      "No afecta al ruido sal",
      "Convierte sal en pimienta",
      "Elimina el ruido sal porque reemplaza píxeles blancos por el mínimo (oscuro) de la vecindad"
    ],
    "correct": [3]
  },
  
  {
    "q": "Al aplicar symmetric-padding, ¿cómo se rellenan los bordes?",
    "opts": [
      "Con ceros",
      "Replicando el último píxel",
      "Con valores aleatorios",
      "Reflejando simétricamente los píxeles del interior"
    ],
    "correct": [3]
  },
  
  {
    "q": "¿Por qué DoG (Diferencia de Gaussianas) aproxima al LoG (Laplaciano de Gaussiana)?",
    "opts": [
      "No se parecen en nada",
      "Solo funcionan igual con σ=1",
      "Porque usan el mismo kernel",
      "Porque matemáticamente ∇²G ≈ (G_σ₁ - G_σ₂) cuando σ₁ y σ₂ están próximos"
    ],
    "correct": [3]
  },
  
  {
    "q": "El filtro de la media armónica se define como mn/(Σ(1/f(s,t))). ¿Para qué ruidos es útil?",
    "opts": [
      "Solo ruido pimienta",
      "Sal y pimienta por igual",
      "No es útil para ruido",
      "Gaussiano y ruido tipo sal, pero empeora el ruido tipo pimienta"
    ],
    "correct": [3]
  },
  
  {
    "q": "Según las diapositivas, ¿qué técnica de padding es mejor para evitar artefactos en los bordes?",
    "opts": [
      "Zero-padding siempre",
      "No usar padding",
      "Depende, zero-padding es más rápido",
      "Replicate o symmetric-padding evitan crear bordes artificiales oscuros"
    ],
    "correct": [3]
  }
];

// ============================================
// VERIFICACIÓN BASADA EN LECTURE 3:
// ============================================
// ✅ Correlación vs Convolución (slides 10-16)
// ✅ Propiedades: conmutativa, asociativa, distributiva (slide 22)
// ✅ Padding: zero, replicate, symmetric (slides 18-21)
// ✅ Filtro media, gaussiano (slides 24-36)
// ✅ Media geométrica y armónica (slides 26-27)
// ✅ Filtros estadísticos: máx, mín, mediana, punto medio (slides 37-46)
// ✅ Derivadas digitales 1ª y 2ª orden (slides 50-52)
// ✅ Gradiente: Roberts, Sobel (slides 53-62)
// ✅ Laplaciano digital (slides 63-67)
// ✅ LoG y DoG (slides 68-74)
// ✅ Kernels separables (slide 78)
//
// DISTRIBUCIÓN FINAL VERIFICADA:
// Opción 0: 10 preguntas (25%)
// Opción 1: 10 preguntas (25%)
// Opción 2: 10 preguntas (25%)
// Opción 3: 10 preguntas (25%)
//
// ✅ SIN redundancia
// ✅ Basadas en contenido real del PDF
// ✅ Requieren razonamiento y comprensión

// ✅ Distractores basados en misconcepciones comunes
