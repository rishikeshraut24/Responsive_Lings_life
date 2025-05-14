// Cursor effect (disable on touch devices)
const cursor = document.querySelector('.cursor');

// Check if the device supports touch
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
    // Move the cursor with the mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    // Add hover effect for cursor scaling on list items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(6)';
            item.querySelector('a').style.color = 'skyblue';
        });
        item.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            item.querySelector('a').style.color = 'white';
        });
    });

    // Reset the cursor when mouse leaves the nav
    document.querySelector('.navbar').addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
} else {
    cursor.style.display = 'none'; // Hide cursor on touch devices
}

function showAboutSection() {
    if (!isTouchDevice) {
        cursor.style.display = 'none'; // Hide the custom cursor on non-touch devices
    }
    document.getElementById('about-section').style.display = 'block'; // Show the About section
}

// Smoking cost calculator
const form = document.querySelector("#smokingForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const year = document.querySelector("#num").value; // Number of years
    const day = document.querySelector("#dayk").value; // Cigarettes per day
    const price = document.querySelector("#price").value; // Price per cigarette

    // Convert input values to numbers
    const years = Number(year);
    const cigarettesPerDay = Number(day);
    const pricePerCigarette = Number(price);

    // Validate inputs
    if (years <= 0 || cigarettesPerDay <= 0 || pricePerCigarette <= 0) {
        document.querySelector("#result").textContent =
            "Please enter positive values for all fields.";
        return;
    }

    // Calculate total days
    const totalDays = years * 365;

    // Calculate the total cost
    const totalCost = totalDays * cigarettesPerDay * pricePerCigarette;

    // Display the result
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = "Total cost is: " + totalCost.toFixed(2) + " INR";
});


const Contactform = document.getElementById('Contact-form');
const Contactmessage = document.getElementById('Contact-message');

 
const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_z2rn77s', 'template_ueh0tke', '#Contact-form', 'D3rWXdFZx21YzXD6b')
    .then(() =>{
        Contactmessage.textContent = 'Message Sent'

        setTimeout(() =>{
            Contactmessage.textContent =''
        }, 5000)

        Contactform.reset()
    })
} 

Contactform.addEventListener('submit', sendEmail)

