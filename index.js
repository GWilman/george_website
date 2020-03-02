const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const { port } = require('./env');
const routes = require('./routes');
const customResponses = require('./lib/custom_responses');

// CORS config
const whitelist = ['http://localhost:3000', 'http://localhost:3002']; // add allowed domains
const corsOptions = {
  origin: function (origin, callback) {
    if (origin === undefined || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));

app.use(customResponses);
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
