import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  // Because we want to pass the todo that we added for another component (parent)
  // We need to emit it and label it as @Output
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }


}
