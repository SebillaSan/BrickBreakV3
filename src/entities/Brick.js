import Collidable from '../components/Collidable.js';

export default class Brick {
    constructor(scene, x, y, width, height, type = 'normal') {
        this.scene = scene;
        this.entity = scene.add.rectangle(x, y, width, height, 0x0000ff);
        scene.physics.add.existing(this.entity, true);

        this.type = type;  // 'normal', 'ballCreator', 'bombCreator'
        this.collidable = new Collidable(this.entity, scene);
    }

    addCollider(target, callback) {
        this.collidable.addCollider(target, callback);
    }

    destroy() {
        if (this.type === 'ballCreator') {
            Ball.createNewBall(this.scene, this.entity.x, this.entity.y, this.scene.ballSpeed);
        } else if (this.type === 'bombCreator') {
            Bomb.createNewBomb(this.scene, this.entity.x, this.entity.y);
        }
        this.entity.destroy();
    }
}