import { Component, DoCheck, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { HtmlRenderLoggerService } from '../html-render-logger-service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TextInputComponent implements OnInit,DoCheck {
public name:FormControl=new FormControl('')
  constructor(public logger:HtmlRenderLoggerService) { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    
  }

}
