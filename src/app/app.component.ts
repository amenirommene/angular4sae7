import { TestComponent } from './test/test.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  //monfils : propriété
  @ViewChild(TestComponent) monfils: TestComponent;
  title = 'Bonjour AngularSAE7';
  style1={'background-color':'red'};
  ngAfterViewInit(){
   console.log(this.monfils.prop2);
  }
  f(ch:string){
    console.log("test"+" "+ch);
  }
  test(n:string){
    alert("je suis le parent "+n);
  }
}
