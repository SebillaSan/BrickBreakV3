export default class Collidable {
    constructor(entity, scene) {
        this.entity = entity;
        this.scene = scene;
    }

    addCollider(target, callback) {
        this.scene.physics.add.collider(this.entity, target, callback, null, this.scene);
    }

    enableCollision() {
        this.entity.body.setCollideWorldBounds(true, 1, 1);
        this.entity.body.setBounce(1, 1);
    }
}