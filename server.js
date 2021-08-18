// importar express
const express = require('express');
// Iniciar express
const app = express();
// nome da pasta no dist que será feito o build
const appName = 'tecnicas-avancadas-angular8'
// local onde o build irá gerar os arquivos
const outputPath = `${__dirname}/dist/${appName}`;

// seta o diretório de build para servir o conteúdo angular
app.use(express.static(outputPath));
// redirecionar qualquer requisição para o index.html
app.get('/*', (req, res) =>{
    res.sendFile(`${outputPath}/index.html`);
});
// ouvir a porta que o heroku disponibilizar
app.listen(process.env.PORT);


