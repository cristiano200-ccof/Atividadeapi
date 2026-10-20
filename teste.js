 const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority"

const client = new MongoClient(uri);



async function run() {
  try {
   await client.connect();
   await client.db("admin").command({ ping: 1 });
   console.log("Connected successfully to server");
   } finally {
  
   await client.close();
   }
   }
 run().catch(console.dir);