const myText = document.querySelector('textarea');
const form = document.querySelector('#my-form');
const output = document.querySelector('#output'); 

class Notes {
    static display() {
        const notes = Notes.getNotes();
        let out = '';
        notes.forEach((note, index) => {
            out += `
                <div class="bg-gray-100 w-full border border-gray-300 p-2 rounded my-4 rounded" id="${index}">
                    <h3>Note: ${index + 1}</h3>
                    <p class="p-2">
                        ${note}
                    </p>
                    <button onclick="deleteNotes(this.id)" class="bg-red-600 w-8 h-8 text-white hover:bg-red-800">X</button>
                </div>
            `;
        });
        if(notes.length > 0) {
            output.innerHTML = out;
        } else {
            output.innerHTML = `Nothing to show!`;
        }
    }

    static getNotes() {
        let notes;
        if(localStorage.getItem('notes') === null) {
            notes = [];
        } else {
            notes = JSON.parse(localStorage.getItem('notes'));
        }
        return notes;
    }

    static addNotes(text) {
        const notes = Notes.getNotes();
        notes.push(text);

        localStorage.setItem('notes', JSON.stringify(notes));
        UI.display();
    }
}

function deleteNotes(id) {
    const notes = Notes.getNotes();
    notes.splice(id, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    Notes.display();
}

form.addEventListener('submit', (e) => {
    // e.preventDefault();
    if(myText.value !== '') {
        Notes.addNotes(myText.value);
    }
});

document.addEventListener('DOMContentLoaded', Notes.display);