const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('123');
  console.log(path.resolve(__dirname, '../../client', 'dist', 'index.html'));
  res.sendFile(path.join(path.resolve(__dirname, '../../client', 'dist', 'index.html')));
});

module.exports = router;
