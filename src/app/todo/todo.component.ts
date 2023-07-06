import { Component, Input, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { ITodo } from '../app.component';
import { HtmlRenderLoggerService } from '../html-render-logger-service';

@Component({
  selector: 'app-child',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
@Input() todo:ITodo
  constructor(public logger:HtmlRenderLoggerService) { }

  ngOnInit(): void {
  }

}
