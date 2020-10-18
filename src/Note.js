export default class Note {
    constructor({title, body}, noteManager) {
        this.title = title;
        this.body = body;
        this.manager = noteManager;
        this.el = null
    }

    getHTMLElement() {
        const tpl = this.getHTMLTemplate();
        const tmpDiv = document.createElement('div');
        tmpDiv.innerHTML = tpl.replace('{{title}}', this.title).replace('{{body}}', this.body);
        this.el = tmpDiv.children[0];

        return this.el;
    }

    getHTMLTemplate() {
        return `
            <div class="note">
                <div class="note-header"><span class="note-close"><i class="fas fa-times"></i></span></div>
                <div class="note-title" contenteditable="">{{title}}</div>
                <div class="note-body" contenteditable="">{{body}}</div>
            </div>
        `;
    }
}