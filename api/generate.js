const Replicate = require("replicate");

export default async function handler(req, res) {
  try {
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    const { prompt } = JSON.parse(req.body);

    const prediction = await replicate.predictions.create({
      model: "black-forest-labs/flux-schnell",
      input: { prompt: prompt },
    });

    res.status(200).json({ id: prediction.id });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: error.message });
  }
}
