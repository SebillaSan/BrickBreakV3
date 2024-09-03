import Brick from './entities/Brick.js';

export default class BrickManager {
    constructor(scene, rows, cols) {
        this.scene = scene;
        this.rows = rows;
        this.cols = cols;
        this.bricks = [];
        this.createBricks();
    }

    createBricks() {
        const brickWidth = 75;
        const brickHeight = 30;
        const padding = 10;

        const totalWidth = (brickWidth + padding) * this.cols - padding;
        const startX = (this.scene.cameras.main.width - totalWidth) / 2 + brickWidth / 2;
        const startY = 60;

        for (let row = 0; row < this.rows; row++) {
            this.bricks[row] = [];
            for (let col = 0; col < this.cols; col++) {
                const brickX = startX + col * (brickWidth + padding);
                const brickY = startY + row * (brickHeight + padding);
                const brick = new Brick(this.scene, brickX, brickY, brickWidth, brickHeight);
                this.bricks[row][col] = brick;
            }
        }
    }

    handleCollision(ball, brick) {
        brick.destroy();
        this.scene.score += 10;
        this.checkBricks();
    }

    checkBricks() {
        let allBricksDestroyed = true;
    
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (this.bricks[row][col] && this.bricks[row][col].entity.active) {
                    allBricksDestroyed = false;
                    break;
                }
            }
        }
    
        if (allBricksDestroyed) {
            this.scene.ballSpeed *= 1.1;  // Aumenta la velocidad de la pelota en un 10%
            this.scene.scene.restart();  // Reinicia la escena
        }
    }
}