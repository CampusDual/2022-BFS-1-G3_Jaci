import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit{
  dateTime:Date;

  ngOnInit(){


   timer(0,1000).subscribe(()=>{
    this.dateTime=new Date()
   })

   /*

  INFO : https://angular.io/api/common/AsyncPipe

   import rxjs
   dateTime : Observable<Date>
-----------------------------------
   this.dateTime = timer (0, 1000).pipe(
    map(() =>{
      return new Date()
    })
  )
-----------------------------------
    {{dateTime | async | date : 'HH:mm'}}

   */

  }

}
