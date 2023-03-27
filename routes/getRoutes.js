const express = require("express");
const router = express.Router();
const main = require("../scrapeFunction/scraper");

router.post("/indeed", async (req, res) => {
  try {
    const {skill} = req.body;

    let scrp = await main(skill);
    return res.status(200).json({
         status: "success",
         list: scrp?.list || {},
         });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: `Server Error $err` });
  }
});

module.exports = router;
