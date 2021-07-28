require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3000;
const indexHtml = fs.readFileSync('build/index.html');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => res.end(indexHtml));
app.listen(port, () => console.log('express server is start on port ' + port));
// add '<base href="/">' to index.html