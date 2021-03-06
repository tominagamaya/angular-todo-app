import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodoStore, TodoState } from './todo.store';

@Injectable({ providedIn: 'root' })
export class TodoQuery extends QueryEntity<TodoState> {

  constructor(protected override store: TodoStore) {
    super(store);
  }

}
