
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('north-star-contact');
     
    form.addEventListener('submit', (event) => {
        document.getElementById("email-error").textContent="";
        document.getElementById("phone-error").textContent="";

        const emailError = isValidEmail(document.getElementById('contact-email').value)
        
        //validate email
        if (emailError === false){
              document.getElementById("email-error").textContent="Email format is invalid (user@email.com)"
        }
        
        //validate phone
        const phoneError = isValidPhone(document.getElementById('contact-phone').value)
        if (phoneError === false){
            event.preventDefault();
            document.getElementById("phone-error").textContent="Phone format is invalid.  Please use 518-555-1212"
        }

        if (phoneError === false || phoneError === false)  {
                event.preventDefault();
                return;
            }

        // Gather data element values from the page
        const formData = {
            firstname: document.getElementById('contact-firstname').value,
            lastname: document.getElementById('contact-lastname').value,
            email: document.getElementById('contact-email').value,
            phone: document.getElementById('contact-phone').value,
        };
        
        localStorage.setItem('userData', JSON.stringify(formData));
      
        alert("Your request has been submitted, we will be reaching out to you shortly.")
// clear the form once data is submitted
        form.reset()
             });
});


// populate the form fields based on email address
document.getElementById('showDataBtn').addEventListener('click', function() {

    const settingsJSON = localStorage.getItem("userData");
    const settings = JSON.parse(settingsJSON);
        //check object to make sure it is valid and each element for null prior to attempting to populate
        if (settings !== null)  {
            if (settings.firstname !== undefined) {
                document.getElementById('contact-email').value = settings.email;
            }
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
    
    if (e.target.value === 'optpreorder') {
      fldpreorder.style.display = 'block';
      fldcomment.style.display = 'none';
    } else {
      fldpreorder.style.display = 'none';
      fldcomment.style.display = 'block';
    }
  });
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhone(phone) {
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    return phonePattern.test(phone);
}