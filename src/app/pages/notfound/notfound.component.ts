import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.sass']
})
export class NotfoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  iraStatus() {
    this.router.navigate(['/status'])
  }
}
