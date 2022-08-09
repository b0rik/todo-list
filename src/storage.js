import isSameDay from 'date-fns/isSameDay'
import isSameWeek from 'date-fns/isSameWeek'

import List from './list';
import Task from './task';

export default class Storage {
    static getAllLists() {
        let lists =  JSON.parse(localStorage.getItem('task-lists'));

        if(!lists) return [];

        lists = lists.map(list => Object.assign(new List(), list));

        lists.forEach(list => {
            list.setTasks(list.getTasks()
            .map(task => Object.assign(new Task(), task)));
        });

        return lists
    }

    static getList(id) {
        return this.getAllLists().find(item => item.getId() === id);
    }

    static saveLists(lists) {
        localStorage.setItem('task-lists', JSON.stringify(lists));
    }

    static saveList(newList) {
        const lists = this.getAllLists();
        const index = lists.findIndex(list => list.getId() === newList.getId());

        if(index === -1) lists.push(newList);
        else lists.splice(index, 1, newList);
            
        this.saveLists(lists);
    }

    static getAllTasks() {
        const lists = Storage.getAllLists();

        return lists.reduce((arr, list) => {
            arr.push(list.getTasks());

            return arr;
        }, []).flat();
    }

    static getAllTodayTasks() {
        return Storage.getAllTasks().filter(task => isSameDay(new Date(), new Date(task.getDueDate())));
    }

    static getAllWeekTasks() {
        return Storage.getAllTasks().filter(task => isSameWeek(new Date(), new Date(task.getDueDate())));
    }

    static saveTask(newTask) {
        const list = Storage.getList(newTask.getListId());
        const tasks = list.getTasks();
        const index = tasks.findIndex(task => task.getId() === newTask.getId());

        if(index !== -1)  tasks.splice(index, 1, newTask);
        else tasks.push(newTask);
        list.setTasks(tasks);
        this.saveList(list);
    }

    static deleteList(list) {
        Storage.saveLists(
            Storage.getAllLists()
            .filter(item => item.getId() !== list.getId()));
    }

    static deleteTask(task) {
        const list = Storage.getList(task.getListId());
        list.setTasks(list.getTasks().filter(item => item.getId() !== task.getId()));
        Storage.saveList(list);
    }
}