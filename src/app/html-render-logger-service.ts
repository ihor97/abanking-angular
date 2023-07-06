import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class HtmlRenderLoggerService{ 

    public handleHtmlRender(componentName:string,color:string):void{
        // %c другою властивістю буде css властивість  і все що написано в цьому лозі буде того кольору
        console.log(`%cRender: ${componentName}`, `color: ${color}`);
        
    }
}