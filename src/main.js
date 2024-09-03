import Phaser from 'phaser';
import Game from '/scenes/Game.js';
import GameOver from '/scenes/GameOver.js';

const config = {
    type: Phaser.AUTO, // Utiliza WebGL si está disponible, de lo contrario Canvas.
    width: 800, // Ancho del canvas.
    height: 600, // Alto del canvas.
    physics: {
        default: 'arcade', // Usamos el sistema de física arcade.
        arcade: {
            debug: false, // Mostrar o no la depuración de las colisiones.
            gravity: { y: 0 } // No hay gravedad en el eje Y.
        }
    },
    scene: [Game, GameOver], // Escenas del juego.
};

const game = new Phaser.Game(config); // Inicializa el juego con la configuración proporcionada.