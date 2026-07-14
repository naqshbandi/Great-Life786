import Replicate from "replicate";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { prompt } = req.body;
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  try {
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      { input: { prompt: prompt } }
    );
    res.status(200).json({ message: output });
  } catch (error) {
    res.status(500).json({ message: 'Server connection failed' });
  }
}
