class Stone{
    constructor()
    {
        var options = {
            isStatic: false
        }

        this.stone = Bodies.circle(180, 400, 30, options);
        World.add(world, this.stone);
        
        this.stoneimg = loadImage("images/stone.png");
    }

    display()
    {
        var pos = this.stone.position;
        var angle = this.stone.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.stoneimg, 0, 0, 30, 30);
        pop();
    }
}