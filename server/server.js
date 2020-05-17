const path = require('path');
const express = require('express');
const app = express();
const servePath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(servePath));

app.get('*', (req, res) => {
    res.sendFile(servePath, 'index');
})

app.listen(port, () => {
    console.log('Server is up!')
})