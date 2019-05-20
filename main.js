// Write your code here
let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites;
let engine = Engine.create();
let render = Render.create({
    options: {
        wireframes: false
    },
    element: document.body,
    engine: engine
});

Engine.run(engine);
Render.run(render);


let shape=Bodies.polygon(200,200,5,100,{
    render: {
        fillStyle: "white",
        strokeStyle: "blue",
        lineWidth: 10
    }
});
let wall = Bodies.polygon(50,300,4,30,{isStatic: true,
    render: {
        fillStyle: "white",
        strokeStyle: "blue",
        lineWidth: 10
    }});
let wall2 = Bodies.polygon(700,300,4,30,{isStatic: true,
    render: {
        fillStyle: "green",
        strokeStyle: "blue",
        lineWidth: 10
    }});
let ball=Bodies.circle(200, 50, 40,{
    render: {
        fillStyle: "white",
        strokeStyle: "blue",
        lineWidth: 10
    }
});
let floor=Bodies.trapezoid(340,400,500,100,.9,{
    isStatic: true,
    render: {
        fillStyle: "white",
        strokeStyle: "blue",
        lineWidth: 10
    }
});
let myCar=Composites.car(350, 0, 400, 50, 100);


World.add(engine.world, [shape,wall,wall2,ball,floor,myCar]);

let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);
render.mouse = mouse;
