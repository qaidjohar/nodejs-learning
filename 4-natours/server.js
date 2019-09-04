const app = require('./app');

//Server Start
const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
