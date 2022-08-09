export default class Task {

    constructor(title, listId, dueDate = null) {
        this.title = title;
        this.dueDate = dueDate;
        this.listId = listId;
        this.id =  Date.now().toString(36) + Math.random().toString(36).substring(2);
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDueDate() {
        return this.dueDate;
    }

    getListId() {
        return this.listId;
    }

    setTitle(title) {
        this.title = title;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
}