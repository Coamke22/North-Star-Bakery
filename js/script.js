
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('north-star-contact');
     
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior (page reload)
        event.preventDefault();

        // Gather data from form inputs
        const formData = {
            username: document.getElementById('contact-username').value,
            email: document.getElementById('contact-email').value,
            pickupDate: document.getElementById('contact-pickup-date').value,
            request: document.getElementById('contact-request-type').value
        };

        const jsonString = JSON.stringify(formData);
        localStorage.setItem('userRequestData', jsonString);

        alert('Data successfully saved to local storage!');
        form.reset();
    });
});


// return data already saved
document.getElementById('showDataBtn').addEventListener('click', function() {
    const searchEmail = document.getElementById('contact-email').value.trim().toLowerCase();
    const outputDiv = document.getElementById('past-orders');

    if (!searchEmail) {
        alert('Please enter an email address to look up saved data.');
        return;
    }

    // Get records from local storage
    const savedEntries = JSON.parse(localStorage.getItem('userRequestData')) || [];
  alert(savedEntries.length)
    // Filter records matching the typed email address
    const matchingEntries = savedEntries.filter(entry => entry.email === searchEmail);
 

    if (matchingEntries.length > 0) {
        // Format and display the matched results
        let htmlContent = `<h3>Found ${matchingEntries.length} record(s):</h3>`;
        matchingEntries.forEach((entry, index) => {
            htmlContent += `
                <div style="border-bottom: 1px solid #ccc; padding-bottom: 10px; margin-bottom: 10px;">
                    <p><strong>Record #${index + 1}</strong></p>
                    <p><strong>Username:</strong> ${entry.username}</p>
                    <p><strong>Date:</strong> ${entry.pickupDate}</p>
                    <p><strong>Request:</strong> ${entry.request}</p>
                </div>
            `;
        });
        outputDiv.innerHTML = htmlContent;
        outputDiv.style.display = 'block';
    } else {
        outputDiv.innerHTML = `<p style="color: red;">No saved records found for: <strong>${searchEmail}</strong></p>`;
        outputDiv.style.display = 'block';
    }
});