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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
