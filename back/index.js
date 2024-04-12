const express  = require("express");
const cors = require('cors');

const app = express(); 
app.use(express.json());

const user = require('./ROUTES/user.controller.js')

app.listen(3000); 





app.use('/usuario' , user); 





app.get('/' , (req , res) => {
    res.send(
        'Hola mundo...'
    )
})