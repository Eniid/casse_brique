import Asteroide from "./Asteroide"; 


const animation = {
    canvasElt: undefined, 
    ctx: undefined, 
    asteroides: [], //? Tableau dans le quel on doit ajouter les asteroides (crée par le classe asteroide)
    nbAsteroides : 10, 
    colors : ['#EC8900',  '#E7A700', '#5787AB' , '#E7A700'  ],

    //* Toutes les propoiétées !! 
    init(){
        this.canvasElt = document.createElement("canvas")
        document.body.insertAdjacentElement("afterbegin", this.canvasElt);
        this.ctx = this.canvasElt.getContext('2d'); 
        this.resize(); 
        window.addEventListener('resize', e => {
            this.resize();
        }, false)
        this.asteroides.push(new Asteroide(this, this.colors));
        this.animate(); 

    },

    draw(){
        this.asteroides.forEach(asteroide => (
            asteroide.update() 
        ))
    },

    animate(){ //¨* Pour quand on va faire bouger le truc 
        this.ctx.clearRect(0, 0, this.canvasEltwidth, this.canvasElt.height);
        this.draw()
        window.requestAnimationFrame( ()=> {
            this.animate(); // les arrow function permettes que le this reste le bon. 
        });
    },

    resize(){ //* Pour que quand on rezise l'écran, le canvas aussi se resize
        this.canvasElt.height = window.innerHeight;
        this.canvasElt.width = window.innerWidth;
        
    }
}


animation.init() //* Démare toute la classe animation 