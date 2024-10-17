const submitbutton = document.getElementById('submit_btn');
const streetinput = document.querySelector('input[name="c3RyZWV0"]');
const countryinput = document.querySelector('input[name="Y291bnRyeQ=="]');
const stateinput = document.querySelector('input[name="c3RhdGU="]');
const cityinput = document.querySelector('input[name="Y2l0eQ=="]');
const zipinput = document.querySelector('input[name="emlw"]');
const mailinput = document.querySelector('input[name="ZW1haWw="]');
const nameinput = document.querySelector('input[name="Y2FyZC1uYW1l"]');
const cardinput = document.querySelector('input[name="Y2FyZC1udW1iZXI="]');
const cvcinput = document.querySelector('input[name="Y3Z2"]');
const boxcheckinput = document.querySelector('input[name="Y2FyZDE4"]');
const monthinput = document.querySelector('input[name="ZXhwaXJhdGlvbk1vbnRo"]');
const yearinput = document.querySelector('input[name="ZXhwaXJhdGlvblllYXI="]');

const cvc_label = document.getElementById('cvc_label');  // Or use appropriate selector
const street_label = document.getElementById('street_label');
const country_label = document.getElementById('country_label');
const state_label = document.getElementById('state_label');
const city_label = document.getElementById('city_label');
const zip_label = document.getElementById('zip_label');
const mail_label = document.getElementById('email_label');
const name_label = document.getElementById('name_label');
const card_label = document.getElementById('card_label');
const expiration_label = document.getElementById('expiration_label');




// Helper function to validate inputs and set label color
// Helper function to validate inputs and set label color
const validateInput = (inputElement, labelElement) => {
    if (inputElement.value.trim() === '') {
        labelElement.style.color = 'red';
        return false;
    } else {
        labelElement.style.color = ''; // Reset color if valid
        return true;
    }
};

// Helper function to reset the label color when the input is modified
const resetLabelOnInput = (inputElement, labelElement) => {
    inputElement.addEventListener('input', () => {
        labelElement.style.color = ''; // Reset color when the input changes
    });
};



// Event listener for the submit button
submitbutton.addEventListener('click', () => {
    
    let isValid = true; // Flag to check overall form validity

    if (monthinput.value.trim() === '' && yearinput.value.trim() === '') {
        expiration_label.style.color = 'red';
        isValid = false;
    }

    // Validate each field
    isValid &= validateInput(cvcinput, cvc_label);
    isValid &= validateInput(streetinput, street_label);
    isValid &= validateInput(cityinput, city_label);
    isValid &= validateInput(nameinput, name_label);
    isValid &= validateInput(cardinput, card_label);
    isValid &= validateInput(zipinput, zip_label);
    isValid &= validateInput(mailinput, mail_label);
    isValid &= validateInput(stateinput, state_label);
     

    // Optional: Prevent submission if form is invalid
    if (!isValid) {
        console.log('Form is invalid');
    } else {
        console.log('Form is valid');
        // Add form submission logic here
    }
});

// Reset label colors on input modification
resetLabelOnInput(cvcinput, cvc_label);
resetLabelOnInput(streetinput, street_label);
resetLabelOnInput(countryinput, country_label);
resetLabelOnInput(stateinput, state_label);
resetLabelOnInput(cityinput, city_label);
resetLabelOnInput(zipinput, zip_label);
resetLabelOnInput(mailinput, mail_label);
resetLabelOnInput(nameinput, name_label);
resetLabelOnInput(cardinput, card_label);
resetLabelOnInput(monthinput, expiration_label);
resetLabelOnInput(yearinput, expiration_label);

