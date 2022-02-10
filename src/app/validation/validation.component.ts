import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  public readonly minTaskTitleLength: number = 3;
  public readonly maxTaskTitleLength: number = 20;
  public readonly taskTitlePattern: string = '[^ |　]';

  constructor() { }

  ngOnInit(): void {
  }

}
