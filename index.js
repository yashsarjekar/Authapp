const express = require('express');
const cookie_parser = require('cookie-parser');
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const dbConfig = require("./config/dbConfig");

app = express()
app.use(express.json());
app.use(cookie_parser());

const port = 3000;
const hostname = '0.0.0.0';
// Mongodb url + db
mongoose.connect(
    `mongodb+srv://${dbConfig.mongodb.username}:${dbConfig.mongodb.password}@${dbConfig.mongodb
.hostname}/${dbConfig.mongodb.database_name}`
);
app.use(userRoutes);
app.listen(port, hostname, function listening() {
    console.log("Listening on port 3000")
})