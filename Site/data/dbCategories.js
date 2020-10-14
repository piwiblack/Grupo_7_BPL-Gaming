const fs = require('fs');
const path = require('path');

let dbCategories = JSON.parse(fs.readFileSync(path.join(__dirname, './categories.json'), 'utf-8'));

module.exports= dbCategories;