const canvas = document.querySelector('.canvas');
let parent = canvas.parentElement;
let CANVAS_WIDTH = parent.getBoundingClientRect().width;
let CANVAS_HEIGHT = parent.getBoundingClientRect().height;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const ctx = canvas.getContext('2d');
const colorArray = ["rgba(255, 218, 95, 0.7)", "rgba(255, 239, 200, 0.7)", "rgba(184, 213, 118, 0.7)", "rgba(54, 115, 181, 0.7)", "rgba(209, 248, 239, 0.7)"];

function randomInRange(low, high) {
    return Math.random() * (high - low) + low;
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
    for (let i = 0; i < 15; i++) {
        let dx = 0;
        let dy = Math.random() + 0.01;
        let radius;
        if (window.innerWidth < 1000) {
            radius = randomInRange(0.1 * CANVAS_WIDTH, 0.14 * CANVAS_WIDTH);
        } else {
            radius = randomInRange(0.06 * CANVAS_WIDTH, 0.10 * CANVAS_WIDTH);
        }
        let x = randomInRange(radius, CANVAS_WIDTH - radius);
        let y = randomInRange(radius, CANVAS_HEIGHT - radius);
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
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    circles = init();
});
