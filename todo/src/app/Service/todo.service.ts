import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todo} from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  baseUrl:string='http://localhost:3000/todos/';

  getTodos()
  {
    return this.http.get<Todo[]>(this.baseUrl);
  }
  getTodoById(id:number)
  {
    return this.http.get<Todo>(this.baseUrl);
  }
  createTodo(user:Todo)
  {
    return this.http.post(this.baseUrl,user);
  }
  updateTodo(user:Todo)
  {
    return this.http.put(this.baseUrl+'/'+user.id,user);
  }
  deleteTodo(id:number)
  {
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
