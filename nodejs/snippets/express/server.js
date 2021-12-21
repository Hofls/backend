const express = require("express");

module.exports = {

    run: function() {
        const app = express();
        app.use(express.json());

        app.get("/", (req, res) => {
            res.send("Try to send POST request");
        });

        app.post("/", (req, res) => {
            res.send(req.body); // if body is empty, try to set "Content-Type: application/json" on client
        });

        app.listen(8080, () =>
            console.log("Server started successfully - http://localhost:8080")
        );

    }
}