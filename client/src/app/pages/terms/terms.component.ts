import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  public environment = environment;

  constructor(
    private seoService: SeoService
  ) {
    this.seoService.generateTags();
  }

  ngOnInit(): void {
  }

}
