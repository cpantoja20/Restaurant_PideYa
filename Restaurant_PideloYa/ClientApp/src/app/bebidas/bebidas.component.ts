import { Component, OnInit } from '@angular/core';
import{ServicioService} from '../services/servicio.service';
import { Producto} from '../models/producto';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
  productos : Producto[];
  constructor(private services :ServicioService) { }

  ngOnInit() {
    this.services.get().subscribe(result =>{
   
    });
  }

}
