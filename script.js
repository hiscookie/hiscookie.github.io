document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    document.querySelector("form").reset();
});
