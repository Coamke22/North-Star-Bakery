
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('north-star-contact');
     
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior (page reload)
        event.preventDefault();

        // Gather data element values from the page
        const formData = {
            firstname: document.getElementById('contact-firstname').value,
            lastname: document.getElementById('contact-lastname').value,
            email: document.getElementById('contact-email').value,
            phone: document.getElementById('contact-phone').value,
            pickupDate: document.getElementById('contact-pickup-date').value,
            request: document.getElementById('contact-request-type').value
        };
        
        localStorage.setItem('userData', JSON.stringify(formData));
      
// clear the form once data is submitted
        form.reset()
             });
});


// populate the form fields based on email address
document.getElementById('showDataBtn').addEventListener('click', function() {
    const searchEmail = document.getElementById('contact-email').value.trim().toLowerCase();
    const outputDiv = document.getElementById('outputDiv');
//If no email, prompt for one
    if (!searchEmail) {
        alert('Please enter an email address to look up saved data.');
        return;
    }
    const settingsJSON = localStorage.getItem("userData");
    const settings = JSON.parse(settingsJSON);
//check object to make sure it is valid and each element for null prior to attempting to populate
if (settings !== null)  {
    if (settings.firstname !== undefined) {
        document.getElementById('contact-firstname').value = settings.firstname;
    }
    if (settings.lastname !== undefined) {
        document.getElementById('contact-lastname').value = settings.lastname;
    }
    if (settings.phone !== undefined) {
        document.getElementById('contact-phone').value = settings.phone;
    }
}
});

const radios = document.querySelectorAll('input[name="toggleGroup"]');
const container1 = document.getElementById('optpreorder');
const container2 = document.getElementById('optcomment');
//toggle between the preorder and comment submissions
radios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    alert(e.target.value)
    if (e.target.value === 'optpreorder') {
      fldpreorder.style.display = 'block';
      fldcomment.style.display = 'none';
    } else {
      fldpreorder.style.display = 'none';
      fldcomment.style.display = 'block';
    }
  });
});