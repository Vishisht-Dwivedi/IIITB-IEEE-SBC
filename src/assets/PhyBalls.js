console.log("Connected");
const canvasArray = document.querySelectorAll('.canvas');
canvasArray.forEach((element) => {
    let parent = element.parentElement;
    let CANVAS_WIDTH = parent.getBoundingClientRect().width;
    let CANVAS_HEIGHT = parent.getBoundingClientRect().height;

    element.width = CANVAS_WIDTH;
    element.height = CANVAS_HEIGHT;

    const ctx = element.getContext('2d');
    const colorArray = ["#B1F0F7", "#81BFDA", "#F5F0CD", "#FADA7A", "#1d99cc"];

    function randomInRange(low, high) {
        let x = Math.random() * (low + high);
        if (x < low || x > high) return (low + high) / 2;
        return x;
    }

    // Collision handling functions
    function boxCollisionHandling(circle) {
        if (circle.x + circle.radius + circle.velocity.x >= CANVAS_WIDTH || circle.x - circle.radius <= 0) {
            circle.velocity.x = -(circle.velocity.x);
            if (circle.x + circle.radius >= CANVAS_WIDTH) {
                circle.x = CANVAS_WIDTH - circle.radius;
            } else if (circle.x - circle.radius <= 0) {
                circle.x = circle.radius;
            }
        }
        if (circle.y + circle.radius + circle.velocity.y >= CANVAS_HEIGHT || circle.y - circle.radius <= 0) {
            circle.velocity.y = -(circle.velocity.y);
            if (circle.y + circle.radius >= CANVAS_HEIGHT) {
                circle.y = CANVAS_HEIGHT - circle.radius;
            } else if (circle.y - circle.radius <= 0) {
                circle.y = circle.radius;
            }
        }
    }

    class Circle {
        constructor(x, y, radius, dx, dy, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.velocity = { x: dx, y: dy };
            this.color = color;
            this.draw = function () {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.stroke();
            }
            this.update = function () {
                this.x += this.velocity.x;
                this.y += this.velocity.y;
                boxCollisionHandling(this);
            }
        }
    }

    function init() {
        const circles = [];
        for (let i = 0; i < 10; i++) {
            let dx = 0;
            let dy = Math.random() + 0.1;
            let radius = randomInRange(0.05 * CANVAS_WIDTH, 0.15 * CANVAS_WIDTH);
            let x = randomInRange(radius, CANVAS_WIDTH - radius);
            let y = 2 * radius;
            let color = colorArray[Math.floor(Math.random() * colorArray.length)];
            const circle = new Circle(x, y, radius, dx, dy, color);
            circles.push(circle);
        }
        return circles;
    }

    let circles = init();

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        for (let i = 0; i < circles.length; i++) {
            circles[i].draw();
        }
        for (let i = 0; i < circles.length; i++) {
            circles[i].update();
        }
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        CANVAS_WIDTH = parent.getBoundingClientRect().width;
        CANVAS_HEIGHT = parent.getBoundingClientRect().height;
        element.width = CANVAS_WIDTH;
        element.height = CANVAS_HEIGHT;

        circles = init();
    });

})