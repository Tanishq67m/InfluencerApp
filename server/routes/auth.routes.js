import express from "express";

const router = express.Router();

router.get('/twitter', (req, res) => {
  return res.json({ success: true, platform: "Twitter", token: "twitter_mock_token" });
});

router.get('/linkedin', (req, res) => {
  return res.json({ success: true, platform: "LinkedIn", token: "linkedin_mock_token" });
});

export default router;