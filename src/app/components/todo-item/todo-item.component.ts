import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // Because we take in the todo from componet with [todo], we need to label it as an Input
  @Input() todo: Todo;
  // Because we take out the todo (on delete) we need to label it as an Output
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // This is a dynamic class
  setClasses() {
    let classes =
    {
      'is-completed': this.todo.completed
    }

    return classes;
  }

  // On toogle method to deal with change
  onToggle(todo) {
    console.log('onToggle');
    // toggle in ui
    this.todo.completed = !todo.completed;
    // toggle on server
    this.todoService.toggleCompleted(todo)
    .subscribe(
      todo =>
      {
        console.log(todo)
      }
    )
  
  }

  // On delete method to deal with delete todos
  onDelete(todo) {
    // Deletes on UI
    this.deleteTodo.emit(todo)
    // Deletes on server
    this.todoService.deleteTodo(todo).subscribe()
  }

}
