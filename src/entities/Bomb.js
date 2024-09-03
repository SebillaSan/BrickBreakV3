export default class Bomb {
    constructor(scene, x, y) {
        this.scene = scene;
        this.entity = scene.add.circle(x, y, 10, 0x000000);
        scene.physics.add.existing(this.entity);

        this.entity.body.setVelocity(0, 100);  // Velocidad hacia abajo
        this.entity.body.setCollideWorldBounds(true);
    }

    static createNewBomb(scene, x, y) {
        const bomb = new Bomb(scene, x, y);
        scene.bombs.add(bomb.entity);  // Añade la bomba al grupo de bombas
    }
}