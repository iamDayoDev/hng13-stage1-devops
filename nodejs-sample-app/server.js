const express = require("express");
const app = express();
const port = 3000;

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({ 
        message: "NOVA-APP is healthy! ⭐", 
        timestamp: new Date().toLocaleString(),
        uptime: `${Math.floor(process.uptime())} seconds`
    });
});

// Main endpoint
app.get("/", (req, res) => {
    res.send("Hello from NOVA-APP deployed successfully on AWS with Bash Script and Nginx! 🚀");
});

app.listen(port, () => {
    console.log("NOVA-APP is running on port 3000");
});