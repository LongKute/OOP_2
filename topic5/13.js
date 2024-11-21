// Chủ đề 5: Kết hợp OOP và Web Component

// 13. (Liên quan câu 14) Tạo một CustomElement sử dụng Web Components và ES6 class, đại diện cho một UserCard hiển thị thông tin người dùng.
// 14. (Liên quan câu 13) Mở rộng UserCard để cho phép người dùng chỉnh sửa thông tin ngay trên thẻ, bằng cách thêm các nút edit và save.
// 15. (Liên quan câu 13, 14) Tích hợp với UserService từ Chủ đề 3 để lưu thông tin đã chỉnh sửa qua API khi người dùng bấm nút "Save".

// Tạo class UserCard kế thừa từ HTMLElement
// Tạo class UserCard kế thừa từ HTMLElement
class UserCard extends HTMLElement {
    constructor() {
      super();
  
      // Tạo Shadow DOM
      this.attachShadow({ mode: 'open' });
  
      // Thêm cấu trúc HTML cơ bản
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: Arial, sans-serif;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            max-width: 300px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 16px;
          }
          .name {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 8px;
          }
          .email {
            font-size: 0.9em;
            color: #666;
          }
        </style>
        <img class="avatar" src="" alt="User Avatar">
        <div class="name"></div>
        <div class="email"></div>
      `
    }
  
    // Lắng nghe các thuộc tính thay đổi
    static get observedAttributes() {
      return ['name', 'email', 'avatar'];
    }
  
    // Xử lý khi thuộc tính thay đổi
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.updateCard(name, newValue);
      }
    }
  
    // Cập nhật thông tin thẻ
    updateCard(attribute, value) {
      const element = this.shadowRoot.querySelector(`.${attribute}`);
      if (attribute === 'avatar') {
        element.src = value;
        element.alt = `Avatar of ${this.getAttribute('name') || 'user'}`;
      } else {
        element.textContent = value;
      }
    }
  }
  
  // Đăng ký CustomElement
  customElements.define('user-card', UserCard);
  
  // Sử dụng UserCard trong HTML
  document.body.innerHTML = `
    <user-card
      name="Nguyen Van A"
      email="nguyenvana@example.com"
      avatar="https://via.placeholder.com/100"
    ></user-card>
  `;
  