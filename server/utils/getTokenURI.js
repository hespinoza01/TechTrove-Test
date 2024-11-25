const { Web3 } = require('web3')
const axios = require('axios')
// const getIpfsFile = require('./getIpfsfile')

module.exports = async (contractAddress, contractAbi, tokenId) => {
    const web3URL = process.env.WEB3_URL
    const web3 = new Web3(web3URL)
    const contract = new web3.eth.Contract(contractAbi, contractAddress)
    const tokenURI = await contract.methods.tokenURI(tokenId).call()
    const ownerOf = await contract.methods.ownerOf(tokenId).call()

    return { tokenURI, ownerOf }
}
