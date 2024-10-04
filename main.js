let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    if (inputField.value.trim() === "") return; 
 /*----------------------------------------------------------------*/
    let item = document.createElement('div');
    item.classList.add('item');
 /*----------------------------------------------------------------*/
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
 /*----------------------------------------------------------------*/
    let completeBtn = document.createElement('span');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerText = '✔️';
    /*----------------------------------------------------------------*/
    let editBtn = document.createElement('span');
    editBtn.classList.add('edit-btn');
    editBtn.innerText = '✎';
    /*----------------------------------------------------------------*/
    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'X';
 /*----------------------------------------------------------------*/
    item.appendChild(paragraph);
    item.appendChild(completeBtn);
    item.appendChild(editBtn);
    item.appendChild(deleteBtn);
    toDoContainer.appendChild(item);
 /*----------------------------------------------------------------*/
    inputField.value = "";
 /*----------------------------------------------------------------*/
    completeBtn.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    });
 /*----------------------------------------------------------------*/
    editBtn.addEventListener('click', function(){
        inputField.value = paragraph.innerText;
        toDoContainer.removeChild(item);
    });
 /*----------------------------------------------------------------*/
    deleteBtn.addEventListener('click', function(){
        toDoContainer.removeChild(item);
    });
});