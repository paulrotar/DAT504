import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { ToDoItem } from '../toDoListAdd/toDoItem.model';

@Component({
  selector: 'toDo-list',
  templateUrl: './toDolist.component.html',
  styleUrls: ['./toDolist.component.css']
})
export class ToDoListComponent implements OnInit {
    
    private toDoList:ToDoItem[]

    constructor(private commonService:CommonService) {

    }

    ngOnInit(){
        
        this.getAllToDoItems()
        
        this.commonService.add_subject.subscribe(response => {
            this.getAllToDoItems()
        })
        
    }
    
    getAllToDoItems(){
        this.commonService.getToDo().subscribe(res =>{
            this.toDoList = []
            res.json().data.map(e =>{
                this.toDoList.push(new ToDoItem(e.item,false));
            })
        })
    }
    
}