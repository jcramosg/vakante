import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    cargando = true;
    productos: Producto[] = [];
    productosFiltrado: Producto[] =[];



  constructor( private http:HttpClient) { 
    this.cargarProductos();
  }


  private cargarProductos(){
  
    return new Promise((resolve, reject)=>{
      this.http.get('https://vakante-ee6fb-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( (resp: any) =>{
        this.productos = resp;
        this.cargando = false;
        resolve;

        });
    });



    
  }


  getProducto(id:string){

   return this.http.get(`https://vakante-ee6fb-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino:string){

      if(this.productos.length ===0){
        //cargarProductos
        this.cargarProductos().then(()=>{
        //filtrar despues de tener los productos
        this.filtrarProductos(termino);
        });

      }else{
        //filtro
        this.filtrarProductos(termino);
      }


    
      


/*     this.productosFiltrado = this.productos.filter(productos=>{
  return true; 
    });
        console.log(this.productosFiltrado);
        */
  }

  private filtrarProductos(termino:string){

//console.log(this.productos);
this.productosFiltrado=[];

termino= termino.toLowerCase();

  this.productos.forEach( (prod:any) =>{

    const tituloLower =prod.titulo.toLowerCase();
    
    if( prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
      this.productosFiltrado.push(prod);

    }

  })

  }


}
