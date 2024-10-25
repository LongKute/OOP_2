const elements = {}

const elementIds = [
    "openModalBtn",
    "myModal",
    "closeBtn",
    "openAlertBtn",
    "myAlert",
    "closeAlertBtn",
    "confirmModal",
    "confirmOkBtn",
    "confirmNoBtn"
    
]

elementIds.forEach(function (item) {
  const element = document.getElementById(item);
  elements[item] =element
  });

// module.exports = elements
export default  elements
