import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 anio: Number = new Date().getFullYear();
  constructor(public _infoPag:InfoPaginaService) { }

  ngOnInit(): void {

    
  }

}
