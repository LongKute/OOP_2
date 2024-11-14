//  (Liên quan câu 1) Tạo một lớp AlertModal kế thừa từ Modal, bổ sung một phương thức showAlert() để hiển thị thông báo khi modal được mở.
// const Modal = require('./1.js')
import elements from "../val.js";
import Modal from "./1.js";
class AlertModal extends Modal {
    constructor() {
     super()
    }
    showAlert(){
       elements.openModalBtn.addEventListener('click', () => alert("Mở Modal"))
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const alertModal = new AlertModal(elements.myModal);
    alertModal.showAlert()
})

export default AlertModal   