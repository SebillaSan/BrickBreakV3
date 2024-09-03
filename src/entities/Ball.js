import Movement from '../components/Movement.js';
import Collidable from '../components/Collidable.js';

export default class Ball {
    constructor(scene, x, y, speed) {
        this.scene = scene;
        this.entity = scene.add.circle(x, y, 10, 0xff0000);
        scene.physics.add.existing(this.entity);

        this.movement = new Movement(this.entity, speed);
        this.collidable = new Collidable(this.entity, scene);
        this.collidable.enableCollision();
    }

    setVelocity(x, y) {
        this.movement.setVelocity(x, y);
    }

    update() {
        this.movement.update();
    }

    addCollider(target, callback) {
        this.collidable.addCollider(target, callback);
    }

    static createNewBall(scene, x, y, speed) {
        const ball = new Ball(scene, x, y, speed);
        ball.setVelocity(1, -1);
        scene.balls.add(ball.entity);  // Añade la pelota al grupo de pelotas
        return ball;
    }
}