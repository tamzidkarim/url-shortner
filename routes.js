const ShortUrl = require('./models/shortUrl');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render('index', { shortUrls: shortUrls });
});

router.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect('/');
});

router.get('/:shortUrl', async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
    if (shortUrl == null) {
      res.sendStatus(404);
    }
    shortUrl.click++;
    shortUrl.save();

    res.redirect(shortUrl.full);
  } catch (err) {
    res.status(401).json({
      message: err
    });
  }
});

module.exports = router;
