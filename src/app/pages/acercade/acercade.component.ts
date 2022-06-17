import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.scss']
})
export class AcercadeComponent implements OnInit {
  
  fullname: string = ''

  constructor(private router: Router,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        console.log(params)
        this.fullname=params['nombre'] + ' ' + params['apellido']
      })
     }

  ngOnInit(): void {
  }

  goContactos(){
    this.router.navigate(['pages/contactos'])
  }

}
