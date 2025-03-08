const uploadForm = document.getElementById('uploadForm');
const messageDiv = document.getElementById('message');

uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('videoFile');
    const file = fileInput.files[0];

    if (file) {
        // Display uploading message
        messageDiv.textContent = 'Uploading... Please wait.';
        messageDiv.style.color = 'orange';

        const formData = new FormData();
        formData.append('videoFile', file);

        // Send the file to the backend to handle the YouTube upload
        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            
            if (response.ok) {
                messageDiv.textContent = 'Video uploaded successfully!';
                messageDiv.style.color = 'green';
            } else {
                messageDiv.textContent = 'Error uploading video: ' + result.error;
                messageDiv.style.color = 'red';
            }
        } catch (error) {
            messageDiv.textContent = 'Error uploading video: ' + error.message;
            messageDiv.style.color = 'red';
        }
    } else {
        messageDiv.textContent = 'Please select a video file.';
        messageDiv.style.color = 'red';
    }
});
