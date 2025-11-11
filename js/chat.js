async function askAI(question) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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" // کلید API خود را وارد کنید
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",  // مدل GPT-3 را انتخاب کرده‌ایم
            messages: [{ role: "user", content: question }]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

const sendBtn = document.getElementById("send");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

sendBtn.onclick = async () => {
    const text = input.value.trim();
    if (!text) return;

    messages.innerHTML += "<div>👤: " + text + "</div>";

    const answer = await askAI(text);
    messages.innerHTML += "<div>🤖: " + answer + "</div>";

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
};
