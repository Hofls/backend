const express = require("express");

// Warning! Express is able to serve only one request at a time (if it takes 10 seconds, all other requests have to wait)
// Bad workaround (return without waiting for results) - call async function without await, then res.send();
module.exports = {

    run: function() {
        const app = express();
        app.use(express.json());

        app.get("/", async (req, res) => {
            res.send("Try to send POST request");
        });

        app.post("/", async (req, res) => {
            res.send(req.body); // if body is empty, try to set "Content-Type: application/json" on client
        });

        app.listen(8080, () =>
            console.log("Server started successfully - http://localhost:8080")
        );

    }
}