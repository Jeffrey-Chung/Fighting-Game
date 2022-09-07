const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './image/background.png'
});

const shop = new Sprite({
    position: {
        x: 600,
        y: 128
    },
    imageSrc: './image/shop.png',
    scale: 2.75,
    framesMax: 6
});

const player = new Fighter({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './image/samuraiMack/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 215,
        y: 157
    },
    sprites: {
        idle: {
            imageSrc: './image/samuraiMack/Idle.png',
            framesMax: 8
        },
        run: {
            imageSrc: './image/samuraiMack/Run.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './image/samuraiMack/Jump.png',
            framesMax: 2
        },
        fall: {
            imageSrc: './image/samuraiMack/Fall.png',
            framesMax: 2
        },
        attack1: {
            imageSrc: './image/samuraiMack/Attack1.png',
            framesMax: 6
        },
        takeHit: {
            imageSrc: './image/samuraiMack/Take Hit - white silhouette.png',
            framesMax: 4
        }, 
        death: {
            imageSrc: './image/samuraiMack/Death.png',
            framesMax: 6
        }
    },
    attackBox: {
        offset: {
            x: 70,
            y: 50
        },
        width: 170,
        height: 50
    }
});

const playerTwo = new Fighter({
    position: {
        x: 250,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './image/samuraiMack/Idle.png',
    framesMax: 8,
    scale: 1.25,
    offset: {
        x: 215,
        y: 10
    },
    sprites: {
        idle: {
            imageSrc: './image/samuraiMack/Idle.png',
            framesMax: 8
        },
        run: {
            imageSrc: './image/samuraiMack/Run.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './image/samuraiMack/Jump.png',
            framesMax: 2
        },
        fall: {
            imageSrc: './image/samuraiMack/Fall.png',
            framesMax: 2
        },
        attack1: {
            imageSrc: './image/samuraiMack/Attack1.png',
            framesMax: 6
        },
        takeHit: {
            imageSrc: './image/samuraiMack/Take Hit - white silhouette.png',
            framesMax: 4
        }, 
        death: {
            imageSrc: './image/samuraiMack/Death.png',
            framesMax: 6
        }
    },
    attackBox: {
        offset: {
            x: -50,
            y: 75
        },
        width: 170,
        height: 50
    }
});


const enemy = new Fighter({
    position: {
        x: 790,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'blue',
    offset: {
        x: -50,
        y: 0
    },
    imageSrc: './image/kenji/Idle.png',
    framesMax: 4,
    scale: 2.5,
    offset: {
        x: 215,
        y: 167
    },
    sprites: {
        idle: {
            imageSrc: './image/kenji/Idle.png',
            framesMax: 4
        },
        run: {
            imageSrc: './image/kenji/Run.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './image/kenji/Jump.png',
            framesMax: 2
        },
        fall: {
            imageSrc: './image/kenji/Fall.png',
            framesMax: 2
        },
        attack1: {
            imageSrc: './image/kenji/Attack1.png',
            framesMax: 4
        },
        takeHit: {
            imageSrc: './image/kenji/Take hit.png',
            framesMax: 3
        },
        death: {
            imageSrc: './image/kenji/Death.png',
            framesMax: 7
        }
    },
    attackBox: {
        offset: {
            x: -170,
            y: 50
        },
        width: 170,
        height: 50
    }
});

const enemyTwo = new Fighter({
    position: {
        x: 700,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'blue',
    offset: {
        x: -50,
        y: 0
    },
    imageSrc: './image/kenji/Idle.png',
    framesMax: 4,
    scale: 1.25,
    offset: {
        x: 215,
        y: 10
    },
    sprites: {
        idle: {
            imageSrc: './image/kenji/Idle.png',
            framesMax: 4
        },
        run: {
            imageSrc: './image/kenji/Run.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './image/kenji/Jump.png',
            framesMax: 2
        },
        fall: {
            imageSrc: './image/kenji/Fall.png',
            framesMax: 2
        },
        attack1: {
            imageSrc: './image/kenji/Attack1.png',
            framesMax: 4
        },
        takeHit: {
            imageSrc: './image/kenji/Take hit.png',
            framesMax: 3
        },
        death: {
            imageSrc: './image/kenji/Death.png',
            framesMax: 7
        }
    },
    attackBox: {
        offset: {
            x: -275,
            y: 75
        },
        width: 170,
        height: 50
    }
});

console.log(player);

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    f: {
        pressed: false
    },
    h: {
        pressed: false
    },
    j: {
        pressed: false
    },
    l: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }
}

decreaseTimer();

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    background.update();
    shop.update();
    c.fillStyle = 'rgba(255, 255, 255, 0.15)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    playerTwo.update();
    enemy.update();
    enemyTwo.update();

    player.velocity.x = 0;
    playerTwo.velocity.x = 0;
    enemy.velocity.x = 0;
    enemyTwo.velocity.x=0;

    //player movement

    if (keys.a.pressed && player.lastKey == 'a') {
        player.velocity.x = -5;
        player.switchSprite('run');
    } else if (keys.d.pressed && player.lastKey == 'd') {
        player.velocity.x = 5;
        player.switchSprite('run');
    } else {
        player.switchSprite('idle');
    }

    //player Two movement
    if (keys.f.pressed && playerTwo.lastKey == 'f') {
        playerTwo.velocity.x = -5;
        playerTwo.switchSprite('run');
    } else if (keys.h.pressed && playerTwo.lastKey == 'h') {
        playerTwo.velocity.x = 5;
        playerTwo.switchSprite('run');
    } else {
        playerTwo.switchSprite('idle');
    }

    //enemy movement
    if (keys.ArrowLeft.pressed && enemy.lastKey == 'ArrowLeft') {
        enemy.velocity.x = -5;
        enemy.switchSprite('run');
    } else if (keys.ArrowRight.pressed && enemy.lastKey == 'ArrowRight') {
        enemy.velocity.x = 5;
        enemy.switchSprite('run');
    } else {
        enemy.switchSprite('idle');
    }

    //enemy two movement
    if (keys.j.pressed && enemyTwo.lastKey == 'j') {
        enemyTwo.velocity.x = -5;
        enemyTwo.switchSprite('run');
    } else if (keys.l.pressed && enemyTwo.lastKey == 'l') {
        enemyTwo.velocity.x = 5;
        enemyTwo.switchSprite('run');
    } else {
        enemyTwo.switchSprite('idle');
    }

    //player jumping
    if (player.velocity.y < 0) {
        player.switchSprite('jump');
    } else if (player.velocity.y > 0) {
        player.switchSprite('fall');
    }

    //player two jumping
    if (playerTwo.velocity.y < 0) {
        playerTwo.switchSprite('jump');
    } else if (playerTwo.velocity.y > 0) {
        playerTwo.switchSprite('fall');
    }

    //enemy jumping
    if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump');
    } else if (enemy.velocity.y > 0) {
        enemy.switchSprite('fall');
    }

     //enemy two jumping
     if (enemyTwo.velocity.y < 0) {
        enemyTwo.switchSprite('jump');
    } else if (enemyTwo.velocity.y > 0) {
        enemyTwo.switchSprite('fall');
    }

    //detect damage when big player hits big enemy
    if (rectangularCollision({
            rectangle1: player,
            rectangle2: enemy
        }) &&
        player.isAttacking && player.framesCurrent == 4) {
        enemy.takeHit();
        player.isAttacking = false;
       
        //document.querySelector('#enemyHealth').style.width = enemy.health + '%'
        gsap.to('#enemyHealth', {
            width: enemy.health + '%'
        })
    }

    //detect damage when big player hits small enemy
    if (rectangularCollision({
        rectangle1: player,
        rectangle2: enemyTwo
    }) &&
    player.isAttacking && player.framesCurrent == 4) {
    enemyTwo.takeHit();
    player.isAttacking = false;
   
    //document.querySelector('#enemyHealth').style.width = enemy.health + '%'
    gsap.to('#enemyTwoHealth', {
        width: enemyTwo.health / 1.5 + '%'
    })
}

    //detect where small player hits small enemy
    if (rectangularCollision({
        rectangle1: playerTwo,
        rectangle2: enemyTwo
    }) &&
    playerTwo.isAttacking && playerTwo.framesCurrent == 4) {
    enemyTwo.takeHit();
    playerTwo.isAttacking = false;
    //document.querySelector('#enemyTwoHealth').style.width = enemyTwo.health + '%'
    gsap.to('#enemyTwoHealth', {
        width: enemyTwo.health + '%'
    })
}

//detect where small player hits big enemy
if (rectangularCollision({
    rectangle1: playerTwo,
    rectangle2: enemy
}) &&
playerTwo.isAttacking && playerTwo.framesCurrent == 4) {
enemy.takeHit();
playerTwo.isAttacking = false;
//document.querySelector('#enemyTwoHealth').style.width = enemyTwo.health + '%'
gsap.to('#enemyHealth', {
    width: enemy.health + 10 + '%'
})
}

    //if player misses
    if (player.isAttacking && player.framesCurrent == 4) {
        player.isAttacking = false;
    }
    if (playerTwo.isAttacking && playerTwo.framesCurrent == 4) {
        playerTwo.isAttacking = false;
    }

    //detect where big enemy hits big player
    if (rectangularCollision({
            rectangle1: enemy,
            rectangle2: player
        }) &&
        enemy.isAttacking && enemy.framesCurrent == 2) {
        player.takeHit();
        enemy.isAttacking = false;
        //document.querySelector('#playerHealth').style.width = player.health + '%'
        gsap.to('#playerHealth', {
            width: player.health + '%'
        })
    }

    //detect where big enemy hits small player
    if (rectangularCollision({
        rectangle1: enemy,
        rectangle2: playerTwo
    }) &&
    enemy.isAttacking && enemy.framesCurrent == 2) {
    playerTwo.takeHit();
    enemy.isAttacking = false;
    //document.querySelector('#playerHealth').style.width = player.health + '%'
    gsap.to('#playerTwoHealth', {
        width: playerTwo.health / 1.5 + '%'
    })
}
    //detect where small enemy hits small player
    if (rectangularCollision({
        rectangle1: enemyTwo,
        rectangle2: playerTwo
    }) &&
    enemyTwo.isAttacking && enemyTwo.framesCurrent == 2) {
    playerTwo.takeHit();
    enemyTwo.isAttacking = false;
    //document.querySelector('#playerHealth').style.width = player.health + '%'
    gsap.to('#playerTwoHealth', {
        width: playerTwo.health + '%'
    })
}

//detect where small enemy hits big player
if (rectangularCollision({
    rectangle1: enemyTwo,
    rectangle2: player
}) &&
enemyTwo.isAttacking && enemyTwo.framesCurrent == 2) {
player.takeHit();
enemyTwo.isAttacking = false;
//document.querySelector('#playerHealth').style.width = player.health + '%'
gsap.to('#playerHealth', {
    width: player.health + 10 + '%'
})
}

    //if enemy misses
    if (enemy.isAttacking && enemy.framesCurrent == 2) {
        enemy.isAttacking = false;
    }
    if (enemyTwo.isAttacking && enemyTwo.framesCurrent == 2) {
        enemyTwo.isAttacking = false;
    }

    //end game based on health
    if ((enemy.health <= 0 && enemyTwo.health<=0)|| (player.health <= 0 && playerTwo.health<=0)) {
        determineWinner({
            player,
            enemy,
            timerId
        });
    }
}

animate();

window.addEventListener('keydown', (event) => {
    //player keys
    if(!player.dead)
    {
    switch (event.key) {
        //player keys
        case 'd':
            keys.d.pressed = true;
            player.lastKey = 'd';
            break;
        case 'a':
            keys.a.pressed = true;
            player.lastKey = 'a';
            break;
        case 'w':
            player.velocity.y = -20;
            break;
        case 's':
            player.attack();
            break;
    }
}

if(!playerTwo.dead)
    {
    switch (event.key) {
        //player two keys
        case 'h':
            keys.h.pressed = true;
            playerTwo.lastKey = 'h';
            break;
        case 'f':
            keys.f.pressed = true;
            playerTwo.lastKey = 'f';
            break;
        case 't':
            playerTwo.velocity.y = -20;
            break;
        case 'g':
            playerTwo.attack();
            break;
    }
}



if(!enemy.dead){
    switch(event.key){
        //enemy keys
        case 'ArrowRight':
           keys.ArrowRight.pressed = true;
           enemy.lastKey = 'ArrowRight';
           break;
       case 'ArrowLeft':
           keys.ArrowLeft.pressed = true;
           enemy.lastKey = 'ArrowLeft';
           break;
       case 'ArrowUp':
           enemy.velocity.y = -20;
           break;
       case 'ArrowDown':
           enemy.attack();
           break;
   }
}

if(!enemyTwo.dead){
    switch(event.key){
        //enemy two keys
        case 'l':
           keys.l.pressed = true;
           enemyTwo.lastKey = 'l';
           break;
        case 'j':
           keys.j.pressed = true;
           enemyTwo.lastKey = 'j';
           break;
        case 'i':
           enemyTwo.velocity.y = -20;
           break;
        case 'k':
           enemyTwo.attack();
           break;
   }
}
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        //player keys
        case 'd':
            keys.d.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
            //player two keys
        case 'f':
            keys.f.pressed = false;
            break;
        case 'h':
            keys.h.pressed = false;
            break;

            //enemy keys
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;
            //enemy two keys
        case 'l':
            keys.l.pressed = false;
            break;
        case 'j':
            keys.j.pressed = false;
            break;
    }
})