import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { Task } from '../../models/task';
import { TodoService } from '../task-form/todo';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  @Input() task?: any;

  ngOnInit(): void {
  }

  isOverdue(task?: Task): boolean {
    if (!task || !task.deadline) {
      return false;
    }
    return !task.done && task.deadline.getTime() < (new Date()).setHours(0, 0, 0, 0);
  }

  delete(id: ID):void {
    this.todoService.deleteTodo(id);
  }
}
