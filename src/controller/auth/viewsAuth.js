const login = async (req, res) => {
    res.render("../views/pages/auth/connection.ejs");
};

const register = async (req, res) => {
    res.render("../views/pages/auth/register.ejs")
}

export {login, register}