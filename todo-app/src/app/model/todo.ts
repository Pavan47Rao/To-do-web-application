export class Todo {
    title: string;
    description: string;
    completed: boolean;
    dueDate: Date;
    constructor(title: string, description: string, completed: boolean, dueDate: Date) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.dueDate = new Date();
    }
}