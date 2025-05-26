import express from 'express';
const router = express.Router();

router.post('/twitter', (req, res) => {
  const { content } = req.body;
  console.log(`📤 Posting to Twitter: ${content}`);
  return res.json({ success: true, message: "Posted to Twitter!" });
});

router.post('/linkedin', (req, res) => {
  const { content } = req.body;
  console.log(`📤 Posting to LinkedIn: ${content}`);
  return res.json({ success: true, message: "Posted to LinkedIn!" });
});

export default router;
