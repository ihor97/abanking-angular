import { Component, OnInit, Self, SkipSelf } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers:[LogService]
})
export class SecondComponent implements OnInit {

  constructor(
    // якщо у компоненті є провайдер сервіса то він його заскіпає 
    @SkipSelf()
    private srv:LogService,
    // тут ми маємо один сервіс що скіпає свої провайдери а другий що бере тільки зі своєї компоненти 
    @Self()
    private srv2:LogService,
    ) { }

  ngOnInit(): void {
    console.log('SecondComponent init');
    if(this.srv){
      this.srv.use()
    }
    
  }

}
