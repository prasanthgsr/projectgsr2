import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-edit-task-component',
  templateUrl: './edit-task-component.component.html',
  styleUrls: ['./edit-task-component.component.css']
})
export class EditTaskComponentComponent implements OnInit {

  todo:Todo;
  editForm:FormGroup;
  submitted : boolean=false;
  todoId:string;
  constructor(private formBuilder:FormBuilder,
    private router:Router,private userService:TodoService,
    private route:ActivatedRoute)
     {this.route.params.subscribe(params=>this.todoId=params['id']);
      console.log(this.todoId);
    }
  ngOnInit() 
  {
    if(this.todoId!=null)
    {
      if(!this.todoId)
      {
        alert('Invalid Action');
        this.router.navigate(['/list-task']);
        return;
      }
      this.editForm=this.formBuilder.group({
        id:[],
        name:['',Validators.required],
        status:['',Validators.required]
      });        
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  onSubmit(){

    this.submitted=true;
    if(this.editForm.invalid)
    {
     return;
    }
    console.log(this.editForm.value);
    this.userService.updateTodo(this.editForm.value).subscribe(data=>{
    alert(this.editForm.controls.firstName.value+' record is updated Successfully...!');
    this.router.navigate(['/list-task']);
    })
   }
   logOutuser(): void {
    if (localStorage.getItem("username") != null) {
     localStorage.removeItem("username");
     this.router.navigate(['/login']);
    }
   }
}
