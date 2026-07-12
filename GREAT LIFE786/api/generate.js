export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { prompt, tool } = req.body;

  // یہاں آپ کا اصل AI لاجک آئے گا
  // فی الحال یہ آپ کو کنفرمیشن دے رہا ہے کہ ریکوسٹ مل گئی ہے
  res.status(200).json({ 
    message: `Great Life 786 AI Suite has received your ${tool} request.`,
    details: `Prompt: "${prompt}" is being processed.`
  });
}
