import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-todo-item',
  templateUrl: './update-todo-item.component.html',
  styleUrls: ['./update-todo-item.component.css']
})
export class UpdateTodoItemComponent implements OnInit {

  todo;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentTodo.subscribe(
      todo => this.todo = todo
    )
  }


}
