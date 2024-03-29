import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements AfterViewInit {

  // eslint-disable-next-line prettier/prettier
  constructor(private titleService: Title) {
    this.titleService.setTitle('Terms & Conditions | OVVisuals');
  }

  ngAfterViewInit() {
  //
  }

}
