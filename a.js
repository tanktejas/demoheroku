const express = require('express');
const exp = express();
const path = require('path');
// console.log(__dirname);
const path1 = path.join(__dirname, 'views/a.html');
// console.log(path1);  
// exp.use(express.static(path1)); 
// exp.set('view engine', 'ejs');
// exp.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 3000;

const path2 = path.join(__dirname, './views');

exp.use(express.static(path2));

exp.get('/', (req, res) => {
    res.sendFile(path1);
}); 
 
// exp.get('/b.html', (req, res) => {
//     res.sendFile(path2);
// });

exp.listen(port, () => {
    console.log("success..");
})