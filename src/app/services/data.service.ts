import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todo = new BehaviorSubject<Todo>(new Todo);
  currentTodo = this.todo.asObservable();
 
  constructor() {}

  updateTodo(todo) {
    this.todo.next(todo);
  }

}
