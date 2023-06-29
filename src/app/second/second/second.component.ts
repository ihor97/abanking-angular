import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private srv:LogService) { }

  ngOnInit(): void {
    console.log('SecondComponent init');
    this.srv.use()
    
  }

}
