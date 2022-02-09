import { Component, OnInit } from '@angular/core';
import { getEntityType } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { TodoQuery, TodoService, TodoState } from '../task-form/todo';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  readonly allTodo$: Observable<getEntityType<TodoState>[]>;
  tasks: Task[] = [
    {title: 'ゴミを出す', done: false, deadline: new Date('2022-02-10')},
    {title: '納豆を買う', done: true, deadline: new Date('2022-02-11')},
    {title: '郵便局に行く', done: false, deadline: new Date('2021-02-12')},
  ];

  constructor(private todoService: TodoService, private todoQuery: TodoQuery) {
    this.allTodo$ = this.todoQuery.selectAll();
  }

  ngOnInit(): void {
    this.tasks.map((task) => this.addTask(task));
  }

  addTask(task: Task): void {
    this.todoService.addTodo(task);
  }
}
