document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('stars-bg');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let mouse = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    class Star {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z; // depth
            this.radius = 1.5;
            this.screenX = 0;
            this.screenY = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.screenX, this.screenY, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#00ff00'; // Cyber green stars
            ctx.fill();
        }

        update() {
            const parallaxX = (mouse.x - canvas.width / 2) * (1 / this.z);
            const parallaxY = (mouse.y - canvas.height / 2) * (1 / this.z);

            this.screenX = this.x + parallaxX;
            this.screenY = this.y + parallaxY;
            
            this.draw();
        }
    }

    function init() {
        stars = [];
        const starCount = window.innerWidth < 800 ? 400 : 800;
        for (let i = 0; i < starCount; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const z = Math.random() * 40 + 10; // Random depth
            stars.push(new Star(x, y, z));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.update();
        });
    }

    init();
    animate();
});

