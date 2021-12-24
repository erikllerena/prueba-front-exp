import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterSearch } from 'src/app/shared/models/FilterSearch';
import { RecipeResponse } from 'src/app/shared/models/RecipeResponse';
import { FoodApiService } from 'src/app/shared/services/food-api.service';
import { TOKEN_FOOD } from 'src/app/shared/utils/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-busqueda-receta',
  templateUrl: './busqueda-receta.component.html',
  styleUrls: ['./busqueda-receta.component.sass']
})
export class BusquedaRecetaComponent implements OnInit {

  recipeResponse: RecipeResponse = {} as RecipeResponse;
  params = {} as any;

  options: Options = {
    floor: 0,
    ceil: 200
  };

  constructor(private route: ActivatedRoute,
              private foodApiService: FoodApiService,
              private router: Router) {
    this.params!.apiKey = TOKEN_FOOD;
    this.params!.maxFat = 0;
    this.params!.number = 10;
  }

  async ngOnInit() {
    if(this.route.snapshot.queryParams.query) this.params!.query = this.route.snapshot.queryParams.query
    if(this.route.snapshot.queryParams.maxFat) this.params!.maxFat = this.route.snapshot.queryParams.maxFat
    if(this.route.snapshot.queryParams.number) this.params!.number = this.route.snapshot.queryParams.number
    this.recipeResponse = await this.loadRecetas(this.params);
  }

  async clicBuscarRecetas() {
    this.router.navigate(['./busqueda-receta'], { queryParams: this.params });
    try {
      this.recipeResponse = await this.loadRecetas(this.params);
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Está fallando la conexión con el api-food'
      })
    }
  }

  async loadRecetas(paramsLoad: any) {
    const paramsQuery = this.validarParametros(paramsLoad);
    return await this.foodApiService.buscarRecetas(paramsQuery).toPromise();
  }

  validarParametros(params: any) {
    const paramsQuery = {} as any;
    paramsQuery.apiKey = params.apiKey;
    if(params.query != "" && params.query) paramsQuery.query = params.query;
    if(params.number != null && params.number) paramsQuery.number = +params.number;
    paramsQuery.maxFat = +params.maxFat;
    return paramsQuery;
  }

  iraStatus() {
    this.router.navigate(['/status'])
  }
}
