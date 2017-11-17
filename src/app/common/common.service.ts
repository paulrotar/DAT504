import { Injectable } from '@angular/core';
import { ToDoItem } from '../toDoListAdd/toDoItem.model';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class CommonService {
    public toDoList: ToDoItem[]
    public add_subject=new Subject<String>()

    constructor(private http : Http){
        this.toDoList = []
    }
 
    getToDo(){
        return this.http.post('/api/getToDo',{})
    }
}