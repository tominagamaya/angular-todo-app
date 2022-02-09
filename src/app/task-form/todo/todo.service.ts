import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { guid } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { TodoStore } from './todo.store';
import { Task } from '../../../models/task';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(private todoStore: TodoStore, private http: HttpClient) {
  }

  addTodo(todo: Task) {
    this.todoStore.add({
      id: guid(),
      title: todo.title,
      done: todo.done,
      deadline: todo.deadline
    })
  }

  // get() {
  //   return this.http.get('').pipe(tap(entities => this.todoStore.set(entities)));
  // }

}
