"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors = require("cors");
const express = require("express");
const api_1 = require("../routers/api");
const middleware_1 = require("../middleware");
const app = express();
exports.app = app;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.ORIGIN,
}));
app.use(middleware_1.checkAuth);
app.use("/", api_1.router);
//# sourceMappingURL=express.js.map