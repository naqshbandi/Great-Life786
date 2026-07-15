const Replicate = require("replicate");

export default async function handler(req, res) {
  try {
    const { prompt } = JSON.parse(req.body);
    const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });

    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      { input: { prompt: prompt } }
    );

    res.status(200).json({ output: output });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
