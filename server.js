const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/assets/coin-flip.gif', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/coin-flip.gif'));
})

app.get('/js/main.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'js/main.js'));
})

app.get('/api/flip', (req, res) => {
  // Randomize coin flip
  const random = Math.random();

  if(random < 0.5) {
    const objToJson = {
      "result": "Heads"
    }
    res.send(JSON.stringify(objToJson));
  } else {
    const objToJson = {
      "result": "Tails"
    }
    res.send(JSON.stringify(objToJson));
  }
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
