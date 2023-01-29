import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import * as dotenv from 'dotenv';
import * as passport from 'passport';
import * as hpp from 'hpp';
import helmet from 'helmet';
// import { Request, Response, Next } from "express";

const app = express();
const prod :boolean = process.env.NODE_ENV === 'production'

if(prod){ // production runing?인가
    app.use(hpp());
    app.use(helmet());
    app.use(morgan("combined"))
    app.use(cors({
        origin: /nodebird\.com$/,
        credentials:true
    }))
}else{
    app.use(morgan("dev"))
    app.use(cors({
        origin : true,
        credentials : true,
    }))
}


app.use("/", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(expressSession({
    resave: false,
    saveUninitialized : false,
    secret: process.env.COOKIE_SECRET!, // 갚이 확실하지 않으면 ! 를 붙인데
    cookie : {
        httpOnly: true,
        secure: false, // https -> true
        // domain: prod ? '.nodebird.com' : undefined,
    }
}))

app.get('/', (req, res) => {
    res.send('react nodebird 백엔드 정상 동작')
})


app.use("", (req, res) => {
    res.send("404 에러")
})

app.listen(prod ? process.env.PORT : 8083, () => {
    console.log("server is running on ${process.env.PORT}")
})



