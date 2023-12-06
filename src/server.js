const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = 3001;

app.use(express.json());

//setting public files
const publicDir = path.join(__dirname, '.', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});
