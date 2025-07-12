const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true })); // to read form data
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const router = require('./models/routers/router');
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
