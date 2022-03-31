const historicModel = require('../models/historicModel');

const getAll = async () => {
    const talkers = await historicModel.getAll();
    return talkers;
};

module.exports = {
    getAll,
};