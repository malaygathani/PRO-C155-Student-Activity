AFRAME . registerComponet("game-play",{
    schema :{
        elementld:{type:"sttring",defalut:"#ring1"},
},
    update:function(){
        this.isCollided(this.data.elementld):
    }
    isCollided:function(elementld){
        const element = document.querySelector(elementld);
        element.addEventListener("collide",(e)=>{
            if(elementld.includes("#ring")){
                console.log(elementld +"collision");
            }else if (elementld.includes("#hurdle")){
                console.log("bird collision");
            }
        });
    },
});
