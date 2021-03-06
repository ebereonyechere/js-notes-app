import Note from './Note';

export default class NoteManager {
    constructor({el, notes}) {
        this.el = el;
        this.notes = notes.map(note => new Note(note, this));

        this.renderNotes();
    }

    renderNotes() {
        this.el.innerHTML = '';
        this.notes.forEach(note => this.renderNote(note.getHTMLElement()));
    }

    renderNote(el) {
        this.el.appendChild(el);
    }
}