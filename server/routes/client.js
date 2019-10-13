const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('reached');
  res.sendFile(path.join(path.resolve(__dirname, '../../client', 'dist', 'index.html')));
});

module.exports = router;
