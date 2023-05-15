import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  templateUrl: './page-service.component.html',
  styleUrls: ['./page-service.component.css']
})
export class PageServiceComponent implements OnInit {

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.myServices.push("demo");
  }

  // Creo dos variables una title y otra desc , luego las llamo dinamicamente del html {{nombre_variable}}
  // Creo un array de strings luego los llamo del html : service of myServices {{service}}

  title= "servicios";
  desc = "Texto dinamico de mis servicios que ofrezco"
  myServices = ["Electricista", "Albañil", "Fontanero", "Pintor"]

  // Creo una funcion que va recibir un string , y lo va a ñadir al array myServices.push(data)

  addService(data: string){

    this.myServices.push(data);
  }

}
