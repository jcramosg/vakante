import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-desplegados',
  templateUrl: './desplegados.component.html',
  styleUrls: ['./desplegados.component.css']
})
export class DesplegadosComponent implements OnInit {

  constructor(public productosService: ProductosService) { 

  }

  ngOnInit(): void {
  }

}
