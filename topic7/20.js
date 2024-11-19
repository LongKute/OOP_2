// 20. (Liên quan câu 19) Sử dụng AuthService để bảo vệ các trang web cụ thể, chỉ cho phép người dùng đã đăng nhập truy cập. Nếu người dùng chưa đăng nhập, họ sẽ được chuyển hướng đến trang đăng nhập.
import AuthService from './19.js'

class Check extends AuthService{
    constructor() {
        super()
    }
}