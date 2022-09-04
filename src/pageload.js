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

function clear(){
    let container = document.getElementById('main');
    container.innerHTML = ""
}

function loadMain(content, id){
    clear()
    if(id == 'home'){
        createHome(content);
    }else if(id == 'menu'){
       // createMenu(content);
    }else{
       // createContact(content);
    }
}

function createHome(content){
    let container = document.getElementById('main');
    let title = document.createElement('h1');
    let titleDiv = document.createElement('div')
    titleDiv.classList.add('titleDiv')
    title.innerHTML = content.title;

    titleDiv.appendChild(title)
    container.appendChild(titleDiv);

    let txt = document.createElement('p');
    let txtDiv = document.createElement('div');
    txtDiv.classList.add('txtDiv');
    txt.innerHTML = content.txt;

    txtDiv.appendChild(txt);
    container.appendChild(txtDiv);

    let timesDiv = document.createElement('div');
    timesDiv.classList.add('timesDiv');
    let times = document.createElement('p');
    times.innerHTML = `<h2>Hours</h2><br>Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm
        <br>Thursday: 6am - 10pm<br>
        Friday: 6am - 10pm<br>
        Saturday: 8am - 10pm`;
    timesDiv.appendChild(times);

    container.appendChild(timesDiv); 
   
}

export { loadMain, createNav }