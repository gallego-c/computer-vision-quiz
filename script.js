// Script optimizado para GitHub Pages
let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];
let answered = false;
let shuffledQuestions = [];

const quizContainer = document.getElementById('quiz-container');
const progressBar = document.getElementById('progress');

function shuffle(array) {
  return array.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1]);
}

function initializeQuiz() {
  if (!questions || questions.length === 0) {
    console.error('No questions available');
    quizContainer.innerHTML = '<div style="font-family: Inter, sans-serif; color: #c62828;">Error: No se pudieron cargar las preguntas.</div>';
    return;
  }
  
  shuffledQuestions = shuffle([...questions]);
  currentQuestion = 0;
  score = 0;
  selectedAnswers = [];
  answered = false;
  loadQuestion();
}

function updateProgress() {
  const progress = Math.round((currentQuestion / shuffledQuestions.length) * 100);
  progressBar.style.width = progress + '%';
  progressBar.textContent = progress + '%';
}

function loadQuestion() {
  answered = false;
  selectedAnswers = [];
  const q = shuffledQuestions[currentQuestion];
  
  updateProgress();
  
  quizContainer.innerHTML = `
    <div class="question-header">
      <span class="question-number">QUESTION ${currentQuestion + 1}/${shuffledQuestions.length}</span>
    </div>
    
    <div class="question-text">${q.q}</div>
    
    <div class="choices" id="choices"></div>
    
    <div class="button-group">
      <button class="btn btn-primary" id="check-btn" disabled>
        CHECK ANSWER
      </button>
      <button class="btn btn-secondary" id="next-btn" style="display:none;">
        NEXT →
      </button>
    </div>
  `;
  
  const choicesContainer = document.getElementById('choices');
  const shuffledOpts = q.opts.map((opt, idx) => ({text: opt, index: idx}));
  
  shuffledOpts.forEach(opt => {
    const choice = document.createElement('div');
    choice.className = 'choice';
    choice.dataset.index = opt.index;
    choice.innerHTML = `
      <div class="choice-checkbox"></div>
      <span>${opt.text}</span>
    `;
    choice.onclick = () => selectChoice(opt.index);
    choicesContainer.appendChild(choice);
  });

  document.getElementById('check-btn').onclick = checkAnswer;
  document.getElementById('next-btn').onclick = nextQuestion;
}

function selectChoice(index) {
  if (answered) return;
  
  const choices = document.querySelectorAll('.choice');
  
  const choiceIndex = selectedAnswers.indexOf(index);
  if (choiceIndex > -1) {
    selectedAnswers.splice(choiceIndex, 1);
    choices.forEach(c => {
      if (parseInt(c.dataset.index) === index) {
        c.classList.remove('selected');
      }
    });
  } else {
    selectedAnswers.push(index);
    choices.forEach(c => {
      if (parseInt(c.dataset.index) === index) {
        c.classList.add('selected');
      }
    });
  }
  
  document.getElementById('check-btn').disabled = selectedAnswers.length === 0;
}

function checkAnswer() {
  if (answered) return;
  answered = true;
  
  const q = shuffledQuestions[currentQuestion];
  const choices = document.querySelectorAll('.choice');
  
  const correctSet = new Set(q.correct);
  const selectedSet = new Set(selectedAnswers);
  
  const isCorrect = correctSet.size === selectedSet.size && 
                    [...correctSet].every(x => selectedSet.has(x));
  
  if (isCorrect) score++;
  
  choices.forEach(c => {
    const idx = parseInt(c.dataset.index);
    c.classList.add('disabled');
    
    if (correctSet.has(idx)) {
      c.classList.add('correct');
    } else if (selectedSet.has(idx)) {
      c.classList.add('wrong');
    }
  });
  
  document.getElementById('check-btn').style.display = 'none';
  document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
  currentQuestion++;
  
  if (currentQuestion < shuffledQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const percentage = Math.round((score / shuffledQuestions.length) * 100);
  let message = '';
  
  if (percentage >= 90) message = '¡EXCELENTE! ¡ERES UNA SUPER ESTRELLA!';
  else if (percentage >= 70) message = '¡GRAN TRABAJO! ¡SIGUE ASÍ!';
  else if (percentage >= 50) message = '¡BIEN! ¡PRACTICA MÁS!';
  else message = '¡GAME OVER! ¡INTÉNTALO DE NUEVO!';
  
  quizContainer.innerHTML = `
    <div class="score-card">
      <h2>¡ETAPA COMPLETADA!</h2>
      <div class="score-number">${score}/${shuffledQuestions.length}</div>
      <div class="score-message">${message}</div>
      <div class="score-message" style="margin-top: 1rem;">PUNTUACIÓN: ${percentage}%</div>
    </div>
    
    <div class="button-group" style="margin-top: 2rem;">
      <button class="btn btn-primary" id="restart-btn">🔄 REINICIAR</button>
      <button class="btn btn-secondary" id="select-topic-btn">📚 ELEGIR OTRO TEMA</button>
    </div>
  `;
  
  progressBar.style.width = '100%';
  progressBar.textContent = '100%';

  document.getElementById('restart-btn').onclick = restart;
  document.getElementById('select-topic-btn').onclick = showTopicSelection;
}

function restart() {
  initializeQuiz();
}

function showTopicSelection() {
  quizContainer.innerHTML = `
    <div id="topic-selection" style="font-family: 'Inter', sans-serif; color: var(--text-secondary); font-size:0.95rem;">
      <div style="margin-bottom:1rem; font-weight: 500;">Elige un tema para practicar:</div>
      <div id="topic-buttons" style="display:flex; gap:0.75rem; flex-wrap:wrap;"></div>
    </div>
  `;
  
  progressBar.style.width = '0%';
  progressBar.textContent = '0%';
  
  loadTopicsButtons();
}

function loadTopicsButtons() {
  const buttonsContainer = document.getElementById('topic-buttons');
  if (!buttonsContainer) return;

  if (!window.topics || !Array.isArray(window.topics)) {
    console.error('Topics not found');
    quizContainer.innerHTML = '<div style="font-family: Inter, sans-serif; color: #c62828; padding: 1rem;">Error: No se encontraron los temas. Asegúrate de cargar questions-data.js</div>';
    return;
  }

  // Crear un botón para cada tema
  window.topics.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.style.minWidth = '140px';
    btn.textContent = t.name;
    btn.addEventListener('click', () => {
      loadQuestionsForTopic(t.id);
    });
    buttonsContainer.appendChild(btn);
  });
}

function loadQuestionsForTopic(topicId) {
  if (!window.questionsByTopic || !window.questionsByTopic[topicId]) {
    console.error('Questions not found for topic:', topicId);
    quizContainer.innerHTML = `<div style="font-family: Inter, sans-serif; color: #c62828; padding: 1rem;">No se encontraron preguntas para este tema.</div>`;
    return;
  }

  questions = [...window.questionsByTopic[topicId]];
  initializeQuiz();
}

// Inicializar cuando el DOM esté listo
function init() {
  console.log('Initializing quiz...');
  console.log('Topics available:', window.topics);
  console.log('Questions available:', window.questionsByTopic);
  showTopicSelection();
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Exponer funciones globalmente
window.restartQuiz = restart;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;