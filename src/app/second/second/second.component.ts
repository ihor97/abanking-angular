import { Component, Inject, OnInit  } from '@angular/core';
import { ILogService } from 'src/app/app.module';
import { LogService } from 'src/app/log.service';
import { LogServiceToken } from '../second.module';

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
