//get và create variable
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const app = express();
const crypto = require("crypto");
// file json
const userUrl = "json/users.json";
const loginUrl = "json/userLogin.json";
const registerUrl = "json/register.json";
const carts = "json/carts.json";

// const filePathCart = path.join(__dirname, "carts.json");

const port = 3006;
const SECRET_KEY = "my_secret_key";
// use library
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running with port: ${port}`);
});

function debug(message) {
  return console.log(message);
}
function readFilePath(url) {
  // read file and save in variable readUsers
  const filePath = path.join(__dirname, url);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
function writeFilePath(url, element) {
  // get user.json from server
  const filePath = path.join(__dirname, url);
  return fs.writeFileSync(filePath, JSON.stringify(element, null, 2));
}

function handleUsers(url) {
  // req == "request" // res == "response"
  const users = readFilePath(url);
  //  Get file users.json
  app.get("/users", (req, res) => {
    res.status(200).json(users);
  });

  app.post("/users", (req, res) => {
    const id = users.data.length ? Math.max(...users.data.map((user) => user.id)) + 1 : 1;
    const { name, email } = req.body;

    if (!email.includes("@")) {
      debug("Your email is missing the @ sign.");
      return res
        .status(400)
        .json({ message: "Your email is missing the @ sign." });
    }

    const newUser = { id, name, email };
    users.data.push(newUser);
    writeFilePath(url, users);
    res.status(201).json(newUser);
  });

  app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.data.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found of delete" });
    }
    users.data.splice(userIndex, 1);
    writeUser(users);
    res.status(200).json({ message: "User deleted successfully" });
  });

  app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.data.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found for put" });
    }
    users.data[userIndex] = { ...users.data[userIndex], ...req.body };
    writeUser(users);
    res.status(200).json(users.users[userIndex]);
  });
}
function handleCarts(url) {
  // enter recording in user.json
  const carts = readFilePath(url);
  //  Get file carts.json
  carts.bill.forEach((element) => {
    let totalPrice = 0;
    element.items.forEach((item) => {
      item.total = item.quantity *= item.price;
      totalPrice += item.total;
    });
    console.log((element.total = totalPrice));
  });

  app.get("/carts", (req, res) => {
    res.status(200).json(carts);
  });
  app.post("/carts", (req, res) => {
    const { product, price, quantity } = req.body;
    if (!product || !price || !quantity) {
      return res
        .status(400)
        .json({ message: "Please fill in all information!" });
    }
    carts.bill.push() 
    writeFilePath(url, carts.bill)
    res.status(200).json(bill)
  });
   
}
// read file and save in variable readUsers

function hashPassword(password, salt) {
  // Generate password hashes with salt
  return crypto.pbkdf2Sync(password, salt, 500, 32, "sha256").toString("hex");
}

// create salt random
function generateSalt() {
  return crypto.randomBytes(16).toString("hex");
}
// register
function register(urlJson) {
  app.post("/register", (req, res) => {
    const { username, email, password, re_password } = req.body;
    const registerUser = readFilePath(urlJson);
    // Kiểm tra thông tin
    if (!username || !email || !password || !re_password) {
      return res
        .status(400)
        .json({ message: "Please fill in all information!" });
    }

    if (registerUser.users.find((user) => user.username === username)) {
      return res.status(400).json({ message: "Account name already exists!" });
    }

    if (password !== re_password) {
      return res.status(400).json({
        message: "Password and authentication password do not match!",
      });
    }
    // create salt and hash password
    const salt = generateSalt();
    const hashedPassword = hashPassword(password, salt);
    // push
    registerUser.users.push({
      username,
      email,
      salt,
      password: hashedPassword,
    });
    writeFilePath(urlJson, registerUser);
    // create token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.status(201).json({ message: "Registered successfully!", token });
  });
}

// login
function login(urlJson) {
  app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const loginUser = readFilePath(urlJson);
    // check information user in register.json

    const user = loginUser.users.find(
      (element) => element.username === username
    );
    if (!user) {
      return res
        .status(401)
        .json({ message: "Username or password is incorrect!" });
    }
    //Hash the input password with the saved salt
    const hashedPassword = hashPassword(password, user.salt);
    //Compare hashes
    if (hashedPassword !== user.password) {
      return res.status(401).json({ message: "1" });
    }
    // create token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ message: "Log in successfully!", token: token });
  });
}

// handleUsers(userUrl);
handleCarts(carts);
// login(registerUrl);
// register(registerUrl);
