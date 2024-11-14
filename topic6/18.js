// 18. (Liên quan câu 16, 17) Viết mã JavaScript sử dụng UserStorage để lưu thông tin đăng nhập người dùng vào localStorage khi họ đăng nhập, và tự động tải lại thông tin nếu người dùng làm mới trang.
import UserStorage from "./17.js";
const userStorage = new UserStorage("local");
import elements from "../val.js";


if (elements.btn_login) {
    document.addEventListener("DOMContentLoaded", ()=>{
       
        elements.btn_login.onclick = () => {
            const loginUser = {
                username: elements.username.value,
                email: elements.password.value,
              };
            
            userStorage.user("login", loginUser);
              
    }})
  
  }
