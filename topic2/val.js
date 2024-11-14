const elements = {};
const elementIds = [
    "createBtn",
    "formCheck",
    "submit-button",
    "name",
    "email"
];
elementIds.forEach(item => {
    elements[item] = document.getElementById(item);
});

export default elements;