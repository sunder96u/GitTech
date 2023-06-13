const { Company } = require('../models')

const getCompany = async (req, res) => {
    const { id } = req.params
    const company = await Company.find({ members: id})
    res.json(company)
}

module.exports = {
    getCompany
}