// Chủ đề 6: Quản lý và sử dụng LocalStorage

// 16. (Liên quan câu 17) Tạo một lớp StorageService để quản lý lưu trữ dữ liệu người dùng trong localStorage và sessionStorage. Lớp này nên có các phương thức như save(), load(), và delete().
// 17. (Liên quan câu 16) Tạo một lớp UserStorage kế thừa từ StorageService, để lưu và tải thông tin người dùng từ localStorage.
// 18. (Liên quan câu 16, 17) Viết mã JavaScript sử dụng UserStorage để lưu thông tin đăng nhập người dùng vào localStorage khi họ đăng nhập, và tự động tải lại thông tin nếu người dùng làm mới trang.
class StorageService {
  constructor(storageType = "local") {
    this.storage = storageType === "local" ? localStorage : sessionStorage;
  }
  // save information in localStorage
  save(key, value) {
    try {
      const data = this.load(key) || [];
      data.push(value); 
      this.storage.setItem(key, JSON.stringify(data));
      fetch(`${baseUrl}`)
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }
  // load ìnformation in localStorage
  load(key) {
    try {
      const data = this.storage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error loading data:", error);
      return [];
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

export default StorageService;
