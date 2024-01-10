const list = async (req, res) => {
    res.render("../views/pages/character/list.ejs");
};

const detail = async (req, res) => {
    res.render("../views/pages/character/details.ejs");
};

export {list, detail}