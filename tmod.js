const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const request = require('request');

app.get('/versions', (req, res) => {
    request('https://api.github.com/repos/tommymyers/tmod/releases',
        {
            json: true,
            headers: {
                'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15",
                'Accept': 'application/vnd.github.v3+json'
            }
        }, (err, requestResponse, body) => {

        if (err) {
            console.log(err)
            res.send(err)
        }

        if (body.length > 0) {
            const latestVersion = body[0]
            res.send({
                latest: {
                    id: latestVersion.tag_name,
                    url: latestVersion.html_url
                }
            })
        } else {
            res.statusCode = 204
            res.send('no versions found')
        }

    });
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})