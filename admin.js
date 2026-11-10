// Check Login Credentials
function checkLogin() {
    const user = document.getElementById("admin-user").value;
    const pass = document.getElementById("admin-pass").value;
    const errorMsg = document.getElementById("login-error");

    // This is a simple frontend check (Not secure for real production, but perfect for Phase 1 UI)
    if (user === "sahil" && pass === "admin123") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-dashboard").style.display = "block";
    } else {
        errorMsg.style.display = "block";
    }
}

// Simulate AI Question Generation
function generateQuestions() {
    const btn = document.querySelector(".learn-btn[onclick='generateQuestions()']");
    btn.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> AI is analysing source...";
    btn.style.backgroundColor = "#ff9800"; // Warning color for processing
    
    // Simulate a 3-second delay, then show a message
    setTimeout(() => {
        alert("Phase 1: Source uploaded successfully! \n\nNote: To actually generate questions automatically, we will need to connect a Backend Server and an AI API (like Gemini) in Phase 2.");
        btn.innerHTML = "<i class='bx bx-check'></i> Questions Sent to App";
        btn.style.backgroundColor = "#4caf50"; // Success color
    }, 3000);
}
