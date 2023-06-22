var path = require('path')
const express = require('express')
const hbs = require('hbs')      
const app = express()
var requests = require('requests');


app.set('view engine', 'hbs');
// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

app.use(express.static('views/images'))

console.log(__dirname)

const partialsPath = path.join(__dirname , "partials")  
// const imagesPath = path.join(__dirname , "partials/images")  
hbs.registerPartials(partialsPath)
// hbs.registerPartials(imagesPath)









app.get("/" , (req , res)=>{
    res.render('index')
})

app.listen(80 , ()=>{
    console.log("server running at port 80");
})





