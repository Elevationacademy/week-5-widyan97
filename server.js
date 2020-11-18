const express = require('express')
const path = require('path')
const app = express()


const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

 


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get('/priceCheck/:name', function(request, response){
    let name = request.params.name
    for(let index of store ){
        if(name == index.name){
            response.send({"price":`${index.price}`})
        }
    }

    response.send({"price":`null`})
})

const port = 3001
app.listen(port, function(){
    console.log(`Server is up and running smoothly ${port}`)
})
