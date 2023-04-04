"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllParasites = exports.Parasite = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dataKeys = {
    "學名": { type: String, required: true },
    "中文名": { type: String, required: true },
    "感染型": String,
    "寄生部位": String,
    "I.H.": String,
    "P.H.": String,
    "R.H.": String,
    "F.H.": String,
    "偶然宿主": String,
    "檢查方法": String,
    "治療": String,
};
const scehma = new mongoose_1.default.Schema(dataKeys, { collection: 'Parasites' });
const Parasite = mongoose_1.default.model("Parasite", scehma);
exports.Parasite = Parasite;
const getAllParasites = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Parasite.find({});
});
exports.getAllParasites = getAllParasites;
