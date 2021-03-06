import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/firebase/auth/auth.service';
import { ProductsService } from '../../services/firebase/products/products.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SeoService } from '../../services/seo/seo.service';
import { environment } from './../../../environments/environment';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ NgbTypeaheadConfig ] // add NgbTypeaheadConfig to the component providers
})
export class ProductsComponent implements OnInit {
  public _ = _;
  public environment = environment;
  public collection: string;
  public searchTerm: any;
  public products: Array<Object>;
  public searchOptions: Array<String>;
  public orderByOptions: Array<Object> = [
    {
      label: 'Product Titler: A - Z',
      type: 'title',
      direction: 'asc'
    },
    {
      label: 'Product Titler: Z - A',
      type: 'title',
      direction: 'desc'
    }
  ];
  public selectedOrderBy: Object;

  public orderByDirection: string;
  public orderByType: string;

  public isLoading = true;

  constructor(
    public authService: AuthService,
    private productsService: ProductsService,
    private config: NgbTypeaheadConfig,
    private spinner: NgxSpinnerService,
    private seoService: SeoService,
    private router: Router
  ) {
    this.collection = this.router.url.split('/')[1];
    if (_.isEmpty(this.collection) || _.isNil(this.collection)) {
      this.collection = 'products';
    }
  }

  ngOnInit(): void {
    this.seoService.generateTags({
      description: 'Search for top recommended and trending travel gears!'
    });
    this.spinner.show();
    this.productsService.getCollection(this.collection).subscribe(products => {
      this.products = products;
      this.searchOptions = _.map(products, (product) => product.title);
      this.isLoading = false;
      this.spinner.hide();
    }, () => {
      this.isLoading = false;
      this.spinner.hide();
    });
    // customize default values of typeaheads used by this component tree
    this.config.showHint = true;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(0),
      distinctUntilChanged(),
      map(term => term.length < 4 ? []
        : this.searchOptions.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))
    )
}
