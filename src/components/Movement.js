export default class Movement {
    constructor(entity, speed) {
        this.entity = entity;
        this.speed = speed;
    }

    setVelocity(x, y) {
        this.entity.body.setVelocity(x * this.speed, y * this.speed);
    }

    update() {
        if (this.entity) {
            this.entity.x += this.entity.body.velocity.x;
            this.entity.y += this.entity.body.velocity.y;
        }
    }
}