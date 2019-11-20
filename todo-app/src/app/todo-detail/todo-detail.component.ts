import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Todo } from "../model/todo";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Todo) { }

  ngOnInit() {
    console.log(this.data);
  }

}
