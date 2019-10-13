/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const routes = require('./routes')(app);

require('./db');
require('./config/passport');
const corsOptions = require('./config/cors');

const app = express();

// Route all requests for static files to public folder
app.use(express.static(path.resolve(__dirname, '../client', 'dist')));
app.use(bodyParser.json());
app.use(cors(corsOptions));
// Catchall unhandles errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

require('./routes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log('Listening on port 3000');
  console.log(process.env.port);
});
