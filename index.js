const express = require('express')
const mongoose = require('mongoose');
const app = express()
const productRoute = require('./routes/product.route')

//middlewares
app.use(express.json())//entering data as json format
app.use(express.urlencoded({ extended: false })) //entering data as form-data

//routes
app.use('/api/products', productRoute)



app.get('/', (req, res) => {
    res.send('hello from node api server')
})

/*app.get('/api/products' ,async(req,res)=>{
    try{
           const products = await Product.find({})
           res.status(200).json(products)//200-success
    }
    catch(error){
        res.status(500).json({message:error.message})//500-internal server error
    }
})

//retreive the saved data
app.get('/api/products/:id' ,
})

//create a product(sending data to the database)
app.post('/api/products' ,async (req,res)=>{
    try{
           const product = await Product.create(req.body)
           res.status(200).json(product)
    }catch(error){
         res.status(500).json({message: error.message})
    }
})
*/



mongoose.connect('mongodb+srv://surajpmnr:AKlfnw2mPCPsJ4I1@cluster0.10y6jtc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected!')
        app.listen(3000, () => {
            console.log("app is listening on port 3000")
        })
    })
    .catch(() => {
        console.log("connection failed")
    });


/*
//udpate the data in the database

app.put('/api/products/:id' ,async(req,res)=>{
    try{
          const {id}  = req.params;
          const product = await Product.findByIdAndUpdate(id,req.body)

          if(!product){
            return res.status(404).json({message:"Product not found"})
          }

          const updatedProduct = await Product.findById(id);
          res.status(200).json(updatedProduct);

    }
    catch(error){
        res.status(500).json({message:error.message})
    }


})


//deleting an existing data


app.delete('/api/products/:id' ,async(req,res)=>{
    try{
          const {id}  = req.params;
          const product = await Product.findByIdAndDelete(id)

          if(!product){
            return res.status(404).json({message:"Product not found"})
          }

          res.status(200).json({message:'product deleted successfully'})

    }
    catch(error){
        res.status(500).json({message:error.message})
    }

    
})

*/