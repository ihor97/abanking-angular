import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SecondComponent } from "./second/second.component";
import { LogService } from "../log.service";


@NgModule({
    declarations:[
        SecondComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(
            [{path:'',component:SecondComponent}]
        )
    ],
    providers:[LogService],
    exports:[RouterModule]
})
export class SecondModule{}