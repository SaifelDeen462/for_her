const sky = document.getElementById('sky');

function createPetal() {
    const petal = document.createElement('div');
    const colors = ['#ff85a1', '#c9184a', '#a2d2ff', '#caf0f8']; // Pink, Red, Blue, Baby Blue
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    petal.style.position = 'absolute';
    petal.style.width = Math.random() * 15 + 10 + 'px';
    petal.style.height = petal.style.width;
    petal.style.backgroundColor = color;
    petal.style.borderRadius = '50% 0 50% 0';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-5vh';
    petal.style.opacity = Math.random() * 0.6 + 0.4;
    petal.style.boxShadow = `0 0 8px ${color}`;
    
    sky.appendChild(petal);

    const duration = Math.random() * 5 + 4;
    petal.animate([
        { transform: 'translateY(0) rotate(0deg) translateX(0)', opacity: 1 },
        { transform: `translateY(105vh) rotate(720deg) translateX(${(Math.random() - 0.5) * 200}px)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });

    setTimeout(() => petal.remove(), duration * 1000);
}

// Sparkle effect around the flower
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.backgroundColor = '#caf0f8'; // Baby blue
    sparkle.style.borderRadius = '50%';
    
    // Position sparkles around the center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2 - 50;
    sparkle.style.left = centerX + (Math.random() - 0.5) * 150 + 'px';
    sparkle.style.top = centerY + (Math.random() - 0.5) * 150 + 'px';
    
    sky.appendChild(sparkle);

    sparkle.animate([
        { transform: 'scale(0)', opacity: 0 },
        { transform: 'scale(1.5)', opacity: 1 },
        { transform: 'scale(0)', opacity: 0 }
    ], {
        duration: 2000,
        easing: 'ease-in-out'
    });

    setTimeout(() => sparkle.remove(), 2000);
}

setInterval(createPetal, 400);
setInterval(createSparkle, 150);const sky = document.getElementById('sky');

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
