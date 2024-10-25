import Modal from "./test1.js";
import elements from "./valtest.js";

class AlertModal extends Modal {
    constructor(modal) {
        super(modal);
    }

    showAlert() {
        elements.openAlertBtn.addEventListener('click', () => {
            this.open();
        });
    }
}

class ConfirmModal extends AlertModal {
    constructor(modal) {
        super(modal);
        this.initConfirmButton();
        this.initConfirmModal();
    }

    initConfirmButton() {
        elements.closeModalBtn.addEventListener('click', () => {
            this.showConfirmModal();
        });
    }

    initConfirmModal() {
        elements.confirmOkBtn.addEventListener('click', () => {
            console.log("ok đã xoá");
            this.closeConfirmModal();
            this.close(); 
        });

        
        elements.confirmNoBtn.addEventListener('click', () => {
            this.closeConfirmModal();
        });
    }

    showConfirmModal() {
        elements.confirmModal.style.display = "block";
    }

    closeConfirmModal() {
        elements.confirmModal.style.display = "none";
    }

    showConfirm() {
        this.open();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const confirmModal = new ConfirmModal(elements.myModal);
    elements.openAlertBtn.addEventListener('click', () => confirmModal.showConfirm());
});

export default AlertModal;