import { Apartment } from './../core/models/apartment';
import { ApartmentService } from './../shared/apartment.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApartmentsComponent } from '../apartments/apartments.component';
import { Residence } from '../core/models/residence';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent {

  constructor(private aps:ApartmentService, private _router:Router){}
  myForm:FormGroup;

  ngOnInit(){
    //this.aps.getApartments();
    this.myForm=new FormGroup({ //FormGroup: le formulaire
      sousgroupe1:new FormGroup({
      appartNum:new FormControl('',[Validators.required,Validators.pattern("[1-9][0-9]*")]), //Form:champ du formulaire
      surface:new FormControl('',[Validators.required]),
      floorNum:new FormControl('', [Validators.required]),
      }),
      surfaceTerrace:new FormControl('', [Validators.required]),
    })
  }
  addA(){
    let a : Apartment=new Apartment();
    a.residence=new Residence();
    //{id:1,appartNum:1,floorNum:0,surface:100,terrace:"oui",surfaceTerrace:20,category:"S+1",description:"AppartementS+1",residence:new Residence()};
    a.appartNum=this.NumApart?.value;
    a.surface=this.surface?.value;
    a.floorNum=this.NumFloor?.value;
    a.surfaceTerrace=this.sousgroupe1.get('surfaceTerrace')?.value;

   this.aps.addApartment(a).subscribe(()=>this._router.navigateByUrl("home"));
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
