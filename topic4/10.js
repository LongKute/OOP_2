// 12. (Liên quan câu 10, 11) Viết mã JavaScript để theo dõi sự thay đổi giỏ hàng thông qua CartStore và cập nhật giao diện người dùng mỗi khi có sản phẩm được thêm hoặc xóa.

// 10. (Liên quan câu 11) Tạo một lớp Store để quản lý trạng thái của ứng dụng. Lớp này nên có các phương thức getState(), setState(), và subscribe() để lưu và lắng nghe sự thay đổi trạng thái.

import elements from "../val.js";
const ApiAction = {
    delete: "DELETE",
    put: "PUT",
    get: "GET",
    post: "POST",
  };
const url = "/carts";
const baseURL = "http://127.0.0.1:3006";

class Store {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  async getState(url) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, this.fetchConfig(ApiAction.get));
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      elements.statusCode.addEventListener("click", () => {
        console.log(response.status, response.statusText);
      });
    } catch (error) {
      console.log(error);
    }
  }
  // setState() {

  //   elements.postStatus.addEventListener("click", () => {
  //       this.getDateAndTime()
        
        
  //   })
  // }
  async subscribe(url) {
   const newCart = {
    name: elements.inputProduct.value,
    price: elements.inputPrice.value,
    quantity: elements.inputQuantity.value
   }
   try {
    const response = await fetch(`${this.baseUrl}${url}`, this.fetchConfig(ApiAction.post, newCart))
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
   
    
    elements.postProduct.addEventListener('click', ()=>{
      console.log(data);
      
    
      
      
    })
    
    
    
   } catch (error) {
    
   }
  }
  fetchConfig(ApiAction, bodyData = null){
    const config = {
        method: ApiAction,
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (bodyData) {
        config.body = JSON.stringify(bodyData);
      }
      return config;
  }
  //crete function get date and time realtime
  getDateAndTime(){
    const today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    // today.toISOString();
    // console.log(today);
    

  }
}
const store = new Store(baseURL);
store.getState(url);
// store.setState()
store.subscribe(url)
