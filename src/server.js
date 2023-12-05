const express = require('express');
const path = require('path');
const apiRoutes = require('./routes');
const create = require('./controllers/create');

const app = express();
const PORT = 3001;

app.use(express.json());

//setting public files
const publicDir = path.join(__dirname, '.', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);

app.use(apiRoutes);
// app.post('/pets', create);

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});
