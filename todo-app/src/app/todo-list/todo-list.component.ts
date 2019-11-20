import { Component, OnInit } from '@angular/core';
import { Todo } from "./../model/todo";
import { TodoService } from "./../services/todo.service";
import { Observable } from "rxjs";
import { MatDialog } from '@angular/material';
import { TodoDetailComponent } from "../todo-detail/todo-detail.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  title = 'todo-app';
  todoList: Array<Todo>;

  constructor(todoService: TodoService,
    public dialog: MatDialog) {
    let todoList$: Observable<Array<Todo>> = todoService.getTodoList();
    todoList$.subscribe(todoList => {
      this.todoList = todoList;
    });
  }

  ngOnInit() {
  }

  openTodoDetail(todo:any) {
    console.log(todo);
    let dialogRef = this.dialog.open(TodoDetailComponent, {
        // panelClass: 'todoModal',
        height: '200px',
        width: '200px',
        data: { 
          Title:todo.title,
          Description:todo.description,
          DueDate:todo.dueDate,
          Completed:todo.completed         
        }
      });   
  }
}
