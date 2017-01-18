import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>

    <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>

    <hr>
    <div *ngIf="selectedTask">
      <h3>{{selectedTask.description}}</h3>
      <p>Task complete? {{selectedTask.done}}</p>
      <h3>Edit task</h3>
      <label>Enter task description:</label>
      <input [(ngModel)]="selectedTask.description">
      <label> Enter task priority (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High priority)<br>
      <button (click)="finishedEditing()">Done editing</button>
      <button (click)="taskComplete()">Task complete</button>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;

  masterTaskList: Task[] = [
    new Task("Finish weekend Angular homework for Epicodus course", 3),
    new Task("Begin brainstorming possible JavaScript group projects", 2),
    new Task("Add README file to last few Angular repos on GitHub", 1)
  ];

  finishedEditing() {
    this.selectedTask = null;
  }


  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  taskComplete() {
    this.selectedTask.done = true;
  }


}
