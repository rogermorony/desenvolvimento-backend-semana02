const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>

            <p>Bem-vindo ao catálogo de heróis da Marvel e DC!</p>

            <h2>Empresas</h2>
            <a href="/marvel">Marvel</a>
            <a href="/dc">DC</a>

            <hr>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Hulk">Hulk</a></li>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>
        </body>
        </html>
    `);
});


 // Rota Marvel
app.get('/marvel', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Marvel</title>
        </head>
        <body>
            <h1>Marvel</h1>

            <p>A Marvel é conhecida por seus super-heróis e histórias em quadrinhos.</p>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Hulk">Hulk</a></li>
            </ul>

            <a href="/">Voltar ao início</a>
        </body>
        </html>
    `);
});


// Rota DC
app.get('/dc', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>DC</title>
        </head>
        <body>
            <h1>DC</h1>

            <p>A DC é conhecida por personagens famosos dos quadrinhos e seus super-heróis.</p>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>

            <a href="/">Voltar ao início</a>
        </body>
        </html>
    `);
});


// Rota dos personagens
app.get('/personagem/:empresa/:nome', (req, res) => {
    const empresa = req.params.empresa;
    const nome = req.params.nome;

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Personagem</title>
        </head>
        <body>
            <h1>${nome}</h1>

            <p>Empresa: ${empresa}</p>
            <p>Personagem: ${nome}</p>

            <a href="/">Voltar ao início</a>
        </body>
        </html>
    `);
});


// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});