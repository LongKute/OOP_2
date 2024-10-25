import elements from "./valtest.js";

class Modal {
    constructor(modal) {
        this.modal = modal;
        this.isOpen = false;
    }

    open() {
        this.modal.style.display = "block";
        // Bấm ra ngoài modal để đóng
        elements.myModal.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.close();
            }
        });
        this.isOpen = true;
    }

    close() {
        this.modal.style.display = "none";
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

document.addEventListener('DOMContentLoaded', () => {
    const modal = new Modal(elements.myModal);
    elements.openModalBtn.addEventListener('click', () => modal.open());
    elements.closeBtn.addEventListener('click', () => modal.close());
});

export default Modal;