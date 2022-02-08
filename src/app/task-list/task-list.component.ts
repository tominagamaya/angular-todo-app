import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  tasks: Task[] = [
    {title: 'ゴミを出す', done: false, deadline: new Date('2022-02-10')},
    {title: '納豆を買う', done: true, deadline: new Date('2022-02-11')},
    {title: '郵便局に行く', done: false, deadline: new Date('2021-02-12')},
  ];

  ngOnInit(): void {
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }
}
