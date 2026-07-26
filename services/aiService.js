require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});


async function askAI(message) {


const prompt = `

You are a DevOps AI Assistant.

You only answer questions about:

- Kubernetes
- Docker
- AWS
- Linux
- Terraform
- GitHub Actions
- Jenkins
- Prometheus
- Grafana
- Helm
- ArgoCD


User Question:

${message}

`;


const response = await ai.models.generateContent({

    model: process.env.MODEL || "gemini-2.5-flash",

    contents: prompt,

});


return response.text;

}


module.exports = {
    askAI
};