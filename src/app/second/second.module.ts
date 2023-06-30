import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SecondComponent } from "./second/second.component";
import { LogService } from "../log.service";
import { BetterServiceService } from "../better-service.service";


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
    providers:[
       {
        provide:'Hello',
        useClass:LogService
       },
    //    тут він видасть нам останній сервіс під цим іменем 
       {
        provide:'Hello',
        useClass:BetterServiceService
       }
        
        ],
    exports:[RouterModule]
})
export class SecondModule{}