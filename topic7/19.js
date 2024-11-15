// Chủ đề 7: Bảo mật và OOP

// 19. (Liên quan câu 20) Tạo một lớp AuthService để quản lý xác thực người dùng. Lớp này nên có các phương thức login(), logout(), và isAuthenticated() để kiểm tra trạng thái xác thực.
class AuthService {
  constructor() {
    this.isAuthenticated = false;
  }

  login() {
    this.isAuthenticated = true;
    if (this.isAuthenticated == true) {
      console.log("Login successful!");
    }
  }

  logout() {
    this.isAuthenticated = false;
    if (this.isAuthenticated == false) {
      console.log("Logout successful!");
    }
  }

  isAuthenticated() {
    return this.isAuthenticated;
  }
}
const authService = new AuthService();
authService.login();
export default AuthService;
