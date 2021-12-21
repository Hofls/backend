const express = require("express");

module.exports = {

    run: function() {
        const app = express();

        app.get("/", (req, res) => {
            res.send("Now try to send POST request");
        });

        app.post("/", (req, res) => {
            res.send("Let's go!");
        });

        app.listen(8080, () =>
            console.log("Server started successfully - http://localhost:8080")
        );

    }
}