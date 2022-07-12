export default class List {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() {
        return this.name;
    }

    getTasks() {
        return this.tasks;
    }

    add(task){
        this.tasks.push(task);
    }

    remove(task){
        const index = this.tasks.indexOf(task);

        if(index > -1){
            this.tasks.splice(index, 1);
        }
    }
}