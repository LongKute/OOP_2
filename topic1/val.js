const elements = {}

const elementIds = [
    "openModalBtn",
    "myModal",
    "closeModalBtn",
    'btn'
    
]

elementIds.forEach(function (item) {
  elements[item]  = document.getElementById(item);
    
  });

export default elements
