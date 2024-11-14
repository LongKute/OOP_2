//4. (Liên quan câu 5) Tạo một lớp Button đại diện cho các nút trên trang web với thuộc tính label và phương thức onClick() để gán sự kiện click cho nút.
import elements from "../val.js";
class Button {
  constructor(label) {
    //định nghĩa nhãn
    this.label = label;
    //
    this.buttonElement = document.createElement("button")
    this.buttonElement.innerHTML = this.label
    elements.createBtn.appendChild(this.buttonElement)
  }
  onClick(action) {
    this.buttonElement.addEventListener("click", action)
    }
  }


const button = new Button("Click");
// button.onClick(() => {
//     console.log("Hello");
    
// })
export default Button;
