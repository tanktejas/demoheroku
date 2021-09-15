const express = require('express');
const exp = express();
const port = process.env.PORT || 3000;

exp.get('/', (req, res) => {
    res.send("hello from home side");
});

exp.listen(port, () => {
    console.log("success..");
})