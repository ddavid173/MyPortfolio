import React from 'react';
import './Resume.css';
import Canvas from './Canvas'
import player from '../../Images/dinoCharactersVersion1.1/sheets/DinoSprite.png';
import windowDimensions from '../tools/windowDimensions'

function Game(props) {

    const { width, height } = windowDimensions();

    const canvasWidth = width * 0.8;
    const canvasHeight = height * 0.6;
    const playerImage = new Image();
    playerImage.src = player;
    const sw = 24;
    const sh = 24;
    const playerWidth = Math.min(canvasWidth, canvasHeight)/8

    let dx = 0;
    let dy = 0;
    let x = 0;
    let y = 0;
    const speed = playerWidth / 2;
    const gravity = 5;
    let onGround = false;
    let jump = -35;

    let animation = "idle";
    let animations = {
        idle: {
            frames: 2,
            start: 0
        }, walk: {
            frames: 6,
            start: 4
        }
    };

    document.addEventListener('keydown', function(event){
        if (event.key === "a") {
            if (x < 0) {
                animation = "idle";
                dx = 0;
                x = 0
            } else {
                animation = "walk";
                dx = -1 * speed;
            };
        } else if (event.key === "d") {
            if (x + playerWidth * 2 > canvasWidth) {
                animation = "idle";
                dx = 0;
                x = canvasWidth - playerWidth
            } else {
                animation = "walk";
                dx = speed;
            }
        } else if (event.key === "w") {
            if (onGround) {
                dy = jump;
                onGround = false
            }
        }
    })

    document.addEventListener('keyup', function(event){
        if (event.key === "a" && dx !== 1) {
            animation = "idle"
            dx = 0;
        } else if (event.key === "d" && dx !==-1) {
            animation = "idle"
            dx = 0;
        }
    })

    const draw = (ctx, frameCount) => {
        if (!onGround) {
            if (y + playerWidth + dy + gravity >= canvasHeight) {
                dy = 0;
                y = canvasHeight - playerWidth;
                onGround = true;
            }
            else {
                dy = dy + gravity;
            }
        }
        x += dx
        y += dy
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(playerImage, animations[animation]["start"]*24 + 24*(frameCount % (animations[animation]["frames"])), 0, sw, sh, x, y, playerWidth, playerWidth);
    }

    return <Canvas draw={draw} width={canvasWidth} height={canvasHeight} className="game"/>
}

class Resume extends React.Component {
    render() {
        return (
            <>
                <div className='pageBody'>
                    <Game className="game"/>
                </div>
            </>
        )
    }
}

export {Resume}