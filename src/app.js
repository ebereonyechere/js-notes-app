import './scss/style.scss';
import NoteManager from "./NoteManager";

const noteManager = new NoteManager({
    el: document.querySelector('.notes'),
    notes: [
        {
            title: 'lorem ipsum',
            body: 'lorem ipsum dolar itmun higudio'
        },
        {
            title: 'lorem ipsum',
            body: 'lorem ipsum dolar itmun higudio'
        },
        {
            title: 'lorem ipsum',
            body: 'lorem ipsum dolar itmun higudio'
        }
    ]
});