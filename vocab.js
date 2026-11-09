document.addEventListener("DOMContentLoaded", () => {
    const vocabList = document.getElementById("vocab-list");
    
    // This is your Vocabulary Database. You can add as many words here as you want!
    const vocabData = [
        {
            id: 1,
            word: "Abate",
            pronunciation: "/əˈbeɪt/",
            partOfSpeech: "Verb",
            hindiMeaning: "कम होना (Kam hona)",
            englishMeaning: "To become less intense or widespread.",
            synonyms: "Decrease, Diminish, Subside",
            antonyms: "Intensify, Increase, Aggravate",
            example: "The heavy rain started to abate after an hour.",
            dailyUsage: "When your anger abates, we can talk calmly.",
            mnemonic: "A + Bate (weight) ➔ If you lose weight, your size ABATES (reduces).",
            examRelevance: "SSC CGL 2022, 2020"
        },
        {
            id: 2,
            word: "Cacophony",
            pronunciation: "/kəˈkɒfəni/",
            partOfSpeech: "Noun",
            hindiMeaning: "कोलाहल / बेसुरा शब्द (Kolahal)",
            englishMeaning: "A harsh, discordant mixture of sounds.",
            synonyms: "Noise, Clatter, Uproar",
            antonyms: "Harmony, Silence, Peace",
            example: "A cacophony of car horns woke me up.",
            dailyUsage: "The traffic outside created a constant cacophony.",
            mnemonic: "Caco (Kaka/Crow) + Phony (Phone) ➔ A crow on the phone makes a harsh noise.",
            examRelevance: "SSC CHSL 2021, MTS 2019"
        }
    ];

    // Function to generate the HTML for each word
    function renderVocab(data) {
        vocabList.innerHTML = ""; 
        data.forEach(item => {
            const card = document.createElement("div");
            card.className = "vocab-card";
            
            card.innerHTML = `
                <div class="vocab-header">
                    <div>
                        <div class="word-title">${item.word}</div>
                        <small style="color: var(--text-muted);">${item.pronunciation}</small>
                    </div>
                    <span class="pos-badge">${item.partOfSpeech}</span>
                </div>
                
                <div class="meaning-box">
                    <div class="hindi-meaning">${item.hindiMeaning}</div>
                    <div>${item.englishMeaning}</div>
                </div>

                <div class="syn-ant-grid">
                    <div><span style="color: #4caf50; font-weight: bold;">Synonyms:</span><br>${item.synonyms}</div>
                    <div><span style="color: #f44336; font-weight: bold;">Antonyms:</span><br>${item.antonyms}</div>
                </div>

                <div class="example-box">
                    <strong>Example:</strong> ${item.example}<br><br>
                    <strong>Daily Use:</strong> ${item.dailyUsage}
                </div>

                <div class="mnemonic-box">
                    <i class='bx bx-bulb' style='color:#f59e0b'></i> <strong>Trick:</strong> ${item.mnemonic}
                </div>

                <div>
                    <span class="exam-tag"><i class='bx bx-target-lock'></i> ${item.examRelevance}</span>
                </div>
                
                <button class="learn-btn" onclick="markAsLearned(this)">
                    <i class='bx bx-check-circle'></i> Mark as Learned
                </button>
            `;
            
            vocabList.appendChild(card);
        });
    }

    // Show words on the screen
    renderVocab(vocabData);
});

// Function when you click "Mark as Learned"
window.markAsLearned = function(button) {
    if (button.classList.contains("learned")) return; // Stop if already clicked
    
    // Change button appearance
    button.classList.add("learned");
    button.innerHTML = "<i class='bx bx-check-double'></i> Learned!";
    
    // Update the tracker in your browser's local storage
    let currentVocab = parseInt(localStorage.getItem("total_vocab")) || 0;
    localStorage.setItem("total_vocab", currentVocab + 1);
};
