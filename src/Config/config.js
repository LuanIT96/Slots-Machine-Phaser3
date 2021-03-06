//Import Scene
import PreloadScene from '../Scene/PreloadScene';
import BootScene from '../Scene/BootScene';
import GameScene from '../Scene/GameScene';
//Config
export default {
    type: Phaser.WEBGL,
    parent: "slot-game-phaser3",
    width: 1280,
    height: 720,
    physics : {
        default : 'arcade',
        arcade : {
            debug : false
        }
    },
    fps : {
        min: 30,
        target: 60
    },
    scene : [PreloadScene, BootScene, GameScene]
};