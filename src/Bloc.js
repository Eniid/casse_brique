export default class Bloc {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;

        this.color = "#ebd0bf";
        this.x = 25;
        this.y = 25;
        this.widht = 100;
        this.height = 40;
    }


    draw(){         
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.widht, this.height);
        this.ctx.fill();
    }; 

    update(){

        this.draw();
    }
}