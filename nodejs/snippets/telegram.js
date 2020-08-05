const https = require('https');

sendTelegram("*bold text* \n nextline!");

// https://core.telegram.org/bots/api#markdownv2-style
function sendTelegram(message) {
    let encodedMessage = encodeURIComponent(message);
    let botId = 'bot54454312';
    let token = 'SDJSA28jskdj-SJDK83jdkj8JSDKJ8s';
    let chatId = '-28343277134';
    let url = `https://api.telegram.org/${botId}:${token}/sendMessage?chat_id=${chatId}&parse_mode=MarkdownV2&text=${encodedMessage}`;

    https.get(url, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            let jsonResponse = JSON.parse(data);
            if (!jsonResponse.ok) {
                console.log(jsonResponse);
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}