//Trás as configurações de outra pasta; encapsular
const app = require(`./src/config/custom-express`)

app.listen(3000, function(){
  console.log(`Servidor rodando na porta 3000`); 
});



//trás o modulo http
/* var http = require('http');
//Cria servidor 
http.createServer(function(req,res) {
  let html = '';
  if (req.url == '/'){  
    html=`
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1> Teste </h1>
        </body>
      </html>
    `;
  }
  res.end(html)
}).listen(3000);//Escuta o servidor
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…'); */