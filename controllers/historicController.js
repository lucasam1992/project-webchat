const historicModel = require('../models/historicModel');

const getAll = async () => {
    const talkers = await historicModel.getAll();
    return talkers;
};

const increaseHistoric = async (userInfo) => {
    const historics = await historicModel.increaseHistoric(userInfo);
    return historics;
};

module.exports = {
    getAll,
    increaseHistoric,
};