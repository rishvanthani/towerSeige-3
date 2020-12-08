class Box{
    constructor(x, y){
      var options={
        restitution:0.1,
        density:1.2,
        friction:1.5,
      }
      this.Visibility=255;
      this.body=Bodies.rectangle(x,y,30,40,options);
      this.x=x;
      this.y=y;
      this.width=30;
      this.height=40;
      World.add(world,this.body)
    }
    display(){
      if(this.body.speed<5.5){
        var angle = this.body.angle;
        push();
        //console.log(this.body.speed);

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
              World.remove(world,this.body);
              push();
              this.Visibility=this.Visibility-5;
             // tint(255,this.Visibility);
             // rect(this.body.position.x,this.body.position.y,30,40);
              pop();
        }
    }

   score(){

   if(this.Visibility<0 && this.Visibility>-105){

    score++
 }
 }

  }
 