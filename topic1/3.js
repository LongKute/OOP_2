//(Liên quan câu 1, 2) Viết mã JavaScript để tạo một đối tượng AlertModal và hiển thị nó khi người dùng bấm vào nút “Open Alert
//(Mở rộng lớp AlertModal để tạo một lớp mới có tên ConfirmModal, bao gồm hai nút 'OK' và 'Cancel'. Khi người dùng nhấn 'OK', hiển thị một thông báo xác nhận qua console.log và đóng modal.
//Khi nhấn 'Cancel', chỉ đóng modal mà không làm gì thêm. Hãy viết mã JavaScript để thực hiện yêu cầu này).
import elements from "../val.js";
class AlertModal {
  constructor(alertId) {
    this.alert = alertId;
    this.isOpen = false;
  }
  open() {
    this.alert.style.display = "block";
    // khi bấm myModal bên ngoài sẽ tắt
    elements.myAlert.addEventListener("click", (event) => {
      if (event.target === this.alert) {
        this.close();
      }
    });
    this.isOpen = true;
  }
  close() {
    this.alert.style.display = "none";
    this.isOpen = false;
  }
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const alert = new AlertModal(elements.myAlert);
  elements.openAlertBtn.addEventListener("click", () => alert.open());
  elements.closeAlertBtn.addEventListener("click", () => alert.close());
});

class ConfirmModal extends AlertModal  {
  constructor(modalId) {
    super(modalId);
    this.addShowConfirm();
    this.addConfirmModal();

  }
  addShowConfirm() {
    elements.closeBtn.addEventListener("click", () => {
      this.showConfirmModal();
    });
    elements.closeAlertBtn.addEventListener("click", () => {
      this.showConfirmModal();
    });
  }
  showConfirmModal() {
    elements.confirmModal.style.display = "block";
  }

  closeConfirmModal() {
    elements.confirmModal.style.display = "none";
  }
  addConfirmModal() {
    elements.confirmOkBtn.addEventListener("click", () => {
      console.log("ok delete");

      this.closeConfirmModal();
      this.close(); 
    });
    elements.confirmNoBtn.addEventListener("click", () => {
        this.closeConfirmModal()
        elements.myAlert.addEventListener('DOMContentLoaded', () => {
          alert.open()
        }) 
        
    })
  }
  showConfirm() {
    this.open();
  }
}
document.addEventListener('DOMContentLoaded', () => {
    const confirmModal2 = new ConfirmModal(elements.myAlert);
    const confirmModal1 = new ConfirmModal(elements.myModal);
    elements.closeAlertBtn.addEventListener('click', () => confirmModal2.showConfirm());
    elements.closeBtn.addEventListener('click', () => confirmModal1.showConfirm());
});