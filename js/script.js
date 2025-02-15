function updateTimeElapsed() {
    const startDate = new Date("2025-01-14T00:00:00");
    const now = new Date();
    let diff = Math.abs(now - startDate) / 1000;

    const days = Math.floor(diff / (3600 * 24));
    diff -= days * 3600 * 24;

    const hours = Math.floor(diff / 3600);
    diff -= hours * 3600;

    const minutes = Math.floor(diff / 60);
    diff -= minutes * 60;

    const seconds = Math.floor(diff);

    document.getElementById("timer").textContent = 
        `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100, 
            "density": { "enable": true, "value_area": 800 }
        },
        "shape": {
            "type": "image", 
            "image": {
                "src": "https://cdn-icons-png.flaticon.com/128/833/833472.png", 
                "width": 100,
                "height": 100
            }
        },
        "line_linked": {
            "enable": false
        },
        "size": {
            "value": 15,
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "top",
            "out_mode": "out"
        },
        "opacity": {
            "value": 0.7,
            "random": true
        }
    }
});

setInterval(updateTimeElapsed, 1000);
updateTimeElapsed();