const app = require('./app');
const { PORT } = require('./config.js');

app.listen(PORT, () => {
  console.log(`process started at http://localhost:${PORT}`);
});