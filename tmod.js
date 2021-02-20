const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/versions', ((req, res) => {
    const versions = {
        latest: '1.0.1',
        versions: [
            {
                id: "1.0.1",
                url: "https://google.com"
            }
        ]
    }
    res.send(versions)
}))

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})