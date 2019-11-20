export class Todo {
    title: string;
    description: string;
    completed: string;
    dueDate: Date;
    id: string;
    constructor(title: string, description: string, completed: string, dueDate: Date, id: string) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.dueDate = new Date();
        this.id = id;
    }
}