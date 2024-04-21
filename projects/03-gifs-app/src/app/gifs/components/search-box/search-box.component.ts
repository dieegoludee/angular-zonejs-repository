import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  constructor() {}

  @ViewChild('txtTagInput')
  // ! not null operator
  public tagInput!: ElementRef<HTMLInputElement>;

  // searchTag(newTag: string): void {
  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });
  }
}
