import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
 
 public tipos: any[] = [
    { id: 1, text: "Ingreso" },
    { id: 2, text: "Gasto" },
    { id: 3, text: "Expediente" }
  ];
  
    hideElement: boolean = false;
    hide(i){
    
      this.tipos.splice(i,1);
    }
}
