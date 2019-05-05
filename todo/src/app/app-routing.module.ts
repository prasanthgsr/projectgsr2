import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AddTaskComponentComponent } from './add-task-component/add-task-component.component';
import { ListTaskComponentComponent } from './list-task-component/list-task-component.component';
import { EditTaskComponentComponent } from './edit-task-component/edit-task-component.component';

const routes: Routes = [
  {path:'home', component:HomeComponentComponent},
  {path:'login', component:LoginComponentComponent},
  {path:'add-task', component:AddTaskComponentComponent},
  {path:'list-task', component:ListTaskComponentComponent},
  {path:'edit-task/:id', component:EditTaskComponentComponent},
  {path:'', component:HomeComponentComponent},
  {path:'**', component:HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
