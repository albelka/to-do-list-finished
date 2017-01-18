import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
  <div>
    <div *ngIf="childSelectedTask">
      <h3>{{childSelectedTask.description}}</h3>
      <p>Task complete? {{childSelectedTask.done}}</p>
      <h3>Edit task</h3>
      <label>Enter task description:</label>
      <input [(ngModel)]="childSelectedTask.description">
      <label> Enter task priority (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="1">1 (Low priority)<br>
      <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="2">2 (Medium priority)<br>
      <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="3">3 (High priority)<br>
      <button (click)="doneButtonClicked()">Done editing</button>
      <button (click)="taskComplete()">Task complete</button>
    </div>
  </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() taskCompleteSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
  taskComplete() {
    this.taskCompleteSender.emit();
  }
}
