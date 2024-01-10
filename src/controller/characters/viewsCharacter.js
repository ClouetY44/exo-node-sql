const list = async (req, res) => {
    res.render("../views/pages/character/character-list.ejs");
};

const detail = async (req, res) => {
    res.render("../views/pages/character/character-detail.ejs");
};

export {list, detail}