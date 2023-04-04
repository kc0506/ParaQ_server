"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect_db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_defaults_1 = __importDefault(require("dotenv-defaults"));
const connect_db = () => {
    dotenv_defaults_1.default.config();
    const MONGO_URL = process.env.MONGO_URL;
    if (!MONGO_URL) {
        console.log("empty MONGO_URL!!");
        return;
    }
    mongoose_1.default.connect(MONGO_URL).then((res) => console.log("mongodb connection created"));
};
exports.connect_db = connect_db;
