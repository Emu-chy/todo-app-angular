import { Component } from '@angular/core';
import { ITodo } from './todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-App';

  get intiTodo(): ITodo {
    return {

      id: null,
      title: ''
    }
  }
  searchELement: string = ''
  todoLists: ITodo[] = [];
  todo: ITodo = this.intiTodo;

  //add data and also add data after edit
  onAdd(): void {
    if (this.todo.id) {
      const findTodo = this.todoLists.find(item => item.id === this.todo.id)
      if (findTodo) {
        findTodo.title = this.todo.title
      }
    } else {
      this.todo.id = Date.now()
      this.todoLists.push({ ...this.todo })
    }

    this.todo = this.intiTodo;
  }

  //for edit data
  onEditTodo(editTodo: ITodo) {
    this.todo = { ...editTodo };
  }

  //for delete data
  onDeleteTodo(id: number) {
    this.todoLists = this.todoLists.filter(item => item.id !== id)
  }

}
