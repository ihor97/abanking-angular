import { Component, Inject, OnInit  } from '@angular/core';
import { LogService } from 'src/app/log.service';
import { ILogService, LogServiceToken } from '../second.module';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {

  constructor(
    // як інжектити класи по інтерфейсу
    @Inject(LogServiceToken)
    private srv:ILogService,
    ) { }

  ngOnInit(): void {
    console.log('SecondComponent init');
  

  }

}
