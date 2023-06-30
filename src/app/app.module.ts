import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SecondModule } from "./second/second.module";
import { LogService } from "./log.service";
import { AppComponent } from "./app.component";





@NgModule({

    imports:[BrowserModule,RouterModule.forRoot([
        {path:'',component:MainComponent,pathMatch:'full'},
        {path:'first',loadChildren:()=>import('./first/first.module').then(m=>m.FirstModule),pathMatch:'full'},
        {path:'second',loadChildren:()=>SecondModule,pathMatch:'full'},

    ])],
    // якщо сервіс не знаходиться вибивається помилка з NullIjnector (тобто те що по дереву інстанс класа не знайшовся)
    // буде тільки один інстанс на всю апку
    exports:[RouterModule],
    declarations:[AppComponent,MainComponent],
    bootstrap:[AppComponent],
    providers:[LogService]
    // під капотом providers це є 
    //  providers:[{
        // {
        // provide:LogService, це є ніби ключ
        // useClass:LogService це сам клас
        // }
    // }]

})
export class AppModule{}