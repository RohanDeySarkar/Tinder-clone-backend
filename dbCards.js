import mongoose from 'mongoose';

const cardSchema = mongoose.Schema(
    {
        name: String,
        imgUrl: String
    }
)

// Collection name -> cards
export default mongoose.model("cards", cardSchema);