class Atree
{
    constructor()
    {
        var options = {isStatic: true};

        this.LeftSide = Bodies.rectangle(750,400,20,160,options);
        this.LRwidth = 2;
        this.LRheight = 2;
        World.add(world, this.LeftSide);

        this.base = Bodies.rectangle(850,680,230,20,options);
        this.Bwidth = 2;
        this.Bheight = 2;
        World.add(world, this.base);

        this.RightSide = Bodies.rectangle(1150,400,20,160,options);
        World.add(world, this.RightSide);

        this.image=loadImage("images/tree.png");

    }
    display()
    {
        var posL = this.LeftSide.position;
        fill('white');
        rect(posL.x, posL.y, this.LRwidth, this.LRheight);

        var posB = this.base.position;
        fill('brown');
        rect(posB.x, posB.y, this.Bwidth, this.Bheight);

        var posR = this.RightSide.position;
        fill('white');
        rect(posR.x, posR.y, this.LRwidth, this.LRheight);

        imageMode(CENTER);
        image(this.image, posB.x, posL.y, 600,600);
    }
}