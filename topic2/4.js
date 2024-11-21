//4. (Liên quan câu 5) Tạo một lớp Button đại diện cho các nút trên trang web với thuộc tính label và phương thức onClick() để gán sự kiện click cho nút.
import elements from "../val.js";
class Button {
  constructor(label) {
    //định nghĩa nhãn
    this.label = label;
    //
  }
  onClick(element,action) {
    element.addEventListener("click", action)
    }
  }


const button = new Button("Click");
// button.onClick(elements.submitButton , () => {
//     console.log("Hello");
    
// })

export default Button;
