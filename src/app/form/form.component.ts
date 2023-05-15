import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
[x: string]: any;


  // Creamos un grupo de tipo FormGorup que luego lo inicializo abajo en el constructor
    gatosForm: FormGroup

    // Boolean para detectar luego un error

    isError = false;

    // Creo un array tipo any (caulquier cosa lo inicializo a 0)
    arrGatos: any [] = []

    // Inicializamos el formulario y lo agrupamos en un grupo 
  constructor(private fb : FormBuilder){
    this.gatosForm = this.fb.group({  // accedo al grupo formulario 

      'name': ['', Validators.required],  // campo requerido
      'raza': ['', Validators.required]

    })
   
  }

  // Creo una funcion que va a capturar en dos variables en una el nombre del gato y en otro la raza
  // estoy accediendo al formulario al valor del campo name y al de raza
  sendData(){

    let gatoName = this.gatosForm.value.name
    let gatoRaza =  this.gatosForm.value.raza

    // Hago una comprobacion de que lleguen los datos si esta vacio saco cartel de error

    if(gatoRaza.length == 0 || gatoName == 0){
      this.isError = true;
      return // para detener la ejecución
    }else{
      this.isError = false;
    }

    this.arrGatos.push({ id: this.arrGatos.length, name: gatoName, raza: gatoRaza}) // añado los gatos a la lista

    this.gatosForm.patchValue({ name:"", raza:""})  // limpio los campos input los dejo vacios
  }

  // elimino mediante el id 
  eliminar(id: number) {
    this.arrGatos = this.arrGatos.filter (g => g.id != id)
    }

}

