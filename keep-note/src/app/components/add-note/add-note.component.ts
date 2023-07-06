import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { KeepNoteService } from 'src/app/services/keep-note.service';

@Component({
	selector: 'app-add-note',
	templateUrl: './add-note.component.html',
	styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
	note: Note = {};

	@Output()
	noteAdded: EventEmitter<Note> = new EventEmitter<Note>();

	constructor(private noteAdd: KeepNoteService) {}

	addNote() {
		this.noteAdd.addNote(this.note).subscribe({
			next: (data) => {
				alert('Note added');
				this.noteAdded.emit(data);
				this.note = {};
			},
			error: (Error) => {
				alert('Failed to insert data');
				console.log(Error);
			},
		});
	}
}
