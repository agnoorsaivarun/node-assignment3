const fs = require("fs")
const http = require("http")
const server = http.createServer((req, res) => {
    fs.writeFileSync("index.html",`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> Hello World </h1>
        <p> This is Varun...</p>
    </body>
    </html>`,(e)={})
    fs.readFile("index.html", { encoding: "utf-8" }, (e, data) => {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data)
        res.end()
    })
})
server.listen(5000, () => { console.log("this server is at 5000") })