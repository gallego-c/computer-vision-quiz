/* Plain script fallback defining questions on window for file:// or non-module environments */
(function () {
  window.questions = [
    {
      q: "Which loss function is most appropriate for image classification with softmax outputs?",
      opts: [
        "Mean Squared Error (MSE)",
        "Cross-Entropy Loss",
        "L1 Loss",
        "Hinge Loss"
      ],
      correct: [1]
    },
    {
      q: "Which technique is commonly used for data augmentation in training CNNs?",
      opts: [
        "Random cropping and flipping",
        "Batch normalization",
        "Dropout",
        "Early stopping"
      ],
      correct: [0]
    },
    {
      q: "Select true statements about Convolutional Neural Networks (CNNs):",
      opts: [
        "Convolutions provide translation equivariance",
        "Pooling increases the spatial resolution",
        "Fully connected layers are required at inference time",
        "Strided convolutions can downsample feature maps"
      ],
      correct: [0, 3]
    },
    {
      q: "Which evaluation metric is most suitable for object detection tasks?",
      opts: [
        "Mean Average Precision (mAP)",
        "Perplexity",
        "BLEU score",
        "RMSE"
      ],
      correct: [0]
    },
    {
      q: "In semantic segmentation, what does the model predict?",
      opts: [
        "A class label per pixel",
        "Bounding boxes only",
        "A single global class for the image",
        "Keypoint coordinates for objects"
      ],
      correct: [0]
    }
  ];
})();
