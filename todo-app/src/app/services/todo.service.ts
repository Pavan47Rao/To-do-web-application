import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from "./../model/todo";
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  todo: string;
  todoURL: string;
  create: boolean=false;

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
   * @param  {Todo} todo: Sticky {new todo object}
   * @return {Observable<Todo>} {Observable for saved todo object}
*/ 
  createTodo(toDo: Todo = null): Observable<Todo> {
    let newTodo: Todo;
    newTodo = toDo ? toDo : new Todo("","","no",new Date(),"");
    return this.http.post<Todo>(this.todoURL, newTodo);
  }

  /**
   * Updates a todo.
   *
   * @param  {Todo} todo: Todo {new todo object}
   * @return {Observable<Todo>} {Observable for saved todo object}
  */ 
  updateTodo(toDo: Todo): Observable<Todo> {
    let newTodo: Todo;
    newTodo = toDo ? toDo : new Todo("","","no",new Date(),"");
    return this.http.put<Todo>(this.todoURL+"/"+toDo.id, newTodo);
  }

/**
   * Deletes a todo.
   *
   * @param  {string} id: string {id of the todo object}
   * @return {Observable<{}>} {Observable for deleted todo object}
  */ 
  deleteTodo(id: string): Observable<{}> {
    let url = this.todoURL+"/"+id;
    return this.http.delete(url);
  }
}