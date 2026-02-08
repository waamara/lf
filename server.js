const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const postRoutes = require("./routes/PostRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("LF api is running");
});

app.use("/api/posts", postRoutes);

const PORT =  5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

});
