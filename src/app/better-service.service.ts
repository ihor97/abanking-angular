import { Injectable } from '@angular/core';

@Injectable()
export class BetterServiceService {

  private readonly id:number

  constructor(){
      console.log('Better Service Created');
      this.id=this.getRandomInt(0,101)
      
  }
  public use(){
      console.log('Service used '+ this.id);
  }
  private getRandomInt(min:number,max:number):number{
      min = Math.ceil(min)
      max=Math.ceil(max)
      return Math.floor(Math.random()*(max-min))
  }

}
