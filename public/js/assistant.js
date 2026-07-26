const askBtn = document.getElementById("askBtn");

if (askBtn) {
    askBtn.addEventListener("click", async () => {
        const question = document.getElementById("question").value;
        const responseBox = document.getElementById("response");

        if (!question.trim()) {
            responseBox.innerHTML = "Please enter a question.";
            return;
        }

        responseBox.innerHTML = "🤖 Thinking...";

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: question
                })
            });

            const data = await res.json();

            if (data.success) {
                responseBox.innerHTML = data.answer;
            } else {
                responseBox.innerHTML = data.error;
            }

        } catch (err) {
            responseBox.innerHTML = err.message;
        }
    });
}