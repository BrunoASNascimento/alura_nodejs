const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');
//Mostra o caminho que a aplicação tem que tomar; get
module.exports = (app) => {
  app.get(`/`, function (req, resp) {
    //Função que diz o que vai ser enviado para o leitor
    resp.send(
      `
            <html>
              <head>
                <meta charset="utf-8">
              </head>
              <body>
                <h1> Teste </h1>
              </body>
            </html>
          `
    );
  });


  app.get('/livros', function (req, resp) {

    const livroDao = new LivroDao(db);
    livroDao.lista()
      .then(livros => resp.marko(
        require('../views/livros/lista/lista.marko'), {
          livros: livros
        }
      ))
      .catch(erro => console.log(erro));


  });
};