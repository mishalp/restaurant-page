import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact"

function createNav(){
    let container = document.getElementById('nav')
    let bar = document.createElement('div');
    bar.classList.add('bar');

    let homeTab = document.createElement('div');
    homeTab.classList.add('tabs');
    homeTab.setAttribute('id', 'home');
    homeTab.classList.add('selected');
    homeTab.innerHTML = "Home";

    let menuTab = document.createElement('div');
    menuTab.classList.add('tabs');
    menuTab.setAttribute('id', 'menu');
    menuTab.innerHTML = "Menu";

    let contactTab = document.createElement('div');
    contactTab.classList.add('tabs');
    contactTab.setAttribute('id', 'contact');
    contactTab.innerHTML = "Contact";

    bar.appendChild(homeTab)
    bar.appendChild(menuTab)
    bar.appendChild(contactTab)

    container.appendChild(bar)
}

function createFooter(){
    let container = document.getElementById('footer')
    let bar = document.createElement('div');
    bar.classList.add('bar');
    bar.classList.add('footer');
    let logo = document.createElement('img')

    logo.setAttribute('src', './img/github.png');

    let txt = document.createElement('p');

    txt.innerHTML = "@mishalp";
    bar.appendChild(logo);
    bar.appendChild(txt);
    container.appendChild(bar);
}

function clear(){
    let container = document.getElementById('main');
    container.innerHTML = "";
}

function loadMain(content, id){
    clear()
    if(id == 'home'){
        createHome(content);
    }else if(id == 'menu'){
        createMenu(content);
    }else if(id == 'contact'){
        createContact(content);
    }else return
}

export { loadMain, createNav, createFooter }