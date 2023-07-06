import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { KeepNoteService } from 'src/app/services/keep-note.service';

@Component({
	selector: 'app-note-view',
	templateUrl: './note-view.component.html',
	styleUrls: ['./note-view.component.css'],
})
export class NoteViewComponent implements OnInit {
	notes: Note[] = [];
	noteData: Note[] = [];

	constructor(private noteService: KeepNoteService) {}
	ngOnInit(): void {
		this.noteService.getNotes().subscribe({
			next:notesData => {
				this.noteData = notesData;
				console.log(this.noteData);
				this.notes = this.noteData;
			},
			error:Error => {
				alert('failed to load');
				console.log(Error);
			},
		});
	}

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

	insertData(response:Note){
		this.notes.push(response)
	}
}
