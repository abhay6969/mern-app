const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlacklistTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    expiresAt: {
        type: Date,
        default: Date.now,
        expires:86000
    }
});

module.exports = mongoose.model("blacklistToken", BlacklistTokenSchema);
