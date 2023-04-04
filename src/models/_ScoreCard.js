import mongoose from "mongoose";

const ScoreCard = mongoose.model(
    "ScoreCard",
    new mongoose.Schema({
        name: String,
        subject: String,
        score: Number
    })
)

const deleteDB = async () => {
    try {
        await ScoreCard.deleteMany({});
    } catch (e) {
        throw new Error("Database deletion failed!");
    }
}

const addScoreCard = async ({ name, subject, score }) => {
    try {
        const card = await ScoreCard.findOne({ name, subject });
        if (!card) {
            const newScoreCard = new ScoreCard({ name, subject, score });
            return {
                message: `Adding (${name}, ${subject}, ${score})`,
                card: newScoreCard.save()
            };
        } else {
            card.score = score;
            return {
                message: `Updating (${name}, ${subject}, ${score})`,
                card: card.save()
            };
        }
    } catch (error) {
        throw new Error("Adding ScoreCard failed: " + error);
    }
}

const queryScoreCards = async ({ type, queryString }) => {
    try {
        const results = await ScoreCard.find({ [type]: queryString });
        if (!results.length) { return { messages: [`${type} (${queryString}) not found!`], count: 0}; }
        return {
            messages: results.map(
                (card) => `Found card with ${type}: (${card.name}, ${card.subject}, ${card.score})`
            ),
            count: results.length
        };
    } catch (error) {
        throw new Error('Querying failed: ' + error);
    }

}

export default ScoreCard;
export { deleteDB, addScoreCard, queryScoreCards };