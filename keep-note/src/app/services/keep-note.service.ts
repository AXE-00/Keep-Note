import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
	providedIn: 'root',
})
export class KeepNoteService {
	constructor(private httpService: HttpClient) {}
	URL: string = 'http://localhost:3000/notes';

	getNotes(): Observable<Array<Note>> {
		return this.httpService.get<Array<Note>>(this.URL);
	}

	addNote(addNote:Note){
		return this.httpService.post<Note>(this.URL,addNote)
	}
}
