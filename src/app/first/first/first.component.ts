import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private srv:LogService) { }

  ngOnInit(): void {
    console.log('FirstComponent init');
    this.srv.use()
    
  }

}
