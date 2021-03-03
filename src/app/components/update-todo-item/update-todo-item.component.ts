import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-update-todo-item',
  templateUrl: './update-todo-item.component.html',
  styleUrls: ['./update-todo-item.component.css']
})
export class UpdateTodoItemComponent implements OnInit {

  todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todo.currentTodo
    .subscribe(
      todo => this.todo = todo
    )
  }
}
