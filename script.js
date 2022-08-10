'use strict';


const nicknames = document.querySelector('.name');
const content = document.querySelector('.content');


const contentDiv =
` <div> 
<h1 class="header">my name is <span id="mariam">mariam</span>.</h1>
<img src="./loveanya.png" alt="anya" class="img">
<h2 class="names">You can always call me <span class="auto-type"></span></h2>
</div>`;

content.insertAdjacentHTML('afterbegin', contentDiv);

const opt = {
    strings: [
    'Tucci: main character energy ', 
    'Diorla: dior fan', 
    'M.M.M: Mariam Making Money', 
    'Falisha: meaning Happiness', 
    'Morikoko: my roomies on this', 
    'Porero: potato; I am sweet girl',
     'Maridella: mariam & adeola combo', 
     'Pelebe: slim baby',
     'Mori: easy and funny',
      'Moriamo: lol, I am a yoruba girl'  
    ],
    typeSpeed:100,
    backSpeed:130,
    loop:true

    }

let typed = new Typed('.auto-type', opt);
