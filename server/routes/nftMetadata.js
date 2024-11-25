const express = require('express')
const nftMetadataController = require('../controllers/nftMetadataController')

const router = express.Router()

// get contract abi & tokenID info
router.get('/', nftMetadataController)

module.exports = router
