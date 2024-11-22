// Chủ đề 5: Kết hợp OOP và Web Component

// 13. (Liên quan câu 14) Tạo một CustomElement sử dụng Web Components và ES6 class, đại diện cho một UserCard hiển thị thông tin người dùng. 
// 14. (Liên quan câu 13) Mở rộng UserCard để cho phép người dùng chỉnh sửa thông tin ngay trên thẻ, bằng cách thêm các nút edit và save.
// 15. (Liên quan câu 13, 14) Tích hợp với UserService từ Chủ đề 3 để lưu thông tin đã chỉnh sửa qua API khi người dùng bấm nút "Save".

// Tạo class UserCard kế thừa từ HTMLElement
// Tạo class UserCard kế thừa từ HTMLElement
import UserService from '../topic3/8.js'; // Đảm bảo đường dẫn chính xác đến file UserService.js

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Get Attribute
    this.name = this.getAttribute("name");
    this.email = this.getAttribute("email");
    this.avatar = this.getAttribute("avatar");
    this.userId = this.getAttribute("userId");

    // Edit status
    this.isEditing = false;

    // Initialize UserService
    this.userService = new UserService('http://127.0.0.1:3006'); // Đảm bảo URL đúng

    // Render HTML
    this.render();
  }

  // The render function to create the interface
  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../css/userCard.css">
      <div class="user-card">
        <img src="${this.avatar}" alt="Avatar of ${this.name}" class="avatar">
        <div class="user-info">
          ${
            this.isEditing
              ? `
            <input type="text" id="nameInput" value="${this.name}">
            <input type="email" id="emailInput" value="${this.email}">
          `
              : `
            <h3>${this.name}</h3>
            <p>${this.email}</p>
          `
          }
        </div>
        <div class="actions">
          <button id="editButton">${this.isEditing ? "Save" : "Edit"}</button>
          ${this.isEditing ? `<button id="cancelButton">Cancel</button>` : ""}
        </div>
      </div>
    `;
    this.attachEvents();
  }

  // Function to handle events
  attachEvents() {
    const editButton = this.shadowRoot.querySelector("#editButton");
    const cancelButton = this.shadowRoot.querySelector("#cancelButton");
    const nameInput = this.shadowRoot.querySelector("#nameInput");
    const emailInput = this.shadowRoot.querySelector("#emailInput");

    if (editButton) {
      editButton.addEventListener("click", () => {
        if (this.isEditing) {
          // Save information when clicking Save
          const updatedUser = {
            name: nameInput.value,
            email: emailInput.value,
          };

         
          // Call UserService to update user information
          this.userService.updateUser('/users', this.userId, updatedUser)
            .then(() => {
              this.name = nameInput.value;
              this.email = emailInput.value;
              this.isEditing = false;
              this.render(); // Cập nhật giao diện
              alert("User updated successfully!");
            })
            .catch((error) => {
              console.error("Error updating user:", error);
              alert("Failed to update user.");
            });
        } else {
          // Switch to edit mode
          this.isEditing = true;
          this.render();
        }
      });
    }

    if (cancelButton) {
      cancelButton.addEventListener("click", () => {
      // Cancel editing
        this.isEditing = false;
        this.render();
      });
    }
  }
}

// Đăng ký Custom Element
customElements.define("user-card", UserCard);