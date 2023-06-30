import { NgModule } from "@angular/core";
import { FirstComponent } from "./first/first.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LogService } from "../log.service";


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
    // таким чином будемо юзати вже відмінний інстанс від того що в app.module.ts
    // компонента чекає в своїх providers якщо не знаходить то йде в first.module
    exports:[RouterModule]
})
export class FirstModule{}