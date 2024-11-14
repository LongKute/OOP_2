Chủ đề 1: DOM Manipulation và OOP

1. (Liên quan câu 2) Tạo một lớp Modal để tạo cửa sổ pop-up trên trang web. Lớp này nên có các phương thức như open(), close() và toggle().
2. (Liên quan câu 1) Tạo một lớp AlertModal kế thừa từ Modal, bổ sung một phương thức showAlert() để hiển thị thông báo khi modal được mở.
3. (Liên quan câu 1, 2) Viết mã JavaScript để tạo một đối tượng AlertModal và hiển thị nó khi người dùng bấm vào nút “Open Alert”.

Chủ đề 2: Event Handling và OOP

4. (Liên quan câu 5) Tạo một lớp Button đại diện cho các nút trên trang web với thuộc tính label và phương thức onClick() để gán sự kiện click cho nút.
5. (Liên quan câu 4) Tạo lớp SubmitButton kế thừa từ Button, phương thức onClick() của nó nên gửi một biểu mẫu và thực hiện xác thực thông tin người dùng trước khi gửi.
6. (Liên quan câu 4, 5) Tạo một trang HTML với một nút submit, sau đó viết mã JavaScript để tạo đối tượng SubmitButton và gán hành vi khi nút được bấm.

Chủ đề 3: Tương tác với API và OOP

7. (Liên quan câu 8) Tạo một lớp ApiService để quản lý các yêu cầu HTTP tới một API bên ngoài. Lớp này nên có các phương thức get(), post(), put(), và delete() để thực hiện các loại yêu cầu khác nhau.
8. (Liên quan câu 7) Tạo một lớp UserService kế thừa từ ApiService, với các phương thức getUser() và createUser() để tương tác với API về người dùng.
9. (Liên quan câu 7, 8) Viết mã JavaScript để lấy danh sách người dùng từ API thông qua UserService và hiển thị thông tin người dùng lên giao diện web.

Chủ đề 4: Quản lý trạng thái ứng dụng

10. (Liên quan câu 11) Tạo một lớp Store để quản lý trạng thái của ứng dụng. Lớp này nên có các phương thức getState(), setState(), và subscribe() để lưu và lắng nghe sự thay đổi trạng thái.
11. (Liên quan câu 10) Tạo lớp CartStore kế thừa từ Store để quản lý giỏ hàng trong một trang web thương mại điện tử. Lớp này có các phương thức để thêm sản phẩm vào giỏ hàng, xóa sản phẩm và tính tổng tiền.
12. (Liên quan câu 10, 11) Viết mã JavaScript để theo dõi sự thay đổi giỏ hàng thông qua CartStore và cập nhật giao diện người dùng mỗi khi có sản phẩm được thêm hoặc xóa.

Chủ đề 5: Kết hợp OOP và Web Component

13. (Liên quan câu 14) Tạo một CustomElement sử dụng Web Components và ES6 class, đại diện cho một UserCard hiển thị thông tin người dùng.
14. (Liên quan câu 13) Mở rộng UserCard để cho phép người dùng chỉnh sửa thông tin ngay trên thẻ, bằng cách thêm các nút edit và save.
15. (Liên quan câu 13, 14) Tích hợp với UserService từ Chủ đề 3 để lưu thông tin đã chỉnh sửa qua API khi người dùng bấm nút "Save".

Chủ đề 6: Quản lý và sử dụng LocalStorage

16. (Liên quan câu 17) Tạo một lớp StorageService để quản lý lưu trữ dữ liệu người dùng trong localStorage và sessionStorage. Lớp này nên có các phương thức như save(), load(), và delete().
17. (Liên quan câu 16) Tạo một lớp UserStorage kế thừa từ StorageService, để lưu và tải thông tin người dùng từ localStorage.
18. (Liên quan câu 16, 17) Viết mã JavaScript sử dụng UserStorage để lưu thông tin đăng nhập người dùng vào localStorage khi họ đăng nhập, và tự động tải lại thông tin nếu người dùng làm mới trang.

Chủ đề 7: Bảo mật và OOP

19. (Liên quan câu 20) Tạo một lớp AuthService để quản lý xác thực người dùng. Lớp này nên có các phương thức login(), logout(), và isAuthenticated() để kiểm tra trạng thái xác thực.
20. (Liên quan câu 19) Sử dụng AuthService để bảo vệ các trang web cụ thể, chỉ cho phép người dùng đã đăng nhập truy cập. Nếu người dùng chưa đăng nhập, họ sẽ được chuyển hướng đến trang đăng nhập.