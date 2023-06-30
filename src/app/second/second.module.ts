import { InjectionToken, NgModule, isDevMode } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SecondComponent } from "./second/second.component";
import { LogService } from "../log.service";
import { BetterServiceService } from "../better-service.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

 export const LogServiceToken=new InjectionToken('')
 export interface ILogService{
    use():void
}

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
        provide:LogServiceToken,
        useFactory:()=>{
            // можна юзати різні класи в залежності від умови
            // можна динамічно в рантаймі підміняти сервіси 
            return isDevMode() ? new BetterServiceService() : new LogService()
        }
       },
    //    тут він видасть нам останній сервіс під цим іменем 
       {
        provide:'Hello',
        useClass:BetterServiceService
       },
       {
        provide:'test',
        useFactory:(httpHandler:HttpHandler)=>{
            return new HttpClient(httpHandler)
        },
        // deps для того щоб ми могли передавати залежності які потребує наш клас в колбеці useFactory
        deps:[HttpHandler]
       },
       {
        provide:'test2',
        // ми використовуємо те що з вже створено по якомусь ключу
        useExisting:LogServiceToken
    }

        
        ],
    exports:[RouterModule]
})
export class SecondModule{}