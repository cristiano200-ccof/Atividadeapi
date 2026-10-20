const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3020;

app.use(express.static('static'));


app.get('/v1/hello', (req, res) => {
  console.log("API Hello v1 foi chamada com sucesso!");
  res.json({ message: "Hello World" }); 
});



app.all('/v2/hello/:lang?', (req,res) => {
  const lang = req.params.lang || req.body.lang || 'en';

  let message = "";

    
     if (lang === 'pt-br' || lang === 'pt') {
      message = "Olá Mundo";
  } else if (lang === 'es') {
      message = "Hola Mundo";
  } else {
      message = "Hello World"; 
  }

  console.log(`[v2] API chamada no idioma: ${lang}`);
  res.json({ message: message });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

