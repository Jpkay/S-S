document.addEventListener('DOMContentLoaded', function() {
    const background = document.getElementById('animated-background');

    function createLine() {
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.height = '1px';
        line.style.width = '100px';
        line.style.backgroundColor = '#FFA500';
        line.style.opacity = Math.random();
        line.style.top = Math.random() * window.innerHeight + 'px';
        line.style.left = Math.random() * window.innerWidth + 'px';
        background.appendChild(line);
        moveLine(line);
    }

    function moveLine(line) {
        const dx = (Math.random() - 0.5) * 2;
        const dy = (Math.random() - 0.5) * 2;

        function animate() {
            const rect = line.getBoundingClientRect();
            if (rect.top + dy > window.innerHeight || rect.top + dy < 0) {
                line.style.top = '0px';
            } else {
                line.style.top = rect.top + dy + 'px';
            }

            if (rect.left + dx > window.innerWidth || rect.left + dx < 0) {
                line.style.left = '0px';
            } else {
                line.style.left = rect.left + dx + 'px';
            }

            requestAnimationFrame(animate);
        }
        animate();
    }

    for (let i = 0; i < 50; i++) {
        createLine();
    }
});
