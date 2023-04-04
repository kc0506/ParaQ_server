import { Router } from "express";
import { Parasite } from "../models/Parasite";

const router = Router();

router.get('/all', async (req, res) => {
    try {
        const data = await Parasite.find({});
        res.json({ parasites: data, error: false });
        console.log("data: " + data);
    } catch (e) {
        res.json({ parasites: [], error: true });
    }
})

export default router;