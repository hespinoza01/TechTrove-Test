const axios = require('axios')
const { Web3 } = require('web3')

const getContractAbi = async contractAddress => {
    try {
        const apikey = process.env.ETHERSCAN_APIKEY
        const web3URL = process.env.WEB3_URL
        const web3 = new Web3(web3URL)
        const chainid = await web3.eth.getChainId()
        console.log(chainid)
        const url = `https://api-sepolia.etherscan.io/api?chainid=${chainid}&module=contract&action=getabi&address=${contractAddress}&apikey=${apikey}`
        const response = await axios.get(url)

        console.log(response.data)

        const abi = JSON.parse(response.data.result)

        return abi
    } catch (err) {
        console.log(err)
        return null
    }
}

module.exports = getContractAbi
