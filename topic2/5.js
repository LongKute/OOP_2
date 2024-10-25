

// (Liên quan câu 4) Tạo lớp SubmitButton kế thừa từ Button, phương thức onClick() của nó nên gửi một biểu mẫu và thực hiện xác thực thông tin người dùng trước khi gửi.
//Phân tích bài:
//- import kế thừa từ button
//- Tạo một form hoặc pop-up hoặc window
//- khi click từ button sẽ xuất hiện một form hoặc pop-up hoặc window
//- 
// kiểm tra lỗi 
import Button from "./4.js";
import elements from "./val.js";
class SubmitButton extends Button {
    constructor(form, comfirmModal) {
        super()
        this.form = form
    }
    onClick(){

    }
    showForm(){

    }


}
 
function form(id, name, confirm, cancel  ) {

    //create element input ID
    const inputId = document.createElement(id)
    inputId.setAttribute('type', 'text' );
    inputId.setAttribute('placeholder', 'Mời bạn nhập Id' );
    inputId.innerHTML = id
    elements.formCheck.appendChild(inputId)

    // create element input name
    const inputName = document.createElement(name)
    inputName.setAttribute('type', 'text' );
    inputName.setAttribute('placeholder', 'Mời bạn nhập name' );
    inputName.innerHTML = name
    elements.formCheck.appendChild(inputName)
   
    //create element button confirm
    const confirmBtn = document.createElement(confirm)
    confirmBtn.innerHTML = "Confirm" 
    elements.formCheck.appendChild(confirmBtn)
    
    ////create element button confirm
    const cancelBtn = document.createElement(cancel)
    cancelBtn.innerHTML = "Cancel"
    elements.formCheck.appendChild(cancelBtn)
   
}

const submitButton = new SubmitButton(form(`input`,`input`, "button", "button"));

// const button = new SubmitButton(form("Hi" ,"button"));