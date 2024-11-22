const elements = {}

const elementIds = [
    //topic1
    "openModalBtn",
    "myModal",
    "closeBtn",
    "openAlertBtn",
    "myAlert",
    "closeAlertBtn",
    "confirmModal",
    "confirmOkBtn",
    "confirmNoBtn",
    //topic2
    "createBtn",
    "form",
    "formCheck",
    "formButton",
    "submitButton",
    "nameForm",
    "emailForm",
    //topic3
    "getBtn",
    "postBtn",
    "putBtn",
    "deleteBtn",
    "userList",
    "inputId",
    "inputName",
    "inputEmail",
    //topic4
    "statusCode",
    "postStatus",
    "inputProduct",
    "inputPrice",
    "inputQuantity",
    "postProduct",
    "totalProduct",
    "listCarts",
    //topic6
    "register_username",
    "register_email",
    "register_password",
    "register_confirm_password",
    "btn_register",
    "username",
    "password",
    "btn_login",
    //topic 7 
    "logoutButton"


]

elementIds.forEach(function (item) {
  const element = document.getElementById(item);
  elements[item] = element
  });

// module.exports = elements
export default  elements
