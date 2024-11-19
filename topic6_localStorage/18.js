import UserStorage from "./17.js";
import elements from "../val.js";

const userStorage = new UserStorage("local");


function buttonRegister() {
  if (elements.btn_register) {
    elements.btn_register.onclick = async () => {
      const newUser = {
        username: elements.register_username.value,
        email: elements.register_email.value,
        password: elements.register_password.value,
        re_password: elements.register_confirm_password.value,
      };

      if (newUser.password !== newUser.re_password) {
        console.warn("Passwords do not match!");
        return;
      }

      try {
        const response = await fetch('http://localhost:3006/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        });

        const result = await response.json();
        alert(result.message);

        if (response.ok) {
          localStorage.setItem('Register', result.token);
          window.location.href = "../html/login.html"; 
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    };
  }
}


function buttonLogin() {
  if (elements.btn_login) {
    elements.btn_login.onclick = async () => {
      const loginUser = {
        username: elements.username.value,
        password: elements.password.value,
      };

      try {
        const response = await fetch('http://localhost:3006/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginUser),
        });

        const result = await response.json();
        alert(result.message);

        if (response.ok) {
          localStorage.setItem('Authen', result.token);
          // window.location.href = "access.html"; 
        } else {
          console.warn(result.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
  }
}
buttonRegister()
buttonLogin()
document.addEventListener("DOMContentLoaded", () => {
  const token = userStorage.load("Token");
  if (token) {
    console.log("User is already logged in:", token);
  }
});
