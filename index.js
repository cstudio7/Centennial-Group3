const express = require('express');
const app = express();
const port = 3000;

// Add your server routes and middleware here
// For example:
 app.get('/', (req, res) => {
   res.send('Welcom to the G3clothing!');
 });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});