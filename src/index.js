import { loadMain, createNav, createFooter } from "./pageload";
import { home, menu, contact } from './data.js'


let navs = ['home','menu','contact']
createNav();
loadMain(home, 'home');
createFooter();

let btns = document.querySelectorAll('.tabs');

btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        navs.forEach(nav=>{
            document.getElementById(nav).classList.remove('selected');
        })
        btn.classList.add('selected');

        if(btn.id == 'home'){
            loadMain(home, btn.id);
        }else if(btn.id == 'menu'){
            loadMain(menu, btn.id);
        }else{
            loadMain(contact, btn.id);
        }
    })
})