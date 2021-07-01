
// Select all element that need

let newTask = document.querySelector('#new-task');

let todoUl = document.querySelector('#incomplete-items')

let completeUl = document.querySelector('#complete-items')

let form = document.querySelector('form')

// function

let createTask = function(task){
    let listItem = document.createElement('li');
    let lable = document.createElement('label');
    let cheakbox = document.createElement('input')

    lable.innerText = task;
    cheakbox.type = 'checkbox'

    listItem.appendChild(cheakbox);
    listItem.appendChild(lable)

    return listItem;
}


let addTask = function(event){
    event.preventDefault();

    let listItem = createTask(` ` + newTask.value)

    todoUl.appendChild(listItem)

    newTask.value= '';

    bindincompletedItems(listItem, completeTask);
};

let completeTask = function(){
    let listItem = this.parentNode;
    let deletebtn = document.createElement('button');
    deletebtn.innerText = 'Delete';
    deletebtn.className = 'delete';

    listItem.appendChild(deletebtn);

    let cheakbox = listItem.querySelector('input[type="checkbox"]');
    cheakbox.remove();
    completeUl.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);

}


let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindincompletedItems = function(taskItem, checkboxclick){
    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxclick;
}

let bindCompleteItems = function(taskItem,deleteBtnClick){
    let deletebtn = taskItem.querySelector('.delete');

    deletebtn.onclick = deleteBtnClick;

}

for(let i = 0; i< todoUl.children.length; i++){
    bindincompletedItems(todoUl.children[i], completeTask)
}


for(let i = 0; i< completeUl.children.length; i++){
    bindCompleteItems(completeUl.children[i], deleteTask)
}


form.addEventListener('submit', addTask);
