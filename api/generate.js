import Replicate from "replicate";

export default async function handler(req, res) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  try {
    const { prompt } = req.body;
    
    // فوری رسپانس کے لیے Prediction شروع کریں
    const prediction = await replicate.predictions.create({
      model: "black-forest-labs/flux-schnell",
      input: { prompt: prompt }
    });

    res.status(200).json({ id: prediction.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
