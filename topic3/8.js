import ApiService from "./7"

// 8. (Liên quan câu 7) Tạo một lớp UserService kế thừa từ ApiService, với các phương thức getUser() và createUser() để tương tác với API về người dùng.
class UserService extends ApiService {
    constructor() {
        super()
    }
    getUser(){
        super.get()
    }
    createUser(){
        super.post()
    }
}