import Ball from './entities/Ball.js';
import Paddle from './entities/Paddle.js';
import BrickManager from '../systems/BrickManager.js';
import CollisionManager from '../systems/CollisionManager.js';
import Bomb from './entities/Bomb.js';

export default class Game extends Phaser.Scene {
    constructor() {
        super("gameScene");
        this.ballSpeed = 300;
        this.rows = 5;
        this.cols = 8;
        this.score = 0;
    }

    create() {
        this.paddle = new Paddle(this, 400, 550);
        this.balls = this.physics.add.group();  // Grupo de pelotas
        this.ball = new Ball(this, 400, 300, this.ballSpeed);
        this.ball.setVelocity(1, -1);
        this.balls.add(this.ball.entity);

        this.bombs = this.physics.add.group();  // Grupo de bombas

        this.brickManager = new BrickManager(this, this.rows, this.cols);
        this.collisionManager = new CollisionManager(this, this.ball, this.paddle, this.brickManager);

        // Añadir colisión entre bombas y la paleta
        this.physics.add.collider(this.bombs, this.paddle.entity, this.hitBomb, null, this);
    }

    update() {
        this.paddle.update();

        this.balls.children.each((ballEntity) => {
            const ball = ballEntity.getData('instance');
            ball.update();

            if (ball.entity.y > this.cameras.main.height - 30) {
                ball.entity.destroy();
                if (this.balls.countActive() === 0) {
                    this.scene.start('gameOverScene');
                }
            }
        });
    }

    hitBomb(bomb, paddle) {
        this.scene.start('gameOverScene');
    }
}