import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  @Output() addTask = new EventEmitter();

  ngOnInit(): void {
  }

  newTask = {
    title: '',
    deadline: new Date(),
  };

  submit() {
    this.addTask.emit({title: this.newTask.title, done: false, deadline: new Date(this.newTask.deadline)})
    this.newTask = {title: '', deadline: new Date(),};
  }
}
