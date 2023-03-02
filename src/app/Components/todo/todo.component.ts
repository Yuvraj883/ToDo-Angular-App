import { Component, EventEmitter, Input,Output } from '@angular/core';
import {Todo} from "../../Todo"; 

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  reminder:boolean;
  @Input() todo:Todo; 
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); 

  onClick(todo: Todo){
    this.deleteTodo.emit(todo); 
    console.log(todo.title); 
  }
}
