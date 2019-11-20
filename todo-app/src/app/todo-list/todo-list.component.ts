import { Component, OnInit } from '@angular/core';
import { Todo } from "./../model/todo";
import { TodoService } from "./../services/todo.service";
import { Observable } from "rxjs";
import { MatDialog } from '@angular/material';
import { TodoDetailViewComponent } from "../todo-detail-view/todo-detail-view.component";
import { TodoDetailEditComponent } from "../todo-detail-edit/todo-detail-edit.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  title = 'todo-app';
  todoList: Array<Todo>;

  constructor(public todoService: TodoService,
    public dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(){
    let todoList$: Observable<Array<Todo>> = this.todoService.getTodoList();
    todoList$.subscribe(todoList => {
      this.todoList = todoList;
    });
  }

  deleteTodo(id:string) {
    this.todoService.deleteTodo(id).subscribe(response => {
      console.log(response); 
      this.getTodo()
    });
  }

  openTodoDetail(todo:any) {
    console.log(todo);
    let dialogRef = this.dialog.open(TodoDetailViewComponent, {
        // panelClass: 'todoModal',
        height: '200px',
        width: '200px',
        data: { 
          title:todo.title,
          description:todo.description,
          dueDate:todo.dueDate,
          completed:todo.completed         
        }
      });   
  }

  updateTodoDetails(todo) {
    let dialogRef = this.dialog.open(TodoDetailEditComponent, {
      // panelClass: 'todoModal',
      height: '500px',
      width: '400px',
      data: { 
        create: false,
        title:todo.title,
        description:todo.description,
        dueDate:todo.dueDate,
        completed:todo.completed,  
        id:todo.id       
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getTodo();
    })
  }

  createTodo() {
    this.todoService.create=true;
    let dialogRef = this.dialog.open(TodoDetailEditComponent, {
      // panelClass: 'todoModal',
      height: '500px',
      width: '400px',
      data: { 
        create: true,
        title:"",
        description:"",
        dueDate:"",
        completed:""    
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getTodo();
    })
  }

}
