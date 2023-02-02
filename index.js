require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const router = require('./routes');

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`));
