
import express from "express"

const hostName: string = "localhost"
const portNumber: number = 6969

const app = express()

app.get("/", (request: express.Request, response: express.Response) => {
    response.status(200);
    response.send(`<h1>Method GET</h1>`)
})


app.listen(portNumber, hostName, () => {
    console.log("Welcome to Express Server")
    console.log(`http://${hostName}:${portNumber}`)
})