export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "OPENAI_API_KEY not configured" });
  }

  try {
    const { system, prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        max_tokens: 1000,
        messages: [
          ...(system ? [{ role: "system", content: system }] : []),
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!resp.ok) {
      const err = await resp.text();
      return res.status(resp.status).json({ error: `OpenAI error: ${err}` });
    }

    const data = await resp.json();
    const insight =
      data.choices?.[0]?.message?.content || "Analysis unavailable.";

    return res.status(200).json({ insight });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Internal error" });
  }
}
