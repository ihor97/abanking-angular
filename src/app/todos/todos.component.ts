import { Component, Input, OnChanges, OnInit, SimpleChanges ,ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { ITodo } from '../app.component';
import { HtmlRenderLoggerService } from '../html-render-logger-service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class TodosComponent implements OnInit, OnChanges {
  // на кожну компоненту виділяється свій ChangeDetector
  @Input() public todos: ITodo[] = []
  // ChangeDetectorRef еа кожну сущність свій. І ми можемо йому сказати перерисувати компоненту
  constructor(public logger:HtmlRenderLoggerService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
// виконуєтсья коли тільки міняються Input()
// так як  @Input() public todos: ITodo[] це в нас масив сама силка не помінялась і onChanes не відпрацював через це
console.log(changes);
// onPush- трігериться тільки при зміні силки на Input() (this.todos=[...this.todos,{title:'новий',isCompleted:false}])
    
  }

}