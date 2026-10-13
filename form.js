let form = document.getElementById('form')
let title = document.getElementById('title')
let description = document.getElementById('description')
let trueRadioButton = document.getElementById('trueRadio')
let falseRadioButton = document.getElementById('falseRadio')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data)
    setTask(data.title, data.description, data.isDone)
    title.value = '';
    description.value = '';
    trueRadioButton.checked = false;
    falseRadioButton.checked = false;
})