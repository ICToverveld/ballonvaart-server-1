const mongoose = require("mongoose");

const connectionString = "mongodb+srv://" + 
                         `${process.env.DB_USER}:${process.env.DB_PASSWORD}` +
                         `@cluster0-kruq0.mongodb.net/${process.env.DB_NAME}` + 
                         "?retryWrites=true&w=majority"


mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connectie met MongoDB gelegd.");
}).catch(err => {
  console.log(err.stack);
  process.exit(1);
});