//get và create variable
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3006;
const filePathUser = path.join(__dirname, "users.json");
const filePathCart = path.join(__dirname, "carts.json");

// use library
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running with port: ${port}`);
})

function debug(message){
    return console.log(message)
}

function handleUsers () {
    // read file and save in variable readUsers
const readUsers = () => {
    return  JSON.parse(fs.readFileSync(filePathUser, "utf-8"))
  }
  // enter recording in user.json 
  const writeUser = (user) => {
      return fs.writeFileSync(filePathUser ,JSON.stringify(user, null, 2))
  }
  // get user.json from server
// req == "request" // res == "response" 
const users = readUsers()
//  Get file users.json
app.get("/users", (req, res) => {
    res.status(200).json(users)
})

app.post("/users", (req, res) => {
    const id = users.data.length ? Math.max(...users.data.map(user => user.id)) + 1 : 1;
    const { name, email } = req.body;

    if (!email.includes("@")) {
        debug("Your email is missing the @ sign.")
        return res.status(400).json({ message: "Your email is missing the @ sign." });
    } 
    
    const newUser = { id, name, email };
    users.data.push(newUser);
    writeUser(users);
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
function handleCarts(){
    const readCart = () => {
        return  JSON.parse(fs.readFileSync(filePathCart, "utf-8"))
      }
      // enter recording in user.json 
      const writeCart = (product) => {
          return fs.writeFileSync(filePathCart ,JSON.stringify(user, null, 2))
      }
      const carts = readCart()
    //  Get file carts.json
    app.get("/carts", (req, res) => {
        res.status(200).json(carts)
    })
    app.post("/carts", (req, res) => {
        
    })
}
// read file and save in variable readUsers

handleUsers()
handleCarts()