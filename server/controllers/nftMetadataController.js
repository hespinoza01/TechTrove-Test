const nftMetadataService = require('../Services/nftMetadataService')
const { getContractAbi, getTokenURI } = require('../utils')

module.exports = async (req, res) => {
    const { tokenId, contractAddress } = req.query

    if (!tokenId) {
        res.status(400).json({
            success: false,
            error: `The 'TokenId' field is required`,
        })
        return
    }

    // TODO: Validate that contractAddress is a valid eth address
    if (!contractAddress) {
        res.status(400).json({
            success: false,
            error: `The 'contractAddress' field is required`,
        })
        return
    }

    const contractAbi = await getContractAbi(contractAddress)

    if (!contractAbi) {
        res.status(400).json({
            success: false,
            error: `ContractABI not available`,
        })
        return
    }

    const tokenURI = await getTokenURI(contractAddress, contractAbi, tokenId)

    await nftMetadataService(tokenId, tokenURI.tokenURI, tokenURI.ownerOf)

    res.status(200).json({
        success: true,
        address: contractAbi,
        token: tokenURI,
        abi: contractAbi,
    })
}
