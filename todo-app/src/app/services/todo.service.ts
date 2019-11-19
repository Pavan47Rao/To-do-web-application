import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from "./../model/todo";
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  todo: string;
  todoURL: string;

  /**
   * Constructor
  */
  constructor(private http: HttpClient) {
    this.todo = 'todo';
    this.todoURL = `${environment.serverBaseURL}/${this.todo}`;
  }

  /**
   * Returns all todo items.
   *
   * @return {Observable<Array<Todo>>} {Observable sticky array of todo}
  
  */
  getTodoList(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.todoURL);
  }


/**
   * Creates new todo.
   *
   * @param  {Todo} sticky: Sticky {new todo object}
   * @return {Observable<Todo>} {Observable for saved todo object}
*/ 
  createTodo(toDo: Todo = null): Observable<Todo> {
    let newTodo: Todo;
    newTodo = toDo ? toDo : new Todo("","",false,new Date());
    return this.http.post<Todo>(this.todoURL, newTodo);
  }
}