import { Component, OnInit,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HtmlRenderLoggerService } from '../html-render-logger-service';
import { BehaviorSubject, Observable, interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
public count:BehaviorSubject<number>=new BehaviorSubject<number>(0)
// public count:Observable<number>
num=0
  constructor(public logger:HtmlRenderLoggerService,private _cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
// так як ангулар працює з дом то він всеодно ще трохи більше замедлює роботу 
// changeDetection - механізм 
// setInterval(()=>{
//   ++this.count
// },1000)


// this.count= new Observable<number>((sub)=>{
//   setInterval(()=>{
//     sub.next(++this.num)

//   },1000)
// })

interval(1000).subscribe(
()=>{
  this.count.next(this.count.getValue()+1)
}
)

// setInterval(()=>{
// this.num++
// // перерисвує компоненту
//     this._cdr.detectChanges()

// },1000)

}
}