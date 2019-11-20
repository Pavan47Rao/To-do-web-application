export class Todo {
    Title: string;
    Description: string;
    Completed: boolean;
    DueDate: Date;
    constructor(title: string, description: string, completed: boolean, dueDate: Date) {
        this.Title = title;
        this.Description = description;
        this.Completed = completed;
        this.DueDate = new Date();
    }
}