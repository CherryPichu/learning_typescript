import * as express from 'express';
// import { Request, Response, Next } from "express";

const app = express();
const prod :boolean = process.env.NODE_ENV === 'production'

app.get('/', (req, res) => {
    res.send('react nodebird 백엔드 정상 동작')
})


app.use("", (req, res) => {
    res.send("404 에러")
})

app.listen(prod ? process.env.PORT : 8083, () => {
    console.log("server is running on ${process.env.PORT}")
})



