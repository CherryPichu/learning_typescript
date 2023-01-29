"use strict";
exports.__esModule = true;
const cookieParser = require("cookie-parser");
var express = require("express");
const morgan = require("morgan");
// import { Request, Response, Next } from "express";
var app = express();
var prod = process.env.NODE_ENV === 'production';




app.get('/', function (req, res) {
    res.send('react nodebird 백엔드 정상 동작');
});
app.use("", function (req, res) {
    res.send("404 에러");
});
app.listen(prod ? process.env.PORT : 8083, function () {
    console.log("server is running on ${process.env.PORT}");
});
