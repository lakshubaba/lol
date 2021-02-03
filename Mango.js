class Mango{
    constructor(x, y)
    {
            var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.mango = Bodies.circle(x, y, 40, options);
        World.add(world, this.mango);
        
        this.image = loadImage("images/mango.png");
    }

    display()
    {
        var point = this.mango.position;
        var angle = this.mango.angle;
        push();
        translate(point.x, point.y);
        rotate(angle); 
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
    }
}