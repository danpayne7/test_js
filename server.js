require("dotenv").config();

const express = require('express')
const app = express()
const PORT = process.env.PORT ;

app.use(express.json());

app.use((req,res,next) => {
  //logs every request
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next(); //pass to next handler (required)
});
 
app.get('/search', (req, res) => {
  const id = req.query.id;
  console.log(id);
  res.send(id);
});

app.get("/",(req,res) => {
  res.send('Hi')
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
