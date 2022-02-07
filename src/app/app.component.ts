import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo-app';
  tasks = [
    {title: 'ゴミを出す', done: false, deadline: new Date('2022-02-10')},
    {title: '納豆を買う', done: true, deadline: new Date('2022-02-11')},
    {title: '郵便局に行く', done: false, deadline: new Date('2022-02-12')},
  ];

  newTask = {
    title: '',
    deadline: new Date(),
  };

  addTask() {
    this.tasks.push({title: this.newTask.title, done: false, deadline: new Date(this.newTask.deadline)});
    this.newTask = {title: '', deadline: new Date(),};
  }
}
