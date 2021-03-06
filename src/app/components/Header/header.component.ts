import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: `./header.component.html`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  { 

    private hideElement: boolean = true;
    private showElement: boolean = false;

    toggleElement(){
        if(this.hideElement){
            this.hideElement = false;}
        else
            this.hideElement = true;
    }
}