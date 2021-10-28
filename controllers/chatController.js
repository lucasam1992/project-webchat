const initialPageChat = async (req, res) => {
    res.status(200).render(`${__dirname}/views/index.ejs`);
};

module.exports = {
    initialPageChat,
};