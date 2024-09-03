import Collidable from '../components/Collidable.js';

export default class Paddle {
    constructor(scene, x, y) {
        this.scene = scene;
        this.entity = scene.add.rectangle(x, y, 100, 20, 0x00ff00);
        scene.physics.add.existing(this.entity, true);

        this.collidable = new Collidable(this.entity, scene);
    }

    update() {
        this.entity.x = Phaser.Math.Clamp(this.scene.input.activePointer.x, 50, 750);
        this.entity.body.updateFromGameObject();
    }

    addCollider(target, callback) {
        this.collidable.addCollider(target, callback);
    }
}