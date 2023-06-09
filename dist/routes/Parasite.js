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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Parasite_1 = require("../models/Parasite");
const router = (0, express_1.Router)();
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Parasite_1.Parasite.find({});
        res.json({ parasites: data, error: false });
        console.log("data: " + data);
    }
    catch (e) {
        res.json({ parasites: [], error: true });
    }
}));
exports.default = router;
