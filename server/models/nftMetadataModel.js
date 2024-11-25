const mongoose = require('mongoose')
const { Schema } = mongoose

const NftMetadataSchema = new Schema({
    tokenURI: {
        type: String,
        unique: true,
    },
    tokenId: {
        type: Number,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('NftMetadata', NftMetadataSchema)
