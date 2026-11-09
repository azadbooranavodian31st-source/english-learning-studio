document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");

    // PYQ Database - Add authentic questions here
    const pyqData = [
        {
            id: 1,
            exam: "SSC CGL 2023 (Tier 1)",
            topic: "Grammar",
            question: "Identify the segment that contains a grammatical error: She did not tell me what her plans are for the upcoming holidays.",
            options: [
                "She did not tell me",
                "what her plans are",
                "for the upcoming holidays",
                "No error"
            ],
            correctOption: 1, // 0-based index (Option 2 is correct)
            explanation: "<strong>Rule of Sequence of Tenses:</strong> If the principal clause is in the past tense ('She did not tell me'), the subordinate clause must also be in the past tense. 'are' should be changed to 'were'. Correct sentence: ...what her plans <em>were</em>..."
        },
        {
            id: 2,
            exam: "SSC CHSL 2022",
            topic: "Vocabulary",
            question: "Select the most appropriate synonym of the given word: LETHARGIC",
            options: [
                "Active",
                "Sluggish",
                "Animated",
                "Sprightly"
            ],
            correctOption: 1,
            explanation: "<strong>Lethargic</strong> means lacking energy or enthusiasm. <strong>Sluggish</strong> is the exact synonym. Active, Animated, and Sprightly are all antonyms."
        }
    ];

    function renderQuiz(data) {
        quizContainer.innerHTML = "";
        data.forEach((q, qIndex) => {
            const card = document.createElement("div");
            card.className = "quiz-card";

            // Generate options HTML
            let optionsHtml = "";
            q.options.forEach((opt, optIndex) => {
                optionsHtml += `<button class="option-btn" onclick="checkAnswer(this, ${qIndex}, ${optIndex})">${opt}</button>`;
            });

            card.innerHTML = `
                <div class="quiz-header">
                    <span class="exam-tag"><i class='bx bx-target-lock'></i> ${q.exam}</span>
                    <span class="topic-tag">${q.topic}</span>
                </div>
                <div class="question-text">
                    Q${qIndex + 1}. ${q.question}
                </div>
                <div class="options-grid" id="options-${qIndex}">
                    ${optionsHtml}
                </div>
                <div class="explanation-box" id="exp-${qIndex}">
                    <strong>Explanation:</strong><br>
                    ${q.explanation}
                </div>
            `;
            quizContainer.appendChild(card);
        });
    }

    renderQuiz(pyqData);

    // Make checkAnswer globally accessible for the inline onclick handlers
    window.checkAnswer = function(btn, qIndex, selectedOptIndex) {
        const questionData = pyqData[qIndex];
        const optionsGrid = document.getElementById(`options-${qIndex}`);
        const buttons = optionsGrid.getElementsByClassName("option-btn");
        const explanationBox = document.getElementById(`exp-${qIndex}`);

        // Disable all buttons so user can't click twice
        for (let b of buttons) {
            b.disabled = true;
        }

        // Check if correct
        if (selectedOptIndex === questionData.correctOption) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("wrong");
            // Highlight the correct one
            buttons[questionData.correctOption].classList.add("correct");
        }

        // Show explanation
        explanationBox.classList.add("show");

        // Update main dashboard progress (Daily Target)
        let currentDone = parseInt(localStorage.getItem("daily_questions")) || 0;
        localStorage.setItem("daily_questions", currentDone + 1);
    };
});
