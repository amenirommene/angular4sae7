import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent {

  myForm:FormGroup;

  ngOnInit(){
    this.myForm=new FormGroup({ //FormGroup: le formulaire
      sousgroupe1:new FormGroup({
      appartNum:new FormControl('',[Validators.required,Validators.pattern("[1-9][0-9]*")]), //Form:champ du formulaire
      surface:new FormControl('',[Validators.required]),
      floorNum:new FormControl('', [Validators.required]),
      }),
      surfaceTerrace:new FormControl('', [Validators.required]),
    })  
  }

    get NumApart(){
      return this.myForm.get('sousgroupe1').get('appartNum');
    }
    get surface(){
      return this.myForm.get('sousgroupe1').get('surface');
    }
    get NumFloor(){
      return this.myForm.get('sousgroupe1').get('floorNum');
    }

    get sousgroupe1(){
      return this.myForm.get('sousgroupe1');
    }
}
