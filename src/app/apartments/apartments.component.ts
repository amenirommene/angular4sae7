import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
id : number;
//on a injecté le service ActivatedRoute
  constructor(private ac:ActivatedRoute){
    console.log("constructor");
  }
  //méthode hook : 
  ngOnInit(){
    console.log("onInit");
  //this.id=this.ac.snapshot.params['id'];
  this.ac.paramMap.subscribe(res=>this.id=Number(res.get('id')));
  }
}
