// 5. (Liên quan câu 4) Tạo lớp SubmitButton kế thừa từ Button, phương thức onClick() của nó nên gửi một biểu mẫu và thực hiện xác thực thông tin người dùng trước khi gửi.

import Button from "./4.js"
import elements from "../val.js"

class SubmitButton extends Button {
    constructor() {
        super()
        this.isOpen = false;
    }
    openForm(){
        this.onClick(elements.submitButton,() => {
        // create tilte
        
        })
    }
    open(){
        this.formCheck.style.display = "Block"
        this.isOpen = false
    }
    close(){
        this.formCheck.style.display = "none"
        this.isOpen = false
    }
    toggle(){
        if (this.isOpen) {
            this.close()
        }else {
            this.open()
        }
    }
}
const submitButon = new SubmitButton();
submitButon.openForm()