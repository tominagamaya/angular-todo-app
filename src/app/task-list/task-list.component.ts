import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  tasks = [
    {title: 'ゴミを出す', done: false, deadline: new Date('2022-02-10')},
    {title: '納豆を買う', done: true, deadline: new Date('2022-02-11')},
    {title: '郵便局に行く', done: false, deadline: new Date('2021-02-12')},
  ];

  ngOnInit(): void {
  }

  addTask(task: any) {
    this.tasks.push(task);
  }
}
