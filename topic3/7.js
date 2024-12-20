// 7. (Liên quan câu 8) Tạo một lớp ApiService để quản lý các yêu cầu HTTP tới một API bên ngoài. Lớp này nên có các phương thức get(), post(), put(), và delete() để thực hiện các loại yêu cầu khác nhau.

// const newUser =
import elements from "../val.js";
// create information config
const fetchConfig = (ApiAction, bodyData = null) => {
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
};

const ApiAction = {
  delete: "DELETE",
  put: "PUT",
  get: "GET",
  post: "POST",
};

class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  // onClick(action) {
  //     this.buttonElement.addEventListener("click", action)
  // }

  get(url, element) {
    fetch(`${this.baseUrl}${url}`, fetchConfig(ApiAction.get))
      .then((response) => response.json())
      .then((response) => {
        element.addEventListener("click", async () => {
          await createUserList(response.data);
        });
      });
  }
  post(url, element) {
   
    element.addEventListener("click", () => {
      const newUser = {
        name: elements.inputName.value,
        email: elements.inputEmail.value,
      };
      fetch(`${this.baseUrl}${url}`, fetchConfig(ApiAction.post, newUser))
        .then((response) => response.json())
        .then((response) => {
          console.log("Post user: ", response.data);
        })
        .catch((error) => console.error("error id", error));
    });
  }
  put(url, element) {
    
    element.addEventListener("click", () => {
      fetch(`${this.baseUrl}${url}`, {
        ...fetchConfig(ApiAction.put),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("Update user:", response.data);
        })
        .catch((error) => console.error("Error update user:", error));
    });
  }

  delete(url) {
    fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.id);
      });
  }
}

function createDelButtonByID(id) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    //call delete api
    fetch(`${baseURL}${user}/${id}`, fetchConfig(ApiAction.delete))
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
      });
  };
  return deleteBtn;
}
function createEditButtonbyID(id) {
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => {
    //call edit api
    createForm(id);
  };
  return editBtn;
}
function createUserList(user) {
  user.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = `Id: ${element.id}, name: ${element.name}, email: ${element.email} `;
    elements.userList.appendChild(li);
    elements.userList.appendChild(createDelButtonByID(element.id));
    elements.userList.appendChild(createEditButtonbyID(element.id));
  });
  return user;
}

function createForm(id) {
  const formContainer = document.getElementById("form-container");

  const form = document.createElement("form");
  // create title
  const title = document.createElement("h2");
  title.textContent = "Change information user";
  form.appendChild(title);
  // create input and label name
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name:";
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");
  form.appendChild(nameInput);

  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));

  // create input email
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email:";
  form.appendChild(emailLabel);

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");
  form.appendChild(emailInput);

  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));

  // create button Enter
  const enterButton = document.createElement("button");
  enterButton.setAttribute("type", "button");
  enterButton.setAttribute("id", "enterBtn");
  enterButton.textContent = "Enter";
  form.appendChild(enterButton);
  enterButton.onclick = () => {
    const updateUser = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
    };
    fetch(`${baseURL}${user}/${id}`, fetchConfig(ApiAction.put, updateUser))
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        alert("change information user");
      });
  };
  // create button X
  const closeButton = document.createElement("button");
  closeButton.setAttribute("type", "button");
  closeButton.textContent = "X";
  closeButton.onclick = function () {
    formContainer.innerHTML = ""; // Xóa form khỏi giao diện
    createConfirmBox();
  };
  form.appendChild(closeButton);
  // add form in formContainer
  formContainer.appendChild(form);
}

const baseURL = "http://127.0.0.1:3006";
const user = "/users";
const apiService = new ApiService(baseURL);
// apiService.get(user, elements.getBtn);
// apiService.post(user, elements.postBtn);
// apiService.put(user, elements.putBtn);
// apiService.delete('/users')
export default ApiService;
