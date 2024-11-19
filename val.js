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
    "formCheck",
    "submit-button",
    "name",
    "email",
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
    //topic6
    "register_username",
    "register_email",
    "register_password",
    "register_confirm_password",
    "btn_register",
    "username",
    "password",
    "btn_login"


]

elementIds.forEach(function (item) {
  const element = document.getElementById(item);
  elements[item] = element
  });

// module.exports = elements
export default  elements
