class Block {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = y;
        this.size = size;
    }

    teleportIfOutOfMap() {//c'est la fonction qui gere la hor-map
        const maxSize = GAME_SIZE / this.size;//definis la taille du plateu
        if (this.x < 0) {//si la position du block est inferieure a 0 
            this.x = maxSize;// definis la bordure du jeux
        } else if (this.x > maxSize) {// si x est superieure a la taille du plateu
            this.x = 0;// alors tu le remet dans le plateau de jeux 
        }
        if (this.y < 0) {//on fais de meme pour y 
            this.y = maxSize;
        } else if (this.y > maxSize) {
            this.y = 0;
        }
    }

    setPosition(x, y) {
        this.oldX = this.x;
        this.oldY = this.y;
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}