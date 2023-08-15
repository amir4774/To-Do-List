var myText = document.querySelector('textarea');
var form = document.querySelector('#my-form');
var output = document.querySelector('#output');
var Notes = /** @class */ (function () {
    function Notes() {
    }
    Notes.display = function () {
        var notes = Notes.getNotes();
        var out = '';
        notes.forEach(function (note, index) {
            out += "\n                <div class=\"bg-gray-100 w-full border border-gray-300 p-2 rounded my-4 rounded\" id=\"".concat(index, "\">\n                    <h3>Note: ").concat(index + 1, "</h3>\n                    <p class=\"p-2\">\n                        ").concat(note, "\n                    </p>\n                    <button onclick=\"deleteNotes(this.id)\" class=\"bg-red-600 w-8 h-8 text-white hover:bg-red-800\">X</button>\n                </div>\n            ");
        });
        if (notes.length > 0) {
            output.innerHTML = out;
        }
        else {
            output.innerHTML = "Nothing to show!";
        }
    };
    Notes.getNotes = function () {
        var notes;
        var storedNotes = localStorage.getItem('notes');
        if (storedNotes === null) {
            notes = [];
        }
        else {
            notes = JSON.parse(storedNotes);
        }
        return notes;
    };
    Notes.addNotes = function (text) {
        var notes = Notes.getNotes();
        notes.push(text);
        localStorage.setItem('notes', JSON.stringify(notes));
        Notes.display();
    };
    return Notes;
}());
function deleteNotes(id) {
    var notes = Notes.getNotes();
    notes.splice(id, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    Notes.display();
}
form.addEventListener('submit', function (e) {
    // e.preventDefault();
    if (myText.value !== '') {
        Notes.addNotes(myText.value);
    }
});
document.addEventListener('DOMContentLoaded', Notes.display);
