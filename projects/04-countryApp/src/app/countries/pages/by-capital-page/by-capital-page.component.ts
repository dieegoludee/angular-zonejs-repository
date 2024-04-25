import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  searchByCapital(term: string): void {
    console.log('Desde ByCapitalPage');
    console.log({ term });
  }
}
