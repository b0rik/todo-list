export default class Task {
    constructor(title, description = 'Add description', priority = 1, dueDate = null) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getPriority() {
        return this.priority;
    }

    getDueDate() {
        return this.dueDate;
    }

    setDescription(description) {
        this.description = description;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
}