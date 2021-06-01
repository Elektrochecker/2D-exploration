let globalProperties = {
    width: 800,
    height: 400,
}

let ground = {
    color: 20,
    resolution: 1
}

let screen = {
    x: 0,
}

let player = {
    x: globalProperties.width/2,
    y: globalProperties.height - 220,
    color: [200,20,20],
    speed: 4,

    move: () => {
        if (keyCode == 68) {
            if (player.x >= globalProperties.width-200) {
                screen.x += 0.005*player.speed
            } else {
                player.x += player.speed
            }
        }
        if (keyCode == 65) {
            if (player.x <= 200) {
                screen.x -= 0.005*player.speed
            } else {
                player.x -= player.speed
            }
        }
    }
}