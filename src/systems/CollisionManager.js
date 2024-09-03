export default class CollisionManager {
    constructor(scene, ball, paddle, brickManager) {
        this.scene = scene;
        this.ball = ball;
        this.paddle = paddle;
        this.brickManager = brickManager;

        this.ball.addCollider(this.paddle.entity, this.hitPaddle.bind(this));

        for (let row = 0; row < this.brickManager.rows; row++) {
            for (let col = 0; col < this.brickManager.cols; col++) {
                const brick = this.brickManager.bricks[row][col];
                this.ball.addCollider(brick.entity, () => {
                    this.brickManager.handleCollision(this.ball, brick);
                });
            }
        }
    }

    hitPaddle(ball, paddle) {
        ball.body.setVelocityY(-Math.abs(ball.body.velocity.y));
    }
}