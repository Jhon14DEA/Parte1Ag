import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listado: any = []

  constructor(private router: Router,private contactosService: ContactosService) { }

  ngOnInit(): void {
    this.loadContactos()
  }


  loadContactos(){
    this.listado = this.contactosService.getListaContactos()
  }

  goContactos(){
    this.router.navigate(['pages/contactos'])
  }

}
