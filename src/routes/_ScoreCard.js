import { Router } from "express";
import ScoreCard from "../models/_ScoreCard.js";
import { deleteDB, addScoreCard, queryScoreCards } from "../models/_ScoreCard.js";

const router = Router();
router.delete('/cards', (req, res) => {
    deleteDB().then(() => {
        res.json({ message: "Database cleared" });
    }).catch((e) => {
        res.status(500).send({ error: e });
    })
});
router.post('/card', async (req, res) => {
    try {
        res.json(await addScoreCard(req.body));
    } catch (error) {
        res.json({ message: `Adding/Updating failed` });
        console.error(error);
    }
});
router.get('/cards', async (req, res) => {
    try {
        res.json(await queryScoreCards(req.query));
    } catch (error) {
        res.json({ message: `Querying failed` });
        console.error(error)
    }
});

export default router;