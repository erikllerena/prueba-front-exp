import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  iraBusqueda() {
    this.router.navigate(['/busqueda-receta'])
  }

  iraStatus() {
    this.router.navigate(['/status'])
  }

}
