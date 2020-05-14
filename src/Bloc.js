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

        this.i = undefined;
    }


    draw(){         
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.widht, this.height);
        this.ctx.fill();
    }; 

    update(){

        //if(i < 5) {
          //  this.x = this.i * (1 +150);
        //}
        this.draw();
    }
}