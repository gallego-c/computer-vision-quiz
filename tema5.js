window.questionsByTopic = window.questionsByTopic || {};
window.questionsByTopic.tema5 = [
    {
      "q": "Dada una imagen en escala de grises con pequeñas manchas oscuras sobre un fondo claro, queremos eliminarlas sin afectar las estructuras grandes. ¿Cuál es el procedimiento más adecuado?",
      "opts": [
        "Aplicar erosión seguida de dilatación, porque la erosión elimina detalles oscuros.",
        "Aplicar clausura, porque elimina detalles oscuros más pequeños que el elemento estructural sin aclarar uniformemente la imagen.",
        "Aplicar apertura, porque suaviza la imagen eliminando ruido.",
        "Aplicar el gradiente morfológico externo para realzar las manchas y luego restarlas."
      ],
      "correct": [1]
    },
    {
      "q": "Si aplicamos la transformada Top-Hat a una imagen y obtenemos una imagen completamente negra (valores en 0), ¿qué podemos concluir?",
      "opts": [
        "El elemento estructural es demasiado pequeño.",
        "La imagen original era completamente uniforme.",
        "No hay detalles claros más pequeños que el elemento estructural sobre fondos oscuros locales.",
        "Se debería haber usado Bottom-Hat en su lugar."
      ],
      "correct": [2]
    },
    {
      "q": "Consideramos tres gradientes morfológicos: G₁ = (f ⊕ B) - (f ⊖ B), G₂ = f - (f ⊖ B), G₃ = (f ⊕ B) - f. ¿Cuál afirmación es correcta?",
      "opts": [
        "G₁ produce bordes más gruesos que G₂ y G₃, y es menos sensible a la direccionalidad si B es simétrico.",
        "G₂ y G₃ producen exactamente los mismos resultados si el elemento estructural es simétrico.",
        "G₂ + G₃ = 2·G₁ siempre.",
        "Los tres gradientes detectan exactamente los mismos bordes, solo cambia la intensidad."
      ],
      "correct": [0]
    },
    {
      "q": "En un análisis granulométrico con fondo oscuro y partículas claras, las mayores diferencias |vᵢ - vᵢ₊₁| ocurren para radios 5 y 15. ¿Qué podemos concluir? (Pueden ser varias correctas)",
      "opts": [
        "La imagen contiene principalmente partículas de tamaños correspondientes a radios 5 y 15.",
        "Deberíamos usar elementos estructurales de radios 5 y 15 para segmentar por texturas.",
        "Los radios 5 y 15 son los menos útiles porque eliminan demasiada información.",
        "Si aplicamos apertura con B₁₅, eliminaremos todas las partículas de radio menor a 15."
      ],
      "correct": [0, 1, 3]
    },
    {
      "q": "¿Cuál es la expresión correcta de la transformada Vers-Hat y su función?",
      "opts": [
        "Vers-Hat = 2f - (f ∘ B) - (f ● B), y mejora solo estructuras claras.",
        "Vers-Hat = f + (f - f∘B) + (f●B - f), equivalente a f + Top-Hat + Bottom-Hat.",
        "Vers-Hat = 3f - (f ∘ B) - (f ● B), y realza tanto estructuras claras como oscuras mejorando el contraste.",
        "Vers-Hat es equivalente a aplicar un gradiente morfológico seguido de suma con la imagen original."
      ],
      "correct": [2]
    },
    {
      "q": "Para segmentar una imagen con círculos grandes y pequeños (ambos oscuros sobre fondo claro), aplicamos clausura y luego apertura. ¿Por qué este orden específico?",
      "opts": [
        "Porque la clausura suaviza primero y luego la apertura elimina ruido residual.",
        "Porque necesitamos eliminar los círculos pequeños (clausura) y luego suavizar las regiones (apertura) antes de calcular el gradiente.",
        "El orden es indiferente debido a la idempotencia de ambos operadores.",
        "Porque aplicar apertura primero eliminaría los círculos grandes junto con los pequeños."
      ],
      "correct": [1]
    },
    {
      "q": "¿Cuál de las siguientes afirmaciones sobre idempotencia es correcta?",
      "opts": [
        "Erosión y dilatación son idempotentes: aplicarlas dos veces produce el mismo resultado.",
        "Apertura y clausura son idempotentes: (f ∘ B) ∘ B = f ∘ B y (f ● B) ● B = f ● B.",
        "El gradiente morfológico es idempotente porque combina erosión y dilatación.",
        "Ningún operador morfológico es idempotente en imágenes en escala de grises."
      ],
      "correct": [1]
    },
    {
      "q": "¿Qué diferencia fundamental hay entre aplicar apertura (f ∘ B) y simplemente erosionar (f ⊖ B)?",
      "opts": [
        "La apertura elimina detalles pequeños brillantes sin oscurecer uniformemente la imagen.",
        "La erosión es más rápida computacionalmente pero produce el mismo resultado.",
        "La apertura siempre produce imágenes más suaves que la erosión.",
        "No hay diferencia significativa, solo es una notación diferente."
      ],
      "correct": [0]
    },
    {
      "q": "En la dilatación de una imagen en escala de grises con elemento estructural plano B≡0, ¿qué operación se realiza realmente?",
      "opts": [
        "Un filtro de la mediana sobre la vecindad definida por B.",
        "Un filtro del máximo sobre la vecindad definida por B.",
        "Un filtro gaussiano con sigma proporcional al tamaño de B.",
        "Una convolución estándar con B como kernel."
      ],
      "correct": [1]
    },
    {
      "q": "¿Por qué el gradiente morfológico estándar (f ⊕ B) - (f ⊖ B) es menos sensible a la direccionalidad de los bordes que otros métodos?",
      "opts": [
        "Porque utiliza elementos estructurales simétricos que analizan todas las direcciones por igual.",
        "Porque promedia los resultados de múltiples direcciones.",
        "Porque solo detecta bordes horizontales y verticales.",
        "Porque aplica un suavizado previo que elimina la dependencia direccional."
      ],
      "correct": [0]
    },
    {
      "q": "Al aplicar filtrado morfológico secuencial alternado, ¿qué implica usar elementos estructurales de tamaño creciente?",
      "opts": [
        "Mejora significativamente el filtrado al eliminar progresivamente estructuras de diferentes tamaños.",
        "Reduce el tiempo de procesamiento al procesar menos píxeles.",
        "Aumenta el contraste sin suavizar la imagen.",
        "Permite detectar bordes a múltiples escalas simultáneamente."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es la relación matemática correcta entre los gradientes morfológicos interno, externo y estándar?",
      "opts": [
        "Gradiente interno + Gradiente externo = 2 × Gradiente estándar.",
        "Gradiente interno + Gradiente externo = Gradiente estándar.",
        "Gradiente interno = Gradiente externo si B es simétrico.",
        "No existe relación matemática directa entre ellos."
      ],
      "correct": [1]
    },
    {
      "q": "En la segmentación por texturas con círculos de diferentes tamaños, ¿por qué el tamaño del elemento estructural para clausura debe ser mayor que el círculo pequeño pero menor que el grande?",
      "opts": [
        "Para suavizar ambos tipos de círculos por igual.",
        "Para eliminar (rellenar) solo los círculos pequeños manteniendo intactos los grandes.",
        "Para aumentar el contraste entre ambos tipos de círculos.",
        "Para detectar los bordes de ambos tipos de círculos simultáneamente."
      ],
      "correct": [1]
    },
    {
      "q": "¿Qué representa el Laplaciano morfológico g = (f ⊕ B) + (f ⊖ B) - 2f?",
      "opts": [
        "La suma de los gradientes interno y externo.",
        "Una aproximación morfológica al operador Laplaciano clásico.",
        "El doble del gradiente morfológico estándar.",
        "La diferencia entre apertura y clausura."
      ],
      "correct": [1]
    },
    {
      "q": "En el proceso de granulometría, ¿por qué calculamos |vᵢ - vᵢ₊₁| en lugar de usar directamente los valores vᵢ?",
      "opts": [
        "Para normalizar los resultados entre 0 y 1.",
        "Para identificar qué tamaños de elemento estructural eliminan más detalles, revelando los tamaños predominantes de partículas.",
        "Para reducir el efecto del ruido en las mediciones.",
        "Para hacer el algoritmo más eficiente computacionalmente."
      ],
      "correct": [1]
    },
    {
      "q": "¿Cuál de estas afirmaciones sobre la transformada Bottom-Hat es correcta?",
      "opts": [
        "Bottom-Hat = (f ● B) - f resalta detalles oscuros sobre fondos claros locales.",
        "Bottom-Hat = f - (f ● B) resalta detalles claros sobre fondos oscuros.",
        "Bottom-Hat y Top-Hat producen resultados idénticos si se invierten los niveles de gris.",
        "Bottom-Hat solo funciona con imágenes binarias."
      ],
      "correct": [0]
    },
    {
      "q": "Al aplicar dilatación morfológica a una imagen con ruido sal y pimienta, ¿qué efecto tendrá?",
      "opts": [
        "Eliminará el ruido tipo sal y amplificará el ruido tipo pimienta.",
        "Amplificará el ruido tipo sal y atenuará el ruido tipo pimienta.",
        "Eliminará ambos tipos de ruido uniformemente.",
        "No tendrá efecto significativo en ningún tipo de ruido."
      ],
      "correct": [1]
    },
    {
      "q": "¿Por qué el filtrado morfológico de suavizado se construye típicamente como (f ∘ B) ● B en lugar de solo apertura o clausura?",
      "opts": [
        "Porque la apertura sola elimina detalles brillantes y la clausura posterior elimina detalles oscuros, logrando un suavizado más completo.",
        "Porque es más eficiente computacionalmente que aplicar solo uno de los operadores.",
        "Porque así se preservan mejor los bordes de la imagen.",
        "Porque se requiere para que el operador sea idempotente."
      ],
      "correct": [0]
    },
    {
      "q": "En morfología de escala de grises, si B es un elemento estructural NO plano, ¿cómo afecta esto a la operación de erosión?",
      "opts": [
        "La erosión se calcula como min{f(x+s, y+t) - B(s,t)} en lugar de solo min{f(x+s, y+t)}.",
        "No tiene efecto, ya que solo importa la forma de B, no sus valores.",
        "Hace que la erosión sea equivalente a una dilatación con -B.",
        "Convierte la operación en una convolución estándar."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es la ventaja principal del gradiente morfológico frente a operadores como Sobel o Prewitt?",
      "opts": [
        "Es más rápido de calcular computacionalmente.",
        "Produce bordes más finos y precisos.",
        "Depende menos de la direccionalidad de los bordes si se usan elementos estructurales simétricos.",
        "Funciona mejor con imágenes de baja resolución."
      ],
      "correct": [2]
    },
    {
      "q": "Si en una granulometría NO observamos picos significativos en las diferencias |vᵢ - vᵢ₊₁|, ¿qué indica esto sobre la imagen?",
      "opts": [
        "La imagen tiene partículas de tamaños muy uniformes.",
        "La imagen tiene una distribución continua de tamaños sin predominancia de ningún tamaño específico.",
        "El elemento estructural elegido no es apropiado para la imagen.",
        "La imagen no contiene texturas analizables."
      ],
      "correct": [1]
    },
    {
      "q": "¿Por qué la apertura NO oscurece la imagen mientras que la erosión sí lo hace?",
      "opts": [
        "Porque la apertura incluye una dilatación posterior que compensa el oscurecimiento de la erosión.",
        "Porque la apertura usa elementos estructurales más pequeños.",
        "Porque la apertura solo se aplica a regiones específicas de la imagen.",
        "Porque la apertura normaliza los valores después de la operación."
      ],
      "correct": [0]
    },
    {
      "q": "En el contexto de detección de bordes, ¿cuándo usarías el gradiente morfológico interno en lugar del externo?",
      "opts": [
        "Cuando quieres detectar el borde interior de los objetos (lado del objeto).",
        "Cuando la imagen tiene más ruido en el fondo que en los objetos.",
        "Cuando los objetos son más oscuros que el fondo.",
        "Cuando necesitas bordes más gruesos."
      ],
      "correct": [0]
    },
    {
      "q": "¿Qué propiedad matemática NO cumplen los operadores de erosión y dilatación?",
      "opts": [
        "Conmutatividad: (f ⊕ B₁) ⊕ B₂ = (f ⊕ B₂) ⊕ B₁.",
        "Idempotencia: (f ⊕ B) ⊕ B = f ⊕ B.",
        "Asociatividad con el mismo operador: f ⊕ (B₁ ⊕ B₂) = (f ⊕ B₁) ⊕ B₂.",
        "Dualidad: la dilatación y erosión son operadores duales."
      ],
      "correct": [1]
    },
    {
      "q": "Al segmentar texturas con círculos grandes dispersos y círculos pequeños agrupados, ¿por qué aplicamos apertura DESPUÉS de la clausura?",
      "opts": [
        "Para eliminar las separaciones pequeñas entre los círculos grandes después de haber eliminado los pequeños.",
        "Para restaurar el tamaño original de los círculos grandes.",
        "Para detectar los bordes entre las dos regiones de textura.",
        "Para suavizar el ruido introducido por la clausura."
      ],
      "correct": [0]
    },
    {
      "q": "¿Cuál es el efecto combinado de aplicar Top-Hat + Bottom-Hat en la transformada Vers-Hat?",
      "opts": [
        "Elimina tanto detalles claros como oscuros, suavizando la imagen.",
        "Realza detalles claros y oscuros simultáneamente, mejorando el contraste global.",
        "Detecta bordes en ambas direcciones (interior y exterior).",
        "Convierte la imagen en binaria resaltando todos los detalles."
      ],
      "correct": [1]
    },
    {
      "q": "¿Por qué en granulometría usamos aperturas sucesivas con elementos crecientes en lugar de una sola apertura grande?",
      "opts": [
        "Para reducir el costo computacional del procesamiento.",
        "Para obtener información sobre la distribución completa de tamaños, no solo sobre un tamaño específico.",
        "Para evitar perder información de los objetos más grandes.",
        "Para hacer el algoritmo más robusto al ruido."
      ],
      "correct": [1]
    },
    {
      "q": "Si (f ∘ B) = f para una imagen f, ¿qué podemos afirmar sobre f y B?",
      "opts": [
        "B es demasiado pequeño para afectar a f.",
        "f es una imagen abierta con respecto a B, sin detalles claros menores que B sobre fondos oscuros.",
        "f es constante en toda su extensión.",
        "B y f tienen la misma forma y tamaño."
      ],
      "correct": [1]
    },
    {
      "q": "¿Cuál es la principal diferencia entre filtrado morfológico y filtrado por convolución tradicional?",
      "opts": [
        "El filtrado morfológico usa operaciones max/min mientras que la convolución usa operaciones lineales (suma/multiplicación).",
        "El filtrado morfológico es siempre más rápido computacionalmente.",
        "El filtrado morfológico solo funciona con imágenes binarias.",
        "No hay diferencia significativa, son nombres diferentes para el mismo proceso."
      ],
      "correct": [0]
    },
    {
      "q": "En el análisis de una imagen de arroz con granos superpuestos, ¿cómo ayuda la granulometría a la segmentación?",
      "opts": [
        "Permite separar los granos individuales directamente.",
        "Determina el tamaño típico de los granos, facilitando la elección de elementos estructurales adecuados para separación.",
        "Elimina automáticamente los granos superpuestos.",
        "Convierte la imagen en binaria para facilitar el conteo."
      ],
      "correct": [1]
    }
];