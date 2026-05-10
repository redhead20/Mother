// Create floating particles
function createParticles() {
    const container = document.getElementById('particles');
    const emojis = ['❤️', '💕', '🌹', '🌸', '💐', '🌺', '🦋', '✨'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = `particle ${Math.random() > 0.5 ? 'heart' : 'flower'}`;
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (5 + Math.random() * 3) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(particle);
    }
}

// Confetti effect
function createConfetti() {
    const colors = ['#fd79a8', '#ff7675', '#fdcb6e', '#a29bfe', '#fab1a0'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (2.5 + Math.random() * 1) + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }

    // Create pop-up hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'pop-heart';
            heart.textContent = '💕';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1500);
        }, i * 50);
    }
}

// Send message function
function sendMessage() {
    alert('Message sent with love! ❤️\n\nMom, you\'re amazing and I love you so much!');
}

// Initialize particles on page load
window.addEventListener('load', () => {
    createParticles();
});

// Add click animation to reason cards
document.querySelectorAll('.reason-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
        createConfetti();
    });
});

// Add click animation to photos
document.querySelectorAll('.photo-placeholder').forEach(photo => {
    photo.addEventListener('click', function() {
        alert('Add your favorite photo here! 📸');
    });
});
