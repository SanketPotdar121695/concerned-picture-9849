

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const { userRouter } = require("./routes/user.routes");
//middleware
app.use(express.json());

const blog = require("./routes/blog")
//mount
app.use("/api/v1", blog);
app.use("/users", userRouter)

const connectWithDb = require("./config/database");

connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})

app.get("/", (req,res) => {
    res.send(`<h1>This is my homePage</h1>`)
})