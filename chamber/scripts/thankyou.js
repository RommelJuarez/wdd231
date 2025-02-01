document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const detailsContainer = document.getElementById("submission-details");

    if (params.has("firstName") && params.has("lastName")) {
        let detailsHTML = `
            <div class="detail-item"><strong>Name:</strong> ${params.get("firstName")} ${params.get("lastName")}</div>
            <div class="detail-item"><strong>Organizational Title:</strong> ${params.get("orgTitle")}</div>
            <div class="detail-item"><strong>Email:</strong> ${params.get("email")}</div>
            <div class="detail-item"><strong>Phone:</strong> ${params.get("phone")}</div>
            <div class="detail-item"><strong>Organization:</strong> ${params.get("organization")}</div>
            <div class="detail-item"><strong>Membership Level:</strong> ${params.get("membershipLevel")}</div>
            <div class="detail-item"><strong>Description:</strong> ${params.get("organizationDescription") || "N/A"}</div>
            <div class="detail-item"><strong>Submission Time:</strong> ${new Date().toLocaleString()}</div>
        `;

        detailsContainer.innerHTML = detailsHTML;
    } else {
        detailsContainer.innerHTML = "<p>No form data received.</p>";
    }
});