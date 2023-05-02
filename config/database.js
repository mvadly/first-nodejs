const { MongoClient, ServerApiVersion } = require("mongodb");

const mdb = async () => {
  const uri = process.env.MONGODB_URI;
  console.log(uri)
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  return client.db("dashboard");
};

module.exports = mdb;
