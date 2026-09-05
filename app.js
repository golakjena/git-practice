const debounce = (callback, delay) => {
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}

const hightlightText = (text, query) => {
    let regx = new RegExp(`(${query})`, 'gi');
    return text.replace(regx, '<b>$1</b>');
}

const throttle = (callback, delay) => {
    let waiting = false;

    return function(...args){
        if(waiting){
            return;
        }
        callback(...args);
        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);

    }
}

const handleScroll = throttle(() => {
    console.log("scrolling...");
}, 1000);

window.addEventListener("scroll", handleScroll);



/* Variable declaration */
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const addBtn = document.querySelector("#addBtn");
const users = document.querySelector("#users");

const todos = [];

const emptyForm = () => {
    name.value = '';
    email.value = '';
}

const renderHTML = (data) => {
    let htmls = '';
    data.forEach(element => {
        htmls += `
            <p>${element.name} <button>Delete</button></p>
        `
    });
    users.innerHTML = htmls;
}

const addTodo = () => {
    const todo = {
        name: name.value,
        email: email.value
    }

    todos.push(todo);
    renderHTML(todos);
    emptyForm();
};


const editTodo = () => {};
const deleteTodo = () => {};

addBtn.addEventListener("click", addTodo);