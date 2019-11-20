import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Todo } from "../model/todo";
import { FormBuilder, FormControl, Validators, FormGroup, NG_VALUE_ACCESSOR } from "@angular/forms";
import { TodoService } from "../services/todo.service";

@Component({
  selector: 'app-todo-detail-edit',
  templateUrl: './todo-detail-edit.component.html',
  styleUrls: ['./todo-detail-edit.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TodoDetailEditComponent),
    }
  ]
})
export class TodoDetailEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Todo,
  private _formBuilder: FormBuilder,
  private todoService: TodoService,
  public dialogRef: MatDialogRef<TodoDetailEditComponent>) { }
  toDoGroup: FormGroup;

  ngOnInit() {
    this.toDoGroup = this._formBuilder.group({
      title: [null, [Validators.required]],
      description: [null],
      dueDate: [null, [Validators.required]],
      completed: [null]
    });
  }

  saveTodo() {
    let todo: Todo = new Todo("","","",null,this.data.id);
    todo.id = this.data.id;
    todo.completed= this.toDoGroup.get('completed').value;
    todo.description= this.toDoGroup.get('description').value;
    todo.dueDate= this.toDoGroup.get('dueDate').value;
    todo.title= this.toDoGroup.get('title').value;
    this.todoService.updateTodo(todo).subscribe((response) => {
      //do something with the response
      console.log("Response is: ", response);
   },
   (error) => {
      //catch the error
      console.error("An error occurred, ", error);
   }); 
   this.dialogRef.close();
  }

  createTodo() {
    let todo: Todo = new Todo("","","",null,"");
    todo.id = "";
    todo.completed= this.toDoGroup.get('completed').value;
    todo.description= this.toDoGroup.get('description').value;
    todo.dueDate= this.toDoGroup.get('dueDate').value;
    todo.title= this.toDoGroup.get('title').value;
    this.todoService.createTodo(todo).subscribe((response) => {
      //do something with the response
      console.log("Response is: ", response);
   },
   (error) => {
      //catch the error
      console.error("An error occurred, ", error);
   }); 
   this.dialogRef.close();
  }
}
