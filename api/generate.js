import Replicate from "replicate";
export default async function handler(req, res) {
  const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });
  try {
    const { prompt } = JSON.parse(req.body);
    const output = await replicate.run("black-forest-labs/flux-schnell", { input: { prompt } });
    res.status(200).json({ output });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
