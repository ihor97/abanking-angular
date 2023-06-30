import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // сервіси ліниво створюються тому що в цій компоненті не має сервіса і відповідно він не буде створюватися
    // console.log('MainModule created');
    
  }

}
