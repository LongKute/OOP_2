const elements = {}
const elementIds = [
    "createBtn",
    'formCheck',
    "test"
]
elementIds.forEach(item => {
    const element = document.getElementById(item)
    elements[item] = element
});

export default elements