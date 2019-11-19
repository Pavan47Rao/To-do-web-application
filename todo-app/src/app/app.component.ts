import { Component } from '@angular/core';
import { Todo } from "./model/todo";
import { TodoService } from "./services/todo.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todoList: Array<Todo>;

  constructor(todoService: TodoService) {
    let todoList$: Observable<Array<Todo>> = todoService.getTodoList();
    todoList$.subscribe(todoList => {
      this.todoList = todoList;
    });
  }
}