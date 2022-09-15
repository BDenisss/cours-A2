class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.blockSize = SQUARE_SIZE;
        this.blocks = [];
        this.addBlock(this.x, this.y);
        this.alive = true;
    }

    addBlock(x, y) {//ajoute des blocks
        const block = new Block(x, y, this.blockSize);
        this.blocks.push(block);
    }

    moveHead() {
        const head = this.blocks[0];//definis la position du block qui correspond a la tete
        head.oldX = head.x;
        head.oldY = head.y;
        switch (currentDirection) {//on va changer la direction du snake a chaque touche presser en remplacant la valeur que contient currentDirection
            case 'left':
                head.x -= 1;
                break;
            case 'right':
                head.x += 1;
                break;
            case 'up':
                head.y -= 1;
                break;
            case 'down':
                head.y += 1;
            default:
                break;
        }
        head.teleportIfOutOfMap();
    }

    calculateNewBlockPosition() {
        let {x, y} = this.blocks[this.blocks.length - 1];
        switch (currentDirection) {
            case 'left':
                x += 1;
                break;
            case 'right':
                x -= 1;
                break;
            case 'up':
                y += 1;
                break;
            case 'down':
                y -= 1;
            default:
                break;
        }
        return {x, y};
    }

    eat() {//on veriefie que la position de la tete est la meme que celle de la nourriture
        const head = this.blocks[0];//on recupere la tete
        if (head.x === food.x && head.y === food.y) {//on verrifie que les coordonner des deux elements sont stritement egale
            food.setRandomPosition();
            const {x, y} = this.calculateNewBlockPosition();
            this.addBlock(x, y);
        }
    }

    blockTouchHead(block) {
        const head = this.blocks[0];
        const headX = head.x;
        const headY = head.y;
        
        return (headX === block.x && headY === block.y);
    }

    update() {
        this.moveHead();
        this.eat();
        for (const [index, block] of this.blocks.entries()) {
            if (index > 0) {
                const {oldX, oldY} = this.blocks[index - 1];
                block.setPosition(oldX, oldY);
                if (this.blockTouchHead(block)) {
                    this.alive = false;
                }
            }
           
            block.draw();
        }
    }
}