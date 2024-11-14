// Chủ đề 6: Quản lý và sử dụng LocalStorage

// 16. (Liên quan câu 17) Tạo một lớp StorageService để quản lý lưu trữ dữ liệu người dùng trong localStorage và sessionStorage. Lớp này nên có các phương thức như save(), load(), và delete().
import elements from "../val.js";
//localStorage
class StorageService {
  constructor(storageType = "local") {
    this.storage = storageType === "local" ? localStorage : sessionStorage;
  }
  save(key, value) {
    const data = []
    if(elements.btn_register){
      elements.btn_register.onclick = () =>{
        data.push(value)
          const user = JSON.stringify(data)
          this.storage.setItem(key, user);
      }
    }
       if(elements.btn_login){
        elements.btn_login.onclick = () =>{
          data.push(value)
            const login = JSON.stringify(data)
            this.storage.setItem(key, login);
        }
       }    
           
  }
  load(key) {
    try {
      const data = this.storage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error loading data:", error);
      return null;
    }
  }
  delete(key) {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }

  clear() {
    try {
      this.storage.clear();
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  }
}
const localStorageService = new StorageService("local");
export default StorageService