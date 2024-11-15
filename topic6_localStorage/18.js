import UserStorage from "./17.js";
import elements from "../val.js";

const userStorage = new UserStorage("local");

// Đăng ký người dùng
if (elements.btn_register) {
  elements.btn_register.onclick = () => {
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

    userStorage.saveUser("users", newUser);
  };
}

// Đăng nhập người dùng
if (elements.btn_login) {
  elements.btn_login.onclick = () => {
    const loginUser = {
      username: elements.username.value,
      password: elements.password.value,
    };

    const isValid = userStorage.validateLogin("users", loginUser);
    if (isValid) {
      console.log("Login successful!");
      userStorage.save("login", loginUser); // Lưu người dùng đã đăng nhập
    } else {
      console.warn("Invalid username or password!");
    }
  };
}

// Tự động tải lại thông tin người dùng sau khi làm mới trang
document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = userStorage.load("login");
  if (loggedInUser) {
    console.log("User is already logged in:", loggedInUser);
  }
});
