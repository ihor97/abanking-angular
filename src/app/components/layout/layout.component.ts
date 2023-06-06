import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
@Input() public prop:boolean
  constructor() { }

  ngOnInit(): void {
    console.log(this.prop);
    
  }
 public say(){
  console.log('access to layout');
  
}
}
