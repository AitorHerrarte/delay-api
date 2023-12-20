const express = require('express');
const app = express();

app.get('/api/sleep/:seconds', (req, res) => {
  const { seconds } = req.params;
  const sleepTime = parseInt(seconds, 10) * 1000; 

  setTimeout(() => {
    res.send(200);
  }, sleepTime);
});

const PORT = 3005; 
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
