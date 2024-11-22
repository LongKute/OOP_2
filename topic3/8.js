import ApiService from "./7.js"

// 8. (Liên quan câu 7) Tạo một lớp UserService kế thừa từ ApiService, với các phương thức getUser() và createUser() để tương tác với API về người dùng.
class UserService extends ApiService {
  constructor(baseUrl) {
    super(baseUrl);
  }
  getUser() {
    super.get();
  }
  createUser() {
    super.post();
  }
  async updateUser(url, id, updatedData) {
    try {
      const response = await fetch(`${this.baseUrl}${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
      
    )
    const data = response.json()
    } catch (error) {
        console.log("Hi error", error);
    }
  }
}

export default UserService;