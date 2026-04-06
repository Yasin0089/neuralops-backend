export async function generateProposal(clientData) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        {
          role: "user",
          content: `Create logistics AI proposal for ${clientData.name}`
        }
      ]
    })
  });

  const data = await response.json();

  return data.choices?.[0]?.message?.content || "No response";
}
