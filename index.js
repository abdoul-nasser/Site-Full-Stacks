// const express = require('express')
import express from "express";
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from "dotenv";

const app = express()
const port = 4000

dotenv.config();

const uri = process.env.STRING_URI;

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
    console.log("connexion reussi àla BD")
    // Send a ping to confirm a successful connection
    await client.db("blog").collection("post").command({ ping: 1 });
     console.log("Pinged your deployment. You successfully connected to MongoDB!", client.db);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




app.get('/', (_, res) => {
  res.send('Hello expression')
})

app.listen(port, () => {
  console.log(`Serveur demarrer avec succes 4000`)
})