const express = require("express");
// const mongojs = require("mongojs");
const mongoose  = require("mongoose");
const logger = require("morgan");
const APIroutes = require("./routes/apiRoutes");
const HTMLroutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    }
    )


    app.use(APIroutes);
    app.use(HTMLroutes);

    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}!`);
        });
