const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
 
function readFormData(form) {
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    return {email, message}
}

form.addEventListener('input', (event) => {
    event.preventDefault();
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
})

const rawData = localStorage.getItem(STORAGE_KEY);
if (rawData) {
    const data = JSON.parse(rawData);
    form.email.value = data.email;
    form.message.value = data.message;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.email.value
    const message = form.message.value;
    
    if (email && message !== '') {
    const dataConsole = readFormData(event.currentTarget);
    console.log(dataConsole);
    localStorage.removeItem(STORAGE_KEY);
    form.reset()
    } else {
        alert('All fields in the form must be filled out');
        }
})