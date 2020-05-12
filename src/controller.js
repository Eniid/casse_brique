export const controller = {
    "allowedKeys":["q", "d"],
    "pressedKeys":[],
    init(animation){
        this.animation = animation;
        window.addEventListener("keydown", e=>{
            const key = e.key;
            if(this.allowedKeys.indexOf(key) != -1){
                if(this.pressedKeys.indexOf(key) == -1){
                    this.pressedKeys.push(key);
                }
            }
            console.log(this.pressedKeys)
        }, false);
        window.addEventListener("keyup", e=>{
            const key = e.key;
            if(this.pressedKeys.indexOf(key) != -1){
                this.pressedKeys.splice(this.pressedKeys.indexOf(key), 1);
            }
        }, false);
    },
    isKeyDown(key){
        if(this.pressedKeys.indexOf(key) != -1){
            return true;
        }else{
            return false;
        }
    }
}