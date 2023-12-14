import { Apartment } from './../core/models/apartment';
import { Residence } from './../core/models/residence';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  //une seule instance pour tous
  providedIn: 'root'
})
export class ApartmentService {

  listResidences: Residence[]=[];

  constructor(private _http:HttpClient) {
    console.log("apartment service");
  }

  getResidences(){
    this.listResidences=[
      {id:1,"name": "El fel","address":"Borj Cedria",
      "image":"../../assets/images/R1.jpeg"},
      {id:2,"name": "El yasmine",
      "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
      {id:3,"name": "El Arij",
      "address":"Rades","image":"../../assets/images/R3.jpg"},
      {id:4,"name": "El Anber","address":"Manzah 5",
      "image":"../../assets/images/R4.jpg"}
      ];
      return this.listResidences;
  }

  getApartments(){
    return [
      {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"AppartementS+1","residence":this.listResidences[0] },
      {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"AppartementS+2","residence":this.listResidences[0] },
      {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"AppartementS+3","residence":this.listResidences[1] }]
  }

  getAllResidences(): Observable<Residence[]>{
    return this._http.get<Residence[]>("http://localhost:3000/residences");
  }
  getAllApartments(): Observable<Apartment[]>{
    return this._http.get<Apartment[]>("http://localhost:3000/apartments");
  }

  addApartment(a:Apartment):Observable<Apartment>{
    return this._http.post<Apartment>("http://localhost:3000/apartments",a)

  }

  deleteApartment(a:Apartment):Observable<Apartment>{
    return this._http.delete<Apartment>("http://localhost:3000/apartments/"+a.id)
  }
  getApartment(id:number):Observable<Apartment>{
    return this._http.get<Apartment>("http://localhost:3000/apartments/"+id);
  }
  updateApartment(a:Apartment):Observable<Apartment>{
    return this._http.put<Apartment>("http://localhost:3000/apartments/"+a.id,a)
  }

  deleteResidence(r:Residence):Observable<Residence>{
    return this._http.delete<Residence>("http://localhost:3000/residences/"+r.id)
  }
}
