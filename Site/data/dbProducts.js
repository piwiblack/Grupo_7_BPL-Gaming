const fs = require('fs');
const path = require('path');

let dbProducts = JSON.parse(fs.readFileSync(path.join(__dirname, './products.json'), 'utf-8'));

module.exports= dbProducts;