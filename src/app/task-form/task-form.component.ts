import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  @Output() addTask = new EventEmitter<Task>();

  ngOnInit(): void {
  }

  newTask = {
    title: '',
    deadline: null,
  };

  submit(): void {
    this.addTask.emit({
      title: this.newTask.title,
      done: false,
      deadline: this.newTask.deadline ? new Date(this.newTask.deadline) : undefined
    })
    this.newTask = {title: '', deadline: null,};
  }
}
