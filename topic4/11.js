// 11. (Liên quan câu 10) Tạo lớp CartStore kế thừa từ Store để quản lý giỏ hàng trong một trang web thương mại điện tử. Lớp này có các phương thức để thêm sản phẩm vào giỏ hàng, xóa sản phẩm và tính tổng tiền.
import Store from "./10.js";
import elements from "../val.js";

function fetchConfig(ApiAction, bodyData = null) {
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
const ApiAction = {
  delete: "DELETE",
  put: "PUT",
  get: "GET",
  post: "POST",
};
const url = "/carts";
const baseURL = "http://127.0.0.1:3006";
class CartStore extends Store {
  constructor(baseUrl) {
    super(baseUrl);
  }

  addProduct(url) {
    try {
      elements.postProduct.addEventListener("click", async () => {
        const newCart = {
          name: elements.inputProduct.value,
          price: parseFloat(elements.inputPrice.value),
          quantity: parseInt(elements.inputQuantity.value),
        };
        const response = await fetch(
          `${this.baseUrl}${url}`,
          fetchConfig(ApiAction.post, newCart)
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        alert("Products have been added:", data);
      });
    } catch (error) {
      console.error("Error when adding product:", error.message);
    }
  }
  deleteProduct(url) {}
  totalProduct(url) {
    try {
      document.addEventListener("DOMContentLoaded", () => {
        elements.totalProduct.addEventListener("click", async () => {
          const response = await fetch(
            `${this.baseUrl}${url}`,
            fetchConfig(ApiAction.get)
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          let id = 0;
          data.bill[0].items.forEach((element) => {
            this.createProduct(
              JSON.stringify(
                `id: ${element.id}, Product name: ${element.name}, Quantity: ${element.quantity}, Price: ${element.price}`
              )
            );
            this.deleteButton(url, element.id);
            this.editButton(url, element.id)
            id++;
          })
          document.addEventListener("DOMContentLoaded", () => {
            const total = document.createElement("li");
            total.textContent = data.bill[0].total;
            elements.listCarts.appendChild("total", total);
          })
           
        });
      });
    } catch (error) {}
  }
  createProduct(items) {
    const li = document.createElement("li");
    li.textContent = items;
    elements.listCarts.appendChild(li);
  }
  deleteButton(url, id) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    elements.listCarts.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", async () => {
      const response = await fetch(
        `${this.baseUrl}${url}/${id}`,
        fetchConfig(ApiAction.delete)
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    });
  }
  editButton(url, id){
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    elements.listCarts.appendChild(editBtn);
    editBtn.addEventListener('click', async () => {
      const response = await fetch(
        `${this.baseUrl}${url}/${id}`,
        fetchConfig(ApiAction.put)
      );
      const data = await response.json();
    })
  }
}

const cartStore = new CartStore(baseURL);
cartStore.addProduct(url);
cartStore.totalProduct(url);
