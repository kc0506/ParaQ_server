import mongoose from "mongoose";

interface IParasite {
    "學名": string,
    "中文名": string,
    "感染型"?: string,
    "寄生部位"?: string,
    "I.H."?: string,
    "P.H."?: string,
    "R.H."?: string,
    "F.H."?: string,
    "偶然宿主"?: string,
    "檢查方法"?: string,
    "治療"?: string,
}

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
}

const scehma = new mongoose.Schema<IParasite>(dataKeys, { collection: 'Parasites' });
const Parasite = mongoose.model<IParasite>("Parasite", scehma);

const getAllParasites = async () => {
    return await Parasite.find({});
}


export { Parasite, getAllParasites };