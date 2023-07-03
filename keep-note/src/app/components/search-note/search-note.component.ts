import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-search-note',
	templateUrl: './search-note.component.html',
	styleUrls: ['./search-note.component.css'],
})
export class SearchNoteComponent {
	searchText: string = '';

	@Output()
	searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText)
  }
}
