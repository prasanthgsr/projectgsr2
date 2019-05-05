import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoService } from '../Service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-task-component',
  templateUrl: './list-task-component.component.html',
  styleUrls: ['./list-task-component.component.css']
})
export class ListTaskComponentComponent implements OnInit {

  todos:Todo[];
  public searchText:any;
  constructor(private userService : TodoService, private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem("username")!= null)
    {
      this.userService.getTodos().subscribe(data=>{
        this.todos=data;
      });
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  logOutuser():void
  {
    let result = confirm("Do you want to Log Off ?");
    if(result)
    {
      if(localStorage.getItem("username")!=null)
      {
        localStorage.removeItem("username");
        this.router.navigate(['/login']);
      }
    }
  }
  deleteTodo(todo:Todo):void
  {
    let result=confirm("Do you want to delete ?");
    if(result)
    {
      this.userService.deleteTodo(todo.id).subscribe(data=>
        {this.todos=this.todos.filter(u=>u!==todo);})
    }
  }
  editTodo(todo:Todo):void
  {
    let result=confirm("Do you want to edit the details ?");
    if(result)
    {
     localStorage.removeItem("editUserId");
     localStorage.setItem("editUserId", todo.id.toString());
     this.router.navigate(['/edit-task',todo.id.toString()]);
    }
  }
  addTodo():void
  {
    this.router.navigate(['add-task']);  
  }
}
