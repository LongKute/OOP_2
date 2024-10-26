//Chủ đề 3: Tương tác với API và OOP
// 7. (Liên quan câu 8) Tạo một lớp ApiService để quản lý các yêu cầu HTTP tới một API bên ngoài. Lớp này nên có các phương thức get(), post(), put(), và delete() để thực hiện các loại yêu cầu khác nhau.
// 9. (Liên quan câu 7, 8) Viết mã JavaScript để lấy danh sách người dùng từ API thông qua UserService và hiển thị thông tin người dùng lên giao diện web.
//
const axios = require('axios')


// const urlAPIPut = "http://localhost:3000/users";
const urlAPI = "http://localhost:3000/users";
const data = {
    id: 4,
    name: "Long",
    location: "love"
};

// cmd: json-server db.json
class ApiService {
  constructor() {}
  get() {
    // use library axios
    axios
    .get(urlAPI)
    .then((reponse) => {
        console.log(reponse.data);
    })
    .catch((error) =>  {
        console.log(error);
        
    })
  }
  post() {
    axios
    // post(url, data, config)
    .post(urlAPI, data)
    .then((reponse => {
        console.log(reponse.data);
    }))
    .catch((error) => {
        console.log("Error: " + error);
        
    })
  }
  put() {
    axios
    .put(urlAPI, data)
    .then((reponse => {
        console.log(reponse);
    }))
    .catch((error) => {
        console.log("Error: " + error);
    })
  }
  delete() {
const userId = 1;

    axios
    .delete(urlAPI, userId)
    .then(reponse => {
      console.log(`User delete successfully: `, reponse.data);
    })
    .catch(error => {
      console.error('Error deleting user:', error);
    });  
  }
}
const apiService = new ApiService();
// apiService.post()
// apiService.get();
//  apiService.put()
// apiService.delete()
//https://axios-http.com/docs/post_example

// 8. (Liên quan câu 7) Tạo một lớp UserService kế thừa từ ApiService, với các phương thức getUser() và createUser() để tương tác với API về người dùng.

class UserService extends ApiService {
  constructor() {
    super()
    
  }
  getUser(){
    this.get()
  }
}
