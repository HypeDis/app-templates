const express = require('express');
const router = express.Router();

// import api routes here

router.get('/', (req, res) => {
  res.status(200).send('/api route working');
});

module.exports = router;
