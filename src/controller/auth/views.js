import bcrypt from "bcrypt";
import Query from "../../model/Query.js";

const login = async (req, res) => {
  res.render("../views/pages/auth/connection.ejs");
};

const register = async (req, res) => {
  res.render("../views/pages/auth/register.ejs");
};

const dashboard = async (req, res) => {
  res.render("../views/pages/dashboard/dashboard.ejs");
};

const addUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const query = "SELECT user_name FROM user WHERE user_name = ?";
    const [existingUser] = await Query.runWithParams(query, [username]);

    // if (!existingUser.length){ on inverse la condition
    if (existingUser.length) {
      console.log("l'utilisateur existe déja");
      return res.render("../views/pages/auth/register.ejs");
    }
    const hash = await bcrypt.hash(password, 14);
    const insert = "INSERT INTO user (user_name, password) VALUES (?,?)";
    const newUser = await Query.runWithParams(insert, [username, hash]);

    res.render("../views/pages/auth/connection.ejs");
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT user_name, password FROM user WHERE user_name = ?";
  try {
    const [existingUser] = await Query.runWithParams(query, [username]);
    if (existingUser.length === 1) {
      const hashPassword = existingUser[0].password;
      const samePass = await bcrypt.compare(password, hashPassword);
      if (samePass) {
        req.session.username = req.body.username;
        return res.render("../views/pages/dashboard/dashboard.ejs");
      }
    }
    console.log("erreur sur les identifiants de connexion");
    res.render("../views/pages/auth/connection.ejs");
  } catch {
    console.log("erreur sur les identifiants de connexion");
    res.render("../views/pages/auth/connection.ejs");
  }
};

const logout = async (req, res) => {
  req.session.destroy();
  res.clearCookie("connect.sid");
  return res.render("../views/pages/home.ejs");
};

export { login, register, addUser, loginUser, logout, dashboard };
