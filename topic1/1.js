// 1. (Liên quan câu 2) Tạo một lớp Modal để tạo cửa sổ pop-up trên trang web. Lớp này nên có các phương thức như open(), close() và toggle().
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
    
class Modal {
    constructor(modalId) {
        this.modal = modalId
        this.isOpen = false
    }
    open(){
        this.modal.style.display = "block"
        // khi bấm myModal bên ngoài sẽ tắt 
        elements.myModal.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.close();
            }});
        this.isOpen = true
    }
    close(){
        this.modal.style.display = "none"
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
document.addEventListener('DOMContentLoaded', () => {
    const modal = new Modal(elements.myModal);
    elements.openModalBtn.addEventListener('click', () => modal.open());
    elements.closeModalBtn.addEventListener('click', () => modal.close());
   
}) 
// module.exports = Modal

// class Modal {
//     constructor(modalId) {
//         this.modal = document.getElementById(modalId);
//         this.isOpen = false;
//     }

//     open() {
//         this.modal.style.display = "block";
//         this.isOpen = true;
//     }

//     close() {
//         this.modal.style.display = "none";
//         this.isOpen = false;
//     }

//     toggle() {
//         if (this.isOpen) {
//             this.close();
//         } else {
//             this.open();
//         }
//     }
// }

// // Usage example
// document.addEventListener('DOMContentLoaded', () => {
//     const modal = new Modal('myModal');

//     document.getElementById('openModalBtn').addEventListener('click', () => modal.open());
//     document.getElementById('closeModalBtn').addEventListener('click', () => modal.close());

//     // Optionally, you can add a listener to close the modal if the user clicks outside the modal content
//     window.addEventListener('click', (event) => {
//         if (event.target === modal.modal) {
//             modal.close();
//         }
//     });
// });