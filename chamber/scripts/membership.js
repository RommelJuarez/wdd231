fetch('data/membership.json')
    .then(response => response.json())
    .then(membershipsData => {
        const containerIds = {
            "Gold": "gold-card",
            "Silver": "silverl-card",
            "Bronze": "bronze-card",
            "Non-Profit":"nonprofit-card"
        };

        const modal = document.getElementById("details");
        const modalTitle = document.getElementById("modalTiltle");
        const modalDescription = document.getElementById("modalDescription");
        const closeModalBtn = document.getElementById("closeModal");

        membershipsData.memberships.forEach(membership => {
            const container = document.getElementById(containerIds[membership.level]);
            if (container) {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <h2>${membership.level} Membership</h2>
                    <button class="details-btn">View Details</button>
                `;
                container.appendChild(card);

                card.querySelector(".details-btn").addEventListener("click", () => {
                    modalTitle.textContent = `${membership.level} Membership`;
                    modalDescription.innerHTML = `<ul>${membership.benefits.map(benefit => `<li>${benefit}</li>`).join('')}</ul>`;
                    modal.showModal();
                });
            }
        });

        closeModalBtn.addEventListener("click", () => {
            modal.close();
        });
    })
    .catch(error => console.error('Error loading membership data:', error));
