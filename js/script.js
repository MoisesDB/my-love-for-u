function updateTimeElapsed() {
    const startDate = new Date("2025-01-14T00:00:00"); // Data inicial
    const now = new Date(); // Data atual
    let diff = Math.abs(now - startDate) / 1000; // Diferença em segundos

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

setInterval(updateTimeElapsed, 1000); // Atualiza a cada segundo
updateTimeElapsed(); // Chama a função imediatamente ao carregar