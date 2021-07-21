import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task.model';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
/** The list of tasks */
@Input() tasks: Task[] = [];

/** Checks if it's in loading state */
@Input() loading = false;

/** Event to change the task to pinned */
// tslint:disable-next-line: no-output-on-prefix
@Output()
onPinTask = new EventEmitter<Event>();

/** Event to change the task to archived */
// tslint:disable-next-line: no-output-on-prefix
@Output()
onArchiveTask = new EventEmitter<Event>();
}
