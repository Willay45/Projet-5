require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(process.env.PORT || 8080, () =>
  console.log(`Server is running on port ${process.env.PORT || 8080}.`)
);
