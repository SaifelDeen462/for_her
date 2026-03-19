const sky = document.getElementById('sky');

function createPetal() {
    const petal = document.createElement('div');
    petal.style.position = 'absolute';
    
    // Mix of your colors: Pink, Red, Blue, Baby Blue
    const colors = ['#ff4d6d', '#c9184a', '#0077b6', '#caf0f8'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    const size = Math.random() * 10 + 5 + 'px';
    
    petal.style.width = size;
    petal.style.height = size;
    petal.style.backgroundColor = color;
    petal.style.borderRadius = '50% 0 50% 0'; // Petal shape
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-5vh';
    petal.style.opacity = Math.random() * 0.7 + 0.3;
    petal.style.boxShadow = `0 0 5px ${color}`;
    
    sky.appendChild(petal);

    const duration = Math.random() * 4 + 4;
    const drift = (Math.random() - 0.5) * 200; // Side to side movement

    petal.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(110vh) translateX(${drift}px) rotate(720deg)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Generate petals every 300ms
setInterval(createPetal, 300);

// Optional: Subtle mouse interaction
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    sky.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, var(--deep-blue) 0%, var(--black) 100%)`;
});
