import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-ngx-loader',
  templateUrl: './ngx-loader.component.html',
  styleUrls: ['./ngx-loader.component.sass']
})
export class NgxLoaderComponent implements OnInit {

  show = false;
  private subscription: Subscription = {} as Subscription;
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.subscription = this.loaderService.isLoading.subscribe(
      response => this.show = response
    );
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
