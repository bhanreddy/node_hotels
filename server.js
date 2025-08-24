const express = require('express')
const app = express()
const db = require('./db');
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to the Hotel")
})

const personRoutes = require('./Routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./Routes/menuItemRoutes')
app.use('/menu',menuRoutes)

app.listen(3000,()=>{
    console.log('listening to the port 3000')
});
