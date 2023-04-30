const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mongo-fadly:nAyuGLHkZgMOopqL@cluster0.yl1btil.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
export const clients = () => {client.connect(err => {
  return client.db("dashboard")
  // perform actions on the collection object
})}
