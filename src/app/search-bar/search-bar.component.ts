import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.less'
})
export class SearchBarComponent {
  @Output() searchVal: EventEmitter<string> = new EventEmitter();

  searchString = ""
  changeSearch() {
    this.searchVal.emit(this.searchString)
  }
  clearSearch()
  {
    this.searchString = ""
    this.searchVal.emit(this.searchString)
  }
}
