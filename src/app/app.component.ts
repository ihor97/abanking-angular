import { Component,ChangeDetectionStrategy } from '@angular/core';
import { bigState } from './big';
import { HtmlRenderLoggerService } from './html-render-logger-service';


export interface ITodo{
  title:string,
  isCompleted:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // воно буде давати команду перерисовувати тоді коли буде мінятися Input()
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  title = 'abanking-angular';
  public todos:ITodo[]=bigState
  constructor(public logger: HtmlRenderLoggerService){
  }
  public pushInTodos(){
    // так можна зробити так щоб була нова силка
    // метод push вертає довжину масиву
    this.todos=[...this.todos,{title:'новий',isCompleted:false}]
  
   
  }
}
