import Bloc from "./Bloc"; 
import Base from "./Base"; 
//import { controller } from "./controller";


const animation = {
    canvasElt: undefined, 
    ctx: undefined, 
    blocs: [],
    blocNb : 2,
    //controller,


    init(){
        this.canvasElt = document.createElement("canvas")
        document.body.insertAdjacentElement("beforeend", this.canvasElt);
        this.canvasElt.height = 600;
        this.canvasElt.width = 800;
        this.ctx = this.canvasElt.getContext('2d'); 

        // Mon palet pour faire sauter la boulle 
        this.base = new Base(this);

        // Mes briques à casser <3 
        for(let i = 0; i < this.blocNb; i++){
            this.blocs.push(new Bloc(this));
        }

        this.animate(); 
    },

    draw(){
        this.blocs.forEach(bloc => (
            bloc.update() 
        ))

        this.base.update();
    },

    animate(){ 
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        this.draw()
        window.requestAnimationFrame( ()=> {
            this.animate(); 
        });
    },
}


animation.init() 