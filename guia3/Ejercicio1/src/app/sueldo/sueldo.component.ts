import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'

@Component({
  selector: 'app-sueldo',
  templateUrl: './sueldo.component.html',
  styleUrls: ['./sueldo.component.css']
})
export class SueldoComponent implements OnInit {
registro=[];
alumno:any;
nombre:string;
mayor:string;
edad:number;
contador:number;

diss:number;
drenta:number;
dafp:number;
sueldof:number;
descuentos:number;

  constructor() { }

  ngOnInit(): void {
  this.edad=0;
this.nombre='';
this.contador=0;
/*this.diss=0.073;
this.drenta=0.11;
this.dafp=0.051;
this.sueldof=0;
this.descuentos=0;*/
  }

  ingresar(){
  this.diss=this.edad *0.073;
  this.drenta=this.edad *0.11;
  this.dafp=this.edad *0.051;
  this.descuentos=this.diss+this.drenta+this.dafp;
  this.sueldof=this.edad - this.descuentos;

/*ingresar(){
if(this.edad>0 && this.edad<18){
this.mayor='No'
}else{
this.mayor='Si'
}*/

this.alumno={"nombre":this.nombre,"edad":this.edad,"ISS":this.diss,"RENTA":this.drenta,"AFP":this.dafp,"sueldofinal":this.sueldof};
this.registro.push(this.alumno);
this.contador++;
}
}
