
// Create floating hearts
function createHearts() {
    const colors = ['#ff6b9d', '#ffb347', '#7ec0ee', '#b19cd9', '#77dd77'];
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '😘';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.animationDelay = (Math.random() * 2) + 's';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(heart);
    }
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b9d', '#ffb347', '#7ec0ee', '#b19cd9', '#77dd77'];
    const container = document.querySelector('.letter-container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(confetti);
        
        // Animate
        setTimeout(() => {
            confetti.style.opacity = '1';
            confetti.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 + 100}px) rotate(${Math.random() * 360}deg)`;
            confetti.style.transition = `all ${Math.random() * 1 + 0.5}s ease-out`;
            
            setTimeout(() => {
                confetti.remove();
            }, 1000);
        }, i * 50);
    }
}

// Button click event
document.getElementById('surprise-btn').addEventListener('click', function() {
    createConfetti();
    document.getElementById('secret-message').style.display = 'block';
    this.textContent = 'You\'re Amazing!';
    this.style.background = 'linear-gradient(45deg, #b19cd9, #7ec0ee)';
    
    // Change name placeholder to something sweet
    document.getElementById('name-placeholder').textContent = 'Beautiful Soul';
    document.getElementById('name-placeholder').style.color = '#ff6b9d';
    document.getElementById('name-placeholder').style.fontWeight = 'bold';
});

// Initialize hearts when page loads
window.onload = function() {
    createHearts();
    
    // Add highlight effect to all highlight spans
    document.querySelectorAll('.highlight').forEach(el => {
        el.style.transition = 'all 0.3s';
        el.addEventListener('mouseover', function() {
            this.style.color = '#ff6b9d';
            this.style.fontWeight = 'bold';
        });
        el.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.fontWeight = '';
        });
    });
};
