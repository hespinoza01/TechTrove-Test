const nftMetadataModel = require('../models/nftMetadataModel')

module.exports = async (tokenId, tokenURI, ownerAddress) => {
    try {
        const savedItem = await nftMetadataModel.findOne({ tokenURI: tokenURI })

        if (!savedItem) {
            const newItem = new nftMetadataModel({
                tokenId,
                tokenURI,
                owner: ownerAddress,
            })

            await newItem.save()
        }
    } catch (error) {
        console.log(error)
    }
}
