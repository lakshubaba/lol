class Tree{
    constructor(x,y)
    {
        var options = {
            isStatic: true
        }

        this.tree = Bodies.rectangle(x, y, 500, 500, options);
        World.add(world, this.tree);
        this.image = loadImage("images/tree.png");
    }
    display()
    {
        var pos = this.tree.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 500, 600);

    }
}