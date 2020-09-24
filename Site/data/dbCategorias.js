const fs = require('fs');
const path = require('path');

let dbCategorias = JSON.parse(fs.readFileSync(path.join(__dirname, './categorias.json'), 'utf-8'));

module.exports= dbCategorias;