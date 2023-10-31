module.exports = {

    getRequest: async function () {
        let response = await fetch("https://jsonplaceholder.typicode.com/users", {
            "body": null,
            "method": "GET"
        });

        let json = await response.json();
        console.log(json);
        return json;
    }

};
