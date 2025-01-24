
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear} | Rommel Juarez | Quito-Ecuador 🇪🇨`;

const lastModifiedElement = document.getElementById("lastModified");
const lastModified = document.lastModified;
lastModifiedElement.textContent = `${lastModified}`;


const businessListDiv = document.querySelector('#business-list-home');
const toggleViewButton = document.getElementById('toggle-view-btn');


function renderBusinesses(businesses) {
    businessListDiv.innerHTML = '';
    
    const filteredBusinesses = businesses.filter(business => business.membershipLevel === 2 || business.membershipLevel === 3);
    
    const shuffledBusinesses = filteredBusinesses.sort(() => 0.5 - Math.random());
    const selectedBusinesses = shuffledBusinesses.slice(0, 3);
    
    selectedBusinesses.forEach(business => {
        const card = document.createElement('div');
        card.classList.add('business-card');

        card.innerHTML = `
            <img src="${business.icon}" alt="${business.name} Logo">
            <h3>${business.name}</h3>
            <p>${business.description}</p>
            <p><strong>Address:</strong> ${business.address}</p>
            <p><strong>Phone:</strong> ${business.phone}</p>
        `;
        businessListDiv.appendChild(card);
    });
}

async function fetchBusinesses() {
    try {

        const response = await fetch('data/members.json');
        const data = await response.json();


        renderBusinesses(data);
    } catch (error) {
        console.error("Error fetching businesses:", error);
    }
}


fetchBusinesses();

