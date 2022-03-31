const connection = require('./connection');

const getAll = async () => {
    const db = await connection();
    const talk = await db.collection('messages').find({}).toArray();
    return talk;
};

const increaseHistoric = async (userInfo) => {
    const db = await connection();
    await db.collection('messages').insertOne({ userInfo });
};

module.exports = {
    getAll,
    increaseHistoric,
};