import SpriteSheet from './spriteSheet.js';
import {loadImage, loadLevel} from './loaders.js';

function drawBackground(background, ctx, sprite){
    background.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; x++){
        for (let y = y1; y < y2; y++){
            sprite.drawTiles(background.tile, ctx, x, y);
        }
    }  
    });
};

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

ctx.fillRect(0, 0, 50, 50);

loadImage('./img/tiles.png')
.then(image => {
    const sprite = new SpriteSheet(image, 16, 16);
    sprite.define('ground', 1, 1);
    sprite.define('sky', 6, 45);
    sprite.define('cloud', 4, 45);

    loadLevel('1-1')
    .then(level => {
        level.backgrounds.forEach( background => {
            drawBackground(background, ctx, sprite);
        });
    });
    for (let x = 0; x < 90; x++){
        for (let y = 2; y < 5; y++){
            sprite.drawTiles('cloud', ctx, x, y);
        }
    } 
});