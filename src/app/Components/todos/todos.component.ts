import { Component, OnInit } from '@angular/core';
import{ todo } from '../../Todo'; 
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos: todo[]; 
constructor(){
  
  this.todos=[
    {
      sno: 1, 
      title:"First Todo",
      desc: "this is the first todo",
      reminder: true
    }
  ]
 
}
ngOnInit() : void{

}
}
