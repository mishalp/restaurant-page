function createHome(content){
    let container = document.getElementById('main');
    let title = document.createElement('h1');
    let titleDiv = document.createElement('div')
    titleDiv.classList.add('title-div')
    title.innerHTML = content.title;

    titleDiv.appendChild(title)
    container.appendChild(titleDiv);

    let txt = document.createElement('p');
    let txtDiv = document.createElement('div');
    txtDiv.classList.add('txt-div');
    txt.innerHTML = content.txt;

    txtDiv.appendChild(txt);
    container.appendChild(txtDiv);

    let timesDiv = document.createElement('div');
    timesDiv.classList.add('times-div');
    let times = document.createElement('p');
    let timeTitle = document.createElement('h2');
    timeTitle.classList.add('time-title');
    timeTitle.innerHTML = content.time.title;

    times.innerHTML = "";
    content.time.times.forEach(time => {
        times.innerHTML += `${time}<br>`
    });

    timesDiv.appendChild(timeTitle);
    timesDiv.appendChild(times);

    container.appendChild(timesDiv); 

    let addDiv = document.createElement('div');
    addDiv.classList.add('times-div');
    let addTxt = document.createElement('p');
    let addTitle = document.createElement('h2');
    addTitle.classList.add('time-title');
    addTitle.innerHTML = content.add.title;
    addTxt.innerHTML = content.add.txt;

    addDiv.appendChild(addTitle);
    addDiv.appendChild(addTxt);
   
    container.appendChild(addDiv);
}

export { createHome }