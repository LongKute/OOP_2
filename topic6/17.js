import elements from "../val.js";
import StorageService from "./16.js";
// 17. (Liên quan câu 16) Tạo một lớp UserStorage kế thừa từ StorageService, để lưu và tải thông tin người dùng từ localStorage.



  
  class UserStorage extends StorageService{
      constructor(storageType = "local") {
          super(storageType)
      }
      user(key, value){
        super.save(key, value)
      }
  }

  const userStorage = new UserStorage("local");

  if (elements.btn_register) {
   
    elements.btn_register.onclick = () => {
      const newUser = {
        username: elements.register_username.value,
        email: elements.register_email.value,
        password: elements.register_password.value,
        re_password: elements.register_confirm_password.value
      };
      userStorage.user("user", newUser);
    };
  } 

export default UserStorage