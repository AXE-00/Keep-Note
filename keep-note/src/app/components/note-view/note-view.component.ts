import { Component } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
	selector: 'app-note-view',
	templateUrl: './note-view.component.html',
	styleUrls: ['./note-view.component.css'],
})
export class NoteViewComponent {
	notes: Note[] = [];
	noteData: Note[] = [];

	search(response: string) {
		if (response === '' || !response) {
			this.notes = this.noteData;
		} else {
			this.notes = this.noteData;
			this.notes = this.notes?.filter((notes) =>
				notes.title?.startsWith(response)
			);
		}
	}
	insertsData(response: Note) {
		this.notes.push(response);
	}
}
