//  (Liên quan câu 1) Tạo một lớp AlertModal kế thừa từ Modal, bổ sung một phương thức showAlert() để hiển thị thông báo khi modal được mở.
const elements = {}
const elementIds = [
    "openModalBtn",
    "myModal",
    "closeModalBtn",
    
]

elementIds.forEach(function (item) {
    const element = document.getElementById(item);
    elements[item] = element
  });
const modal = require("./1.js")
class AlertModal extends modal {
    constructor() {
     super(0)   
    }
    showAlert(){
       elements.openModalBtn.onclick(alert("Cửa sổ Modal"))
    }
}