import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    // ми її вказуємо тут в квадратних скобках
    selector:'[long-press]'
})
export class LongPressDirective{
time:number
// @HostBinding('class.test') 

    constructor(private _element:ElementRef,private renderer:Renderer2){
        console.log(this._element.nativeElement);
        

    }
// привязуємо події мишки
    @HostListener('mousedown') onMouseLeave(){
        this.time=(new Date()).getTime()
        console.log('down');
        
    }


    @HostListener('mouseup') omMouseEnter(){
        this.time=((new Date()).getTime()-this.time)/1000
        console.log('up',this.time);
        // міняємо колір
        this.renderer.setStyle(this._element.nativeElement,'background-color','green')
    }

}