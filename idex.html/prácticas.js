// This is a basic auto-slide. For more complex carousels (with buttons, dots, etc.),
// you'd typically use a more robust JS library or more extensive custom code.
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    let currentIndex = 0;
    const totalImages = images.length;

    // Function to move the slider
    const slideTo = (index) => {
        slider.style.transform = `translateX(${-index * 100}%)`;
    };

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        slideTo(currentIndex);
    }, 5000); // Change image every 5 seconds
});
 <script>
        // Este es tu código JavaScript
        function saludar() {
            const nombre = prompt("¿Cuál es tu nombre?");
            if (nombre) {
                document.getElementById('mensaje').textContent = "¡Hola, " + nombre + "! Bienvenido a tu página.";
            } else {
                document.getElementById('mensaje').textContent = "¡Hola, invitado!";
            }
        }
    </script>