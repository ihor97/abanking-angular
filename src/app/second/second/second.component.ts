import { Component, OnInit, Self } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers:[LogService]
})
export class SecondComponent implements OnInit {

  constructor(
    // значить те що ця залежність має братися з місця де цей Self стоїть
    // тобто якщо сервіс буде запровайджений в модулі буде кидатися помилка
    @Self()
    private srv:LogService
    ) { }

  ngOnInit(): void {
    console.log('SecondComponent init');
    if(this.srv){
      this.srv.use()
    }
    
  }

}
