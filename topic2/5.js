// 5. (Liên quan câu 4) Tạo lớp SubmitButton kế thừa từ Button, phương thức onClick() của nó nên gửi một biểu mẫu và thực hiện xác thực thông tin người dùng trước khi gửi.

import Button from "./4.js"
import elements from "../val.js"

class SubmitButton extends Button {
    constructor(formUser,baseUrl) {
        super()
        this.baseUrl = baseUrl
        this.form = formUser
        this.isOpen = false;
    }
    openForm(){
        this.onClick(elements.formButton,(event) => {
            console.log("hello");
            if (event.target === this.form) {
                this.close();
            }
        this.open()
        
        })
    }
    open(){
        this.form.style.display = "Block"
        this.isOpen = true
    }
    close(){
        this.form.style.display = "none"
        this.isOpen = false
    }
    toggle(){
        if (this.isOpen) {
            this.close()
        }else {
            this.open()
        }
    }
    addSubmitUser(url){
      
    elements.submitButton.addEventListener("click", async () => {
        const newSubmitUser = {
            name: elements.nameForm.value,
            email: elements.emailForm.value
        }
        const response = await fetch(`${this.baseUrl}${url}`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body:JSON.stringify(newSubmitUser)
            
        })
        const data = await response.json()
        alert("test")
        console.log(data);
        

    })
    }
}
const submitButon = new SubmitButton(elements.form,"http://127.0.0.1:3006");
submitButon.openForm()
submitButon.addSubmitUser("/submit")