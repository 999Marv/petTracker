const express = require('express');
const path = require('path');

const app = express();

const PORT = 3001;

app.use(express.json());

//setting public files
const publicDir = path.join(__dirname, '.', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);

app.get('/', (req, res) => {
  res.send('yo');
});

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});
