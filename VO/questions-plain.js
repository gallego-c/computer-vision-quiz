/* Plain fallback: expose topics and questionsByTopic on window for file:// */
(function () {
  window.topics = [
    { id: 'cv', name: 'Visión por Computador (basics)', file: './questions_cv.js' },
    { id: 'ml', name: 'Aprendizaje Automático', file: './questions_ml.js' },
    { id: 'dl', name: 'Deep Learning', file: './questions_dl.js' },
    { id: 'cv2', name: 'Visión (detección)', file: './questions_cv2.js' },
    { id: 'vision_math', name: 'Matemáticas de Visión', file: './questions_vision_math.js' },
    { id: 'vision_hw', name: 'Procesado y HW', file: './questions_vision_hw.js' },
    { id: 'stats', name: 'Estadística aplicada', file: './questions_stats.js' }
  ];

  window.questionsByTopic = {
     cv: [
      {
        q: "Etapas en la visión por ordenador, marca todas las correctas:",
        opts: [
          "Adquisición de imágenes",
          "Procesado de la imagen",
          "Clustering",
          "Segmentación",
          "Extracción de características",
          "Entrenamiento de modelos",
          "Detección y reconocimiento"
        ],
        correct: [0,1,3,4,6]
      },
      {
        q: "Which loss function is most appropriate for image classification with softmax outputs?",
        opts: ["Mean Squared Error (MSE)", "Cross-Entropy Loss", "L1 Loss", "Hinge Loss"],
        correct: [1]
      },
      {
        q: "Which technique is commonly used for data augmentation in training CNNs?",
        opts: ["Random cropping and flipping", "Batch normalization", "Dropout", "Early stopping"],
        correct: [0]
      }
    ],
  ml: [
      {
        q: "Which algorithm is typically used for classification with small datasets?",
        opts: ["k-NN", "Deep CNN", "Large Transformer", "DBSCAN"],
        correct: [0]
      },
      {
        q: "What is regularization used for in ML models?",
        opts: ["Improve training speed", "Prevent overfitting", "Increase model size", "Reduce dataset size"],
        correct: [1]
      }
    ]
    ,
    dl: [
      { q: 'What activation is common in hidden layers of deep nets?', opts: ['ReLU', 'Softmax', 'Sigmoid output', 'None'], correct: [0] },
      { q: 'What helps training deep networks (regularization)?', opts: ['Dropout', 'Increasing learning rate', 'Removing data', 'Noisy labels'], correct: [0] }
    ],
    cv2: [
      { q: 'Which metric is used for object detection overlap?', opts: ['IoU', 'PSNR', 'SSIM', 'RMSE'], correct: [0] },
      { q: 'Which model outputs bounding boxes?', opts: ['Faster R-CNN', 'VGG loss', 'k-means', 'PCA'], correct: [0] }
    ],
    vision_math: [
      { q: 'Convolution in images corresponds to which operation?', opts: ['Filtering', 'Sampling', 'Clustering', 'Quantization'], correct: [0] },
      { q: 'What does Fourier transform decompose?', opts: ['Frequencies', 'Colors', 'Objects', 'Edges'], correct: [0] }
    ],
    vision_hw: [
      { q: 'What accelerates inference on edge devices?', opts: ['Quantization', 'Increasing batch size', 'Using USB', 'Adding more layers'], correct: [0] },
      { q: 'Which format reduces model size?', opts: ['INT8', 'Float64', 'BMP', 'CSV'], correct: [0] }
    ],
    stats: [
      { q: 'Which measure describes spread of data?', opts: ['Variance', 'Mode', 'Median', 'Min'], correct: [0] },
      { q: 'What is p-value used for?', opts: ['Hypothesis testing', 'Visualization', 'Clustering', 'Sampling'], correct: [0] }
    ]
  };
})();
