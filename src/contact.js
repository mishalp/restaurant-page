function createContact(content){
    let container = document.getElementById('main');
    let title = document.createElement('h1')
    let titleDiv = document.createElement('div')
    titleDiv.classList.add('title-div')
    title.innerHTML = content.title;

    titleDiv.appendChild(title)
    container.appendChild(titleDiv);

    let contactDiv = document.createElement('div')
    contactDiv.classList.add('contact-div');

    content.persons.forEach(person => {
        let card = document.createElement('div')
        card.classList.add('contact-card');
        let name = document.createElement('h2');
        name.innerHTML = person.name;
        let pos = document.createElement('p');
        pos.classList.add('pos');
        pos.innerHTML = person.pos;

        let mobile = document.createElement('p');
        mobile.classList.add('mobile');
        mobile.innerHTML = `Mobile: ${person.mobile}`;

        let mail = document.createElement('p');
        mail.classList.add('mail');
        mail.innerHTML = `E-mail: ${person.mail}`;

        card.appendChild(name);
        card.appendChild(pos);
        card.appendChild(mobile);
        card.appendChild(mail);

        contactDiv.appendChild(card)

    });
    container.appendChild(contactDiv);
}

export { createContact }