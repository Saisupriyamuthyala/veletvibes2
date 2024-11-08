function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email.match(emailPattern) || !message) {
        alert("Please fill out all fields with valid information.");
        return false;
    }
    alert("Thank you for contacting us!");
    return true;
}
document.getElementById('addImage').addEventListener('click', function() {
    const imageUrl = document.getElementById('imageUrl').value;
    if (imageUrl) {
        const cosmeticImagesDiv = document.getElementById('cosmeticImages');
        
        // Create a new div for the image
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('cosmetic-image');
        imgDiv.style.backgroundImage = `url(${imageUrl})`;
        
        // Append the new div to the gallery
        cosmeticImagesDiv.appendChild(imgDiv);
        
        // Clear the input field after adding the image
        document.getElementById('imageUrl').value = '';
    } else {
        alert('Please enter an image URL');
    }
});
