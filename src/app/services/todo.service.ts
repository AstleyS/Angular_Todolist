import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders(
    {
      // The Content-Type header is used to indicate the media type of the resource.
      'Content-Type': 'application/json'
    }
  )
}

// Dependency injection: All services in order to provide data to another component 
// they need the @Injectable decorator
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // URL of the API
  todosUrls:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5'

  todo = new BehaviorSubject<Todo>(new Todo);
  currentTodo = this.todo.asObservable();

  // we need to import the http module 
  constructor(private http:HttpClient) { }

  // Observable is an async data stream
  // This function get the list of todos of the request
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrls}${this.todosLimit}`);
  }

  // This function changes the todo state and updates on the api 
  toggleCompleted(todo): Observable<any> {
    const url = `${this.todosUrls}/${todo.id}`;
    console.log(url)
    return this.http.put(url, todo, httpOptions);
  }

  // This function deletes the todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrls}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // This function add the todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrls, todo, httpOptions);
  }

  // This function updates the todo (still not in the server)
  updateTodo(todo) {
    this.todo.next(todo);
  }

}

