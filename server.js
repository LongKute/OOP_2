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

const registerUrl = "json/register.json";
const cartsUrl = "json/carts.json";
const submitUrl = "json/submitUsers.json"
const stateUrl = "json/state.json"

// const filePathCart = path.join(__dirname, "carts.json");

const port = 3006;
const SECRET_KEY = "my_secret_key";
// use library
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running with port: ${port}`);
});
// message bug
function debug(message) {
  return console.log(message);
}
  // read file.json
function readFilePath(url) {
  const filePath = path.join(__dirname, url);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
// function write File.json
function writeFilePath(url, element) {
  const filePath = path.join(__dirname, url);
  return fs.writeFileSync(filePath, JSON.stringify(element, null, 2));
}
  function state(url) {
    const currentState = readFilePath(url);
    app.get("/state", (req, res) => {
      res.json(currentState);
    });
    app.post("/state", (req, res) => {
      const { newState } = req.body;

      if (typeof newState === "undefined") {
        return res.status(400).json({ message: "Invalid state!" });
      }
      currentState.state = newState;
      writeFilePath(url, currentState);
      res.json({ message: "State updated successfully!", state: currentState });
    });
  }
function submit(url) {
  //get data in submitUsers.json
 const submits = readFilePath(url)
 //post
  app.post("/submit", (req, res) => {
    const {name, email} = req.body
    const submitUser ={name, email}
    submits.submit.push(submitUser)
    writeFilePath(url, submits)
    res.status(201).json({status: 201, message: submits});
  }) 
}
function handleUsers(url) {
  // req == "request" // res == "response"
  const users = readFilePath(url);
  //  Get file users.json
  app.get("/users", (req, res) => {
    res.status(200).json(users);
  });

  app.post("/users", (req, res) => {
    const id = users.data.length
      ? Math.max(...users.data.map((user) => user.id)) + 1
      : 1;
    const { name, email } = req.body;
    // if don't have @ reurn error message
    if (!email.includes("@")) {
      return res
        .status(400)
        .json({ message: "Your email is missing the @ sign." });
    }

    const newUser = { id, name, email };
    users.data.push(newUser);
    writeFilePath(url, users);
    res.status(201).json({status: 201});
  });

  app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.data.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found of delete" });
    }
    users.data.splice(userIndex, 1);
    writeFilePath(url,users);
    res.status(200).json({ message: "User deleted successfully" });
  });

  app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    const userIndex = users.data.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found for put" });
    }
    
    users.data[userIndex] = { ...users.data[userIndex], name: name, email: email };
    writeFilePath(url, users);
    res.status(200).json(users.data[userIndex]);
  });
}
function handleCarts(url) {
  // enter recording in user.json
  const carts = readFilePath(url);
  app.get("/carts", (req, res) => {
    res.status(200).json(carts);
  });
  app.post("/carts", (req, res) => {
    const id = carts.bill[0].items.length
      ? Math.max(...carts.bill[0].items.map((product) => product.id)) + 1
      : 1;

    const { name, price, quantity } = req.body;

    const newProduct = { id, name, quantity, price };
    try {
      carts.bill[0].total = 0;
      if (carts.bill && carts.bill[0] && carts.bill[0].items) {
        carts.bill[0].items.push(newProduct);
        carts.bill[0].items.forEach((element) => {
        
          carts.bill[0].total += element.quantity * element.price;
        });
        writeFilePath(url, carts);
        res.status(200).json({
          message: "Product added successfully!",
          product: newProduct,
        });
      } else {
        res.status(500).json({ message: "Invalid JSON structure!" });
      }
    } catch (error) {
      console.error("Error while updating carts:", error);
      res
        .status(500)
        .json({ message: "An error occurred while processing the request." });
    }
  });
  app.delete("/carts/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = carts.bill[0].items.findIndex((product) => product.id === productId)
    if (productIndex === -1) {
      return res.status(404).json({ error: "Product not found of delete" });
    }
    carts.bill[0].total = 0;
    carts.bill[0].items.splice(productIndex, 1);
    carts.bill[0].items.forEach((element) => {
      carts.bill[0].total += element.quantity * element.price;
    });
    writeFilePath(url, carts);
    res.status(200).json({ message: "Product deleted successfully" });
  });
  app.put("/carts/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const {name, quantity, price} = req.body
    const productIndex = carts.bill[0].items.findIndex((product) => product.id === productId)
    if (productIndex === -1) {
      return res.status(404).json({ error: "Product not found of put" });
    }
    carts.bill[productIndex] = { ...carts.bill[productIndex], name: name, quantity: quantity, price: price};
    writeFilePath(url, carts);
    res.status(200).json( carts.bill[productIndex] );
  })
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
    // check informaiton if it empty
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
function logOut() {
  app.post("/logout", (req, res) => {
    res.status(200).json({ message: "Logged out successfully!" });
  });
}


handleUsers(userUrl);
handleCarts(cartsUrl);
login(registerUrl);
register(registerUrl);
logOut()
submit(submitUrl)
// console.log(cartsUrl);
state(stateUrl)