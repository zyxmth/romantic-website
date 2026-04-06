const heartsContainer = document.createElement('div');
heartsContainer.style.position = 'absolute';
heartsContainer.style.top = '0';
heartsContainer.style.left = '0';
heartsContainer.style.width = '100%';
heartsContainer.style.height = '100%';
heartsContainer.style.pointerEvents = 'none';
document.body.appendChild(heartsContainer);

function createFallingHeart() {
    const heartContainer = document.getElementById('heartContainer');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    
    const randomLeft = Math.random() * 100;
    const randomDuration = 3 + Math.random() * 4;
    const randomDelay = Math.random() * 0.5;
    
    heart.style.left = randomLeft + '%';
    heart.style.animation = `fall ${randomDuration}s linear ${randomDelay}s forwards`;
    
    heartContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), (randomDuration + randomDelay) * 1000);
}

// Create hearts at intervals
setInterval(createFallingHeart, 500);