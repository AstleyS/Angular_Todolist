import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './components/todos/todos.component'
import { UpdateTodoItemComponent } from './components/update-todo-item/update-todo-item.component'

const routes: Routes = [
  {
    path: '', component: TodosComponent
  },
  {
    path: 'todos/:id', component: UpdateTodoItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
