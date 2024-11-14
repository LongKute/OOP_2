// 5. (Liên quan câu 4) Tạo lớp SubmitButton kế thừa từ Button, phương thức onClick() của nó nên gửi một biểu mẫu và thực hiện xác thực thông tin người dùng trước khi gửi.

import Button from "./4.js"
import elements from "../val.js"

class SubmitButton extends Button {
    constructor() {
        super()
        this.isOpen = false;
    }
    onClick(){
        super.onClick(() => {
        // create tilte
        const tilte = document.createElement("h2")
        tilte.innerHTML = "Change information user"
        elements.formCheck.appendChild(tilte)

        })
    }
    open(){

    }
    close(){

    }
    toggle(){

    }
}
const submitButon = new SubmitButton();
submitButon.onClick()