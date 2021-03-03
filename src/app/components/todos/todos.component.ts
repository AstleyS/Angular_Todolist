import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  // This component has a list of Todos
  todos: Todo[];

  // Dependency injection: Providing this component access to the todoService
  constructor(
    private todoService: TodoService
  ) {}

  // On init of the component, we populate itself with the todos provided from the service
  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(
        todos => { this.todos = todos }
      );
  }

  // Delete the todo received from todo-item component  
  deleteTodo(todo: Todo) {
    this.todos = this.todos
    // Return all the todos except the todo to delete 
      .filter(
        t => t.id !== todo.id
      );
  }

  // Add todos received from todo-item component
  addTodo(todo: Todo) {
    
    // Check if the user input is undefined or empty. If it's not, push to the service
    if (todo.title !== undefined && todo.title.trim().length !== 0) {
      this.todoService.addTodo(todo)
        .subscribe(
          todo => { this.todos.push(todo) }
        )
    } 
  }
}
