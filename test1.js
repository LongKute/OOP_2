class Button {
    constructor(label) {
      this.label = label; // Thuộc tính nhãn của nút
  
      // Tạo phần tử nút
      this.buttonElement = document.createElement('button');
      this.buttonElement.innerText = this.label;
      document.body.appendChild(this.buttonElement); // Thêm nút vào trang web
    }
  
    // Phương thức onClick: gán sự kiện click cho nút
    onClick(action) {
      this.buttonElement.addEventListener('click', action);
    }
  }
  
  // Sử dụng lớp Button
  const myButton = new Button('Click me!'); // Tạo một nút với nhãn "Click me!"
  
  // Gán sự kiện click cho nút
  myButton.onClick(() => {
    alert('Button was clicked!');
  });