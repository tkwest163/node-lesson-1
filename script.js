import express from "express";
import router from "./routes.js";
import bodyParser from "body-parser";
import { sequelize } from "./db/index.js";

const app = express();

const port = 3008;

sequelize.sync()
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
});


app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}, have a nice day!`)
});

// below says just use bodyParser to convert the body to json when receiving a post request
app.use(bodyParser.json());

app.use("/api/cowboybebop", router);