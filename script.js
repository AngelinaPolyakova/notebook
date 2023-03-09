let textarea = document.querySelector('textarea');
    create = document.querySelector('#create');
    save = document.querySelector('#save');
    notes = document.querySelector('#notes');
    links = document.querySelectorAll('li');
    names = document.querySelectorAll('.name');
    closes = document.querySelectorAll('.close');


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
        newName = document.createElement('span');
        newClose = document.createElement('span');
    newName.classList.add('name');
    newClose.classList.add('close');
    newLink.appendChild(newName);
    newLink.appendChild(newClose);
    newName.innerHTML = 'Запись ' + texts.length;
    newLink.dataset.key = texts.length;
    notes.appendChild(newLink);
    newName.addEventListener('click', function() {
        let other = [...this.parentNode.parentNode.children].filter(n => n !== this);
        for (let element of other) {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
        this.parentNode.classList.add('active');
        let num = this.parentNode.getAttribute('data-key');
        textarea.value = texts[num - 1];
        save.dataset.mode = 'update';
        save.dataset.key = this.parentNode.dataset.key;
        
    })

    newClose.addEventListener('click', function() {
        this.parentNode.remove();
        textarea.value = '';
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

for (let item of names) {
    item.addEventListener('click', function() {
        
        let other = [...this.parentNode.parentNode.children].filter(n => n !== this);
        for (let element of other) {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
        this.parentNode.classList.add('active');
        let num = this.parentNode.getAttribute('data-key');
        textarea.value = texts[num - 1];
        save.dataset.mode = 'update';
        save.dataset.key = this.parentNode.dataset.key;
        console.log('hi')
    })
}

for (let item of closes) {
    item.addEventListener('click', function() {
        
        this.parentNode.remove()
        textarea.value = '';
    })
}

