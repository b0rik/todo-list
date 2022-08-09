import Task from "./task";

export default class List {

    constructor(name) {
        this.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
        this.name = name;
        this.tasks = [];
    }

    getName() {
        return this.name;
    }

    getTasks() {
        return this.tasks;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    add(title){
        this.tasks.push(new Task(title, this.id));
    }

    remove(taskId){
        const index = this.tasks.findIndex(task => task.getId() === taskId);

        if(index > -1){
            this.tasks.splice(index, 1);
        }
    }

    getId() {
        return this.id;
    }
}