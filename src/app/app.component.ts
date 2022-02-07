import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo-app';
  tasks = [
    {title: 'ゴミを出す', done: false},
    {title: '納豆を買う', done: true},
    {title: '郵便局に行く', done: false},
  ];

  newTaskTitle = '';

  addTask() {
    this.tasks.push({title: this.newTaskTitle, done: false});
    this.newTaskTitle = '';
  }
}
