const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
})

const PORT = process.env.PORT || 5001 //process.env is for production
app.listen(PORT);
