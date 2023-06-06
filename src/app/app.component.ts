import { Renderer2 } from '@angular/core';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // якщо ми звертаємось через ViewChild ми можемо получити доступ до силки тільки в afterViewInit
  @ViewChild('input') public input:ElementRef
  @ViewChild('button') public button:ElementRef
  // сюжи навіть можна передати компоненту 
  // доступ до компоненти 
  @ViewChild(LayoutComponent) public set test(component:LayoutComponent){
    component.say();
  }


  // кращий підхід через рендерер(застосовується в директивах)
constructor(private renderer2:Renderer2){

}

  ngAfterViewInit(): void {
  //  this.input.nativeElement.focus()
  //   this.renderer2.addClass(this.input.nativeElement,'width')
  //   const text:string=this.renderer2.createText('text')
  //   // добавляємо наш текст
  //   this.renderer2.appendChild(this.button.nativeElement,text)

  }

}