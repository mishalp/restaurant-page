function createMenu(content){
    let container = document.getElementById('main');
    let title = document.createElement('h1');
    let titleDiv = document.createElement('div')
    titleDiv.classList.add('title-div')
    title.innerHTML = content.title;

    titleDiv.appendChild(title)
    container.appendChild(titleDiv);

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card-div');
    content.items.forEach(item => {
        let card = document.createElement('div');
        card.classList.add('card');
        let name = document.createElement('h3');
        name.innerHTML = item.name;
        let txt = document.createElement('p');
        txt.innerHTML = item.discription;
        let price = document.createElement('span');
        price.innerHTML = item.price;
        let img = document.createElement('img');
        img.setAttribute('src', item.path);

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(txt);
        card.appendChild(price);

        cardDiv.appendChild(card);
        container.appendChild(cardDiv);
    });
}


export { createMenu }