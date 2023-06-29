import { NgModule } from "@angular/core";
import { FirstComponent } from "./first/first.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations:[
        FirstComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(
            [{path:'',component:FirstComponent}]
        )
    ],
    providers:[],
    exports:[RouterModule]
})
export class FirstModule{}