const starContainer = document.getElementById('star-container');

// Generate background stars
for(let i=0; i<80; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starContainer.appendChild(star);
}

// Falling petals function
function createPetal() {
    const petal = document.createElement('div');
    const colors = ['#ff85a1', '#c9184a', '#a2d2ff', '#caf0f8'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    petal.style.position = 'fixed';
    petal.style.width = `${Math.random() * 15 + 10}px`;
    petal.style.height = petal.style.width;
    petal.style.backgroundColor = color;
    petal.style.borderRadius = '50% 0 50% 0';
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.top = '-5vh';
    petal.style.zIndex = '5';
    petal.style.boxShadow = `0 0 8px ${color}`;

    document.body.appendChild(petal);

    const duration = Math.random() * 3000 + 4000;
    const anim = petal.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
        { transform: `translateY(110vh) rotate(720deg) translateX(${(Math.random() - 0.5) * 200}px)`, opacity: 0 }
    ], { duration: duration, easing: 'linear' });

    anim.onfinish = () => petal.remove();
}

setInterval(createPetal, 400);

// Interaction: Mouse/Touch Sparkles
window.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'star';
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    sparkle.style.background = '#caf0f8';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
});
