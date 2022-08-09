import Storage from './storage';
import List from './list';
import Task from './task.js';

export function initPage() {

    renderDefaultList('main', Storage.getAllTasks());
    renderLists();

    initButtons();
}

// render the default list of all tasks
function renderDefaultList(listName, tasks) {

    const button = document.querySelector(`#${listName}`);
    const tasksList = document.querySelector('.tasks-list');

    setTitle(`${listName[0].toUpperCase() + listName.substring(1)}`);

    //set main button to be active
    setActive(button);

    //clear all tasks
    clearTasks();

    //render tasks
    tasks.forEach(task => tasksList.appendChild(makeTask(task)));

    hideAddTaskButton();
}

//render the button list of lists 
function renderLists() {

    const userLists = document.querySelector('.user-lists');
    const lists = Storage.getAllLists(); 

    //render lists
    lists.forEach(list => userLists.appendChild(makeList(list)));
}

//render tasks from list
function renderTasks(list) {

    const tasksList = document.querySelector('.tasks-list');
    const listTitle = document.querySelector('.list-title');

    setTitle(list.getName());

    //clear all tasks
    clearTasks();

    //render tasks
    list.getTasks().forEach(task => tasksList.appendChild(makeTask(task)));

    showAddTaskButton();
}

//init all buttons on page
function initButtons() {

    initDefaultButtons();
    initPopupButtons();
    initAddButtons();
    initCancleButtons();
}

function initDefaultButtons() {

    initDefaultButton('main', renderDefaultList);
    initDefaultButton('today', renderDefaultList);
    initDefaultButton('week', renderDefaultList);
}

function initPopupButtons() {
    const buttons = document.querySelectorAll('.btn-add');
    
    buttons.forEach(button => {
        button.addEventListener('click', e => { showPopup(button) });
    });
}

function initAddButtons() {

    initAddListButton();
    initAddTaskButton();
}

function initAddListButton() {

    const inputField = document.querySelector('#add-list');
    const addListButton = inputField.nextElementSibling.children[0];

    addListButton.addEventListener('click', e => { 
        Storage.saveList(new List(inputField.value)); 
        clearLists();
        renderLists();
        inputField.value = '';
        hidePopup(inputField.parentElement);
    });
}

function initAddTaskButton() {

    const inputField = document.querySelector('#add-task');
    const addTaskButton = inputField.nextElementSibling.children[0];

    addTaskButton.addEventListener('click', e => { 
        Storage.saveTask(new Task(inputField.value, getActiveList())); 
        clearTasks();
        renderTasks(Storage.getList(getActiveList()));
        inputField.value = '';
        hidePopup(inputField.parentElement);
    });
}

function initCancleButtons() {
    const buttons = document.querySelectorAll('.input-btns:last-child');

    buttons.forEach(button => {
        button.addEventListener('click', e => { hidePopup(button.parentElement) });
    });
}

function initDefaultButton(btnName, func) {

    const actions = {
        'main': Storage.getAllTasks,
        'today': Storage.getAllTodayTasks,
        'week': Storage.getAllWeekTasks
    };

    const button = document.querySelector(`#${btnName}`);

    button.addEventListener('click', e => {
        setAllNotActive();
        setActive(button);
        func(btnName, actions[btnName]());
    });
}

//clear the tasks
function clearTasks() {

    const tasksList = document.querySelector('.tasks-list');

    while(tasksList.lastChild) tasksList.removeChild(tasksList.lastChild);
}

function clearLists() {

    const lists = document.querySelector('.user-lists');

    while(lists.lastChild) lists.removeChild(lists.lastChild);
}

//set the button to be active
function setActive(button) {

    setAllNotActive();

    button.classList.add('active');
}

//set all buttons to no active
function setAllNotActive() {

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.classList.remove('active'));
}

//create a task component
function makeTask(task) {

    const taskButton = document.createElement('button');
    const taskTitle = document.createElement('span');
    const dateInput = document.createElement('input');

    taskButton.classList.add('task');

    taskTitle.textContent = task.getTitle();
    taskButton.appendChild(taskTitle);

    dateInput.type = 'date';
    dateInput.value = task.getDueDate();
    dateInput.addEventListener('click', e => { e.stopPropagation() });
    dateInput.addEventListener('change', e => {
        task.setDueDate(e.target.value);
        Storage.saveTask(task);

        const activeList = getActiveList();

        if(activeList === 'main') renderDefaultList('main', Storage.getAllTasks());
        else if(activeList === 'today') renderDefaultList('today', Storage.getAllTodayTasks());
        else if(activeList === 'week') renderDefaultList('week', Storage.getAllWeekTasks());
        else renderTasks(Storage.getList(task.getListId()));
     });
    
    taskButton.appendChild(dateInput);

    taskButton.addEventListener('click', e => {
        const activeList = getActiveList();
        Storage.deleteTask(task);

        if(activeList === 'main') renderDefaultList('main', Storage.getAllTasks());
        else if(activeList === 'today') renderDefaultList('today', Storage.getAllTodayTasks());
        else if(activeList === 'week') renderDefaultList('week', Storage.getAllWeekTasks());
        else renderTasks(Storage.getList(task.getListId()));
    });

    return taskButton;
}

//create a list component
function makeList(list) {

    const button = document.createElement('button');
    const text = document.createElement('span');
    const del = document.createElement('button');

    button.classList.add('btn-default');
    button.id = list.getId()

    text.textContent = list.getName();

    del.textContent = 'X';
    del.classList.add('del');

    button.appendChild(text);
    button.appendChild(del);

    button.addEventListener('click', e => {
        setActive(e.target);
        renderTasks(Storage.getList(list.getId()));
    });

    button.addEventListener('mouseover', e => { del.style['display'] = 'initial'; });
    button.addEventListener('mouseout', e => { del.style['display'] = 'none' });;

    del.addEventListener('click', e => {
        e.stopPropagation();

        const activeList = getActiveList();

        Storage.deleteList(list);
        clearLists();
        renderLists();

        if(activeList === list.getId() || activeList === 'main') {
            renderDefaultList('main', Storage.getAllTasks());
        }
        else if(activeList === 'today') {
            renderDefaultList('today', Storage.getAllTodayTasks());
        }
        else if(activeList === 'week') {
            renderDefaultList('week', Storage.getAllWeekTasks());
        }
        else {
            setActive(document.querySelector(`#${activeList}`));
        }
    });

    return button;
}

function setTitle(title) {

    const listTitle = document.querySelector('.list-title');

    listTitle.textContent = title;
}

function showPopup(button) {
    const popup = button.nextElementSibling;

    button.style['display'] = 'none';
    popup.style['display'] = 'flex';
}

function hidePopup(popup) {
    const button = popup.previousElementSibling;

    button.style['display'] = 'initial';
    popup.style['display'] = 'none';
}

function getActiveList() {
    return document.querySelector('.btn-default.active').id;
}

function hideAddTaskButton() {
    const button = document.querySelector('.tasks .btn-add');

    button.style['display'] = 'none'
}

function showAddTaskButton() {
    const button = document.querySelector('.tasks .btn-add');

    button.style['display'] = 'initial'
}