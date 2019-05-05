import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-add-task-component',
  templateUrl: './add-task-component.component.html',
  styleUrls: ['./add-task-component.component.css']
})
export class AddTaskComponentComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: TodoService) { }

  ngOnInit() 
  {
    this.addForm = this.formBuilder.group({

      id: [],
      name: ['', Validators.required],
      status: ['', Validators.required]
     });
  }
 onSubmit()
 {
  this.submitted=true;
  if(this.addForm.invalid)
  {
    return;
  }
  console.log(this.addForm.value);
  this.userService.createTodo(this.addForm.value).subscribe(

    data => {
     alert(this.addForm.controls.name.value + ' record is added Successfully...!');
     this.router.navigate(['/list-task']);
    })
 }
    logOutuser(): void 
    {
      let result = confirm("Do you want to Log Off?");
      if (result)
      {
      if (localStorage.getItem("username") != null) {
          localStorage.removeItem("username");
          this.router.navigate(['/login']);
      }
    }
  }
}
