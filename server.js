const express = require('express')
const path = require('path')
const app = express()

// data 

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

//end of data 

/// midleman 
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

app.get('/buy/:name', function(request, response){
    let name = request.params.name
    //let inventory
  
    for(let index of store ){
        if(name == index.name){
           if (index.inventory>0){
            index.inventory--
            response.send({"inventory":`${index.inventory}`,"name":`${index.name}`,"price":`${index.price}`})
           }
           else if (index.inventory <= 0){
            response.send({"inventory":`0`})
           }
        }
    }

  
    response.send({"inventory":`null`})
})


//port listner
const port = 3001
app.listen(port, function(){
    console.log(`Server is up and running smoothly ${port}`)
})