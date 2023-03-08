let textarea = document.querySelector('textarea');
let create = document.querySelector('#create');
let save = document.querySelector('#save');
let notes = document.querySelector('#notes');
let links = document.querySelectorAll('li');


let texts = [
	'text1',
	'text2',
	'text3',
];

function createNote() {
    let newNote = textarea.value;
    texts.push(newNote);
    textarea.value = '';

    
    let newLink = document.createElement('li');
    newLink.innerHTML = 'Запись ' + texts.length;
    newLink.dataset.key = texts.length;
    notes.appendChild(newLink);
    newLink.addEventListener('click', function() {
        let other = [...this.parentNode.children].filter(n => n !== this);
        for (let element of other) {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
        this.classList.add('active');
        let num = this.getAttribute('data-key');
        textarea.value = texts[num - 1];
        save.dataset.mode = 'update';
        save.dataset.key = this.dataset.key;
    })
}

function updateNote() {
    let num = save.getAttribute('data-key');
    texts[num - 1] = textarea.value;
        
}

create.addEventListener('click', function() {
    save.dataset.mode = 'create';
    textarea.value = '';
})

save.addEventListener ('click', function() {
    let mode = this.dataset.mode;

    if (mode == 'create') {
        createNote();
	} 

    if (mode == 'update') {
        updateNote()
    }
})

for (let link of links) {
    link.addEventListener('click', function() {
        
        let other = [...this.parentNode.children].filter(n => n !== this);
        for (let element of other) {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
        this.classList.add('active');
        let num = this.getAttribute('data-key');
        textarea.value = texts[num - 1];
        save.dataset.mode = 'update';
        save.dataset.key = this.dataset.key;
    })
}
