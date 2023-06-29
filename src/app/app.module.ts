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
    providers:[LogService],
    exports:[RouterModule],
    declarations:[AppComponent,MainComponent],
    bootstrap:[AppComponent]

})
export class AppModule{}