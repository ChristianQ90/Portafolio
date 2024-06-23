document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('message').classList.add('show');
            setTimeout(() => {
                document.getElementById('message').classList.remove('show');
            }, 2000);
            this.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert("Error al enviar el mensaje");
                }
            });
        }
    }).catch(error => console.error('Error:', error));
});