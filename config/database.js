const { MongoClient, ServerApiVersion } = require("mongodb");

const mdb = async () => {
  const uri =
    "mongodb+srv://mongo-fadly:Password123!!@cluster0.yl1btil.mongodb.net/?retryWrites=true&w=majority";
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  return {
    client: client,
    db: client.db("dashboard"),
  };
};

module.exports = mdb;
