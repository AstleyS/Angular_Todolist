import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> =
    new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // This is a dynamic class
  setClasses() {
    let classes =
    {
      /*
        Controla o comportamento do item (neste caso estiliza)
        dependendo dos atributos do todo
      */
      todo: true,
      'is-complete': this.todo.completed
      
    }

    return classes;
  }

  // On toogle method to deal with change
  onToggle(todo) {
    console.log('onToggle');
    // toggle in ui
    this.todo.completed = todo.completed;
    // toggle on server
    this.todoService.toggleCompleted(todo).subscribe(
      todo =>
      {
        console.log(todo)
      }
    )
  
  }

  // On delete method to deal with delete todos
  onDelete(todo) {
    // Apaga no UI
    this.deleteTodo.emit(todo)
    // Apaga no servidor
    this.todoService.deleteTodo(todo).subscribe();
  }

}
