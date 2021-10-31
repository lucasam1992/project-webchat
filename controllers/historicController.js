const historicModel = require('../models/historicModel');

const getAll = async (_req, _res) => {
    const talkers = await historicModel.getAll();
    return talkers;
};

module.exports = {
    getAll,
};