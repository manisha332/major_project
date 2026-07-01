const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require(".db");
const app = express();

connectDB();

app.get("/", (req, res) => {
    res.send("Server Running");
});
app.use((req, res) => {
    res.status(404).json({message: "Route not found"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

