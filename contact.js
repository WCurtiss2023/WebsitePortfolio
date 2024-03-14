document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();


    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    sendEmail(name, email, message);
});

function sendEmail(name, email, message) {

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

   
    alert('Your message has been sent! We will get back to you soon.');
}