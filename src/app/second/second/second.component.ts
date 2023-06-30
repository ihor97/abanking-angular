import { Component, Inject, OnInit  } from '@angular/core';
import { ILogService } from 'src/app/app.module';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {

  constructor(
    // як інжектити класи по інтерфейсу
    @Inject('Hello')
    private srv:ILogService,
    ) { }

  ngOnInit(): void {
    console.log('SecondComponent init');
  

  }

}
