class Launcher{
    constructor()
    {
        var options = {
            bodyA: hit.stone,
            pointB: {x: 180, y: 400},
            stiffness: 0.04,
            length: 20
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);

    }
    attach()
    {
        this.launcher.bodyA = hit.stone;
    }
    fly()
    {
        this.launcher.bodyA = null;
    }

    
}


