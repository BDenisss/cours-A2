class Food {
    constructor() {
        this.size = SQUARE_SIZE;
        this.setRandomPosition();
    }

    setRandomPosition() {//on definis de maniere random la position de la nourriture
        const maxSize = ((GAME_SIZE / this.size) - 1);// on definis la limite maximun de la taille du plateau a 3O
        this.x = Math.round(Math.random() * GAME_SIZE % maxSize);// on multiplie le chiffre donner par la taille du plateau en x
        this.y = Math.round(Math.random() * GAME_SIZE % maxSize);// on multiplie le chiffre donner par la taille du plateau en y
    }

    draw() {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}