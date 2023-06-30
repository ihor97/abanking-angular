import { Component, OnInit, Optional } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(
    // вказує на те що це опціональна залежність і замість Nullinjector  викинеться null
    @Optional()
    private srv:LogService
    ) { }

  ngOnInit(): void {
    console.log('SecondComponent init');
    // якщо в нас є ця залкжність виконуємо код
    if(this.srv){
      this.srv.use()
    }
    
  }

}
