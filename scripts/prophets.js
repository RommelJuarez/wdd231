const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


async function getProphetData(url) {
    const response= await fetch(url);
    if (response.ok){
        const data= await response.json();
       // console.table(data.prophets);
       displayProphets(data.prophets);
    }
    
}

const displayProphets=(prophets)=>{
    const cards = document.querySelector('#cards');
    prophets.forEach((prophet) => {
        let card= document.createElement('section');
        let fullName=document.createElement('h2');
        let dateBirth=document.createElement('p');
        let placeBirth=document.createElement('p');
        let portrait=document.createElement('img');
        fullName.textContent=`${prophet.name} ${prophet.lastname}`;
        dateBirth.textContent=`Date of Birth: ${prophet.birthdate} `;
        placeBirth.textContent=`Place of Birth: ${prophet.birthplace}`
        portrait.setAttribute('src',prophet.imageurl);
        portrait.setAttribute('alt',`Prophet ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width','150');
        portrait.setAttribute('height','200');
        card.appendChild(fullName);
        card.appendChild(dateBirth);
        card.appendChild(placeBirth);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

getProphetData(url);