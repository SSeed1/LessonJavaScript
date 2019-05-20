'use strict';
let menu=document.getElementsByClassName('menu')[0],
    menuItem=document.getElementsByClassName('menu-item'),
    title=document.getElementById('title'),
    adv=document.getElementsByClassName('adv')[0],
    promptforApple=document.getElementById('#prompt'),
    menuItemLi=document.createElement('li');


    menuItemLi.classList.add("menu-item");                          
    menuItemLi.textContent = "Пятый элемент";                       
    menu.appendChild(menuItemLi);
    
    adv.remove();//удаление рекламы 

    document.body.style.backgroundImage="url('img/apple_true.jpg')";//изменение фона страницы

    title.textContent="Мы продаем подлиную технику Apple";//изменение текста на title

    let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
    promptforApple.textContent = yourOpinion;
   


    
