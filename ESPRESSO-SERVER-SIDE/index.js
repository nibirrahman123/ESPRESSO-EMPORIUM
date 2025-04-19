const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//  middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hiz8ocw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("coffeeDB");
    const coffeeCollection = database.collection("coffee");


    app.post('/coffee',async(req,res) => {
      const coffeeData = req.body;
      console.log(coffeeData)
      const result = await coffeeCollection.insertOne(coffeeData);
      res.send(result)
    })

    app.delete('/coffee/:id',async(req,res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await coffeeCollection.deleteOne(query);
      res.send(result)
    })

    app.get('/coffee',async(req,res) => {
      const cursor = await coffeeCollection.find().toArray()
      res.send(cursor)
    })



    app.patch('/coffee/:id',async(req,res) => {
      const id = req.params.id
      const body = req.body
      const query = {_id: new ObjectId(id)}
      const updatedField = {
        $set : {
          name : body.name,
          chef:body.chef
        }
      }
      const result = await coffeeCollection.updateOne(query,updatedField)
      res.send(result)
    })




    // app.get('/coffee', async (req, res) => {
    //   const result = await coffeeCollection.find().toArray()
    //   res.send(result)
    // })


    // app.post('/coffee', async (req, res) => {
    //   const coffeeData = req.body
    //   console.log(coffeeData)
    //   const result = await coffeeCollection.insertOne(coffeeData)
    //   res.send(result)
    // })

    // app.delete('/coffee/:name', async (req, res) => {
    //   const name = req.params.name
    //   console.log(name)
    //   const query = { name: name };
    //   const result = await coffeeCollection.deleteOne(query);
    //   res.send(result)
    // })


    // app.patch('/coffee/:id', async (req, res) => {
    //   const id = req.params.id
    //   const update = req.body
    //   console.log(id)
    //   const query = { _id: new ObjectId(id) }
      
    //   const updateDetails = {
    //     $set: {
    //       name:update.name,
    //       taste: 'kdiwilsieikilwieorjfowielaseiorf'
    //     }
    //   }
    //   const result = await coffeeCollection.updateOne(query, updateDetails)
    //   res.send(result)
    // })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('hello')
})





app.listen(port, () => {
  console.log('my server is running on port', port)
})