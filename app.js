document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Toggle Logic
    const themeBtn = document.getElementById("theme-toggle");
    const body = document.body;
    
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        themeBtn.innerHTML = "<i class='bx bx-sun'></i>";
    }

    // Toggle theme on button click
    themeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = "<i class='bx bx-sun'></i>";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = "<i class='bx bx-moon'></i>";
        }
    });

    // 2. Load Local Progress Data
    function loadProgressData() {
        // Fetch or default to 0
        let currentStreak = localStorage.getItem("learning_streak") || 0;
        let questionsDone = localStorage.getItem("daily_questions") || 0;
        let vocabLearned = localStorage.getItem("total_vocab") || 0;

        // Update Dashboard UI
        document.getElementById("streak-count").innerText = `${currentStreak} Days`;
        document.getElementById("questions-done").innerText = questionsDone;
        document.getElementById("vocab-learned").innerText = vocabLearned;
    }

    loadProgressData();
});

// Helper function to update progress from other pages (to be used later)
function updateDailyQuestions(count) {
    let current = parseInt(localStorage.getItem("daily_questions")) || 0;
    localStorage.setItem("daily_questions", current + count);
}
