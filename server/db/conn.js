const { MongoClient } = require("mongodb");
const Db = process.env.REACT_APP_MONGO_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function () {
    return new Promise((resolve, reject) => {
      client.connect()
        .then((db) => {
          // Verify we got a good "db" object
          if (db) {
            _db = db.db("employees");
            console.log("Successfully connected to MongoDB.");
            resolve();
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getDb: function () {
    return _db;
  },
};