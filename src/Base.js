export default class Base {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;

        this.color = "#294b94";
        this.x = 300; // Que j'arrive pas à mettre en calcule 
        this.y = this.canvas.height - 25;
        this.widht = 200;
        this.height = 5;
    }


    draw(){         
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.widht, this.height);
        this.ctx.fill();
    }; 

    update(){
        // Il doit faire quoi quand on utiliser les controleurs 
        this.draw();
    }
}