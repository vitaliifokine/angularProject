import { Component, Input } from '@angular/core';

@Component({
  selector: '.app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent  {
 
carName: string = "Ford";
year=2000;

getName(){
  return this.carName;
}

canAddCar: boolean=false;
addStatus: boolean=false;
inputText:string="";

@Input('astro')
astro: any;

@Input('astroDescription')
astroDescription: any;


addStatusInfo(){
  this.addStatus=true;
}

onKeyUp(event){
  this.inputText=event.target.value;
}

constructor(){
  setTimeout(()=>{this.canAddCar=true}, 4000);
}

ngOnInit(){
  astrol: this.astro;
  description: this.astroDescription;
}
}