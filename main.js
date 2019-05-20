// Write your code here
let Engine = Matter.Engine,
Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies,
Composites = Matter.Composites;
Constraint = Matter.Constraint;
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


let shape=Bodies.polygon(200,150,5,100,{isStatic: true,
    render: {
        fillStyle: "white",
        // strokeStyle: "blue",
        // lineWidth: 10
    }
});
let cradle=Composites.newtonsCradle(500,15,5,20,250)
let wall = Bodies.polygon(50,300,4,30,{isStatic: false,
    render: {
        fillStyle: "white",

        // strokeStyle: "blue",
        // lineWidth: 10
    }});
    let wall2 = Bodies.rectangle(0,580,1600,30,{isStatic: true,
        render: {
            fillStyle: "green",
            // strokeStyle: "black",
            // lineWidth: 10
        }});
        let wall3 = Bodies.rectangle(0,0,1600,30,{isStatic: true,
            render: {
                fillStyle: "green",
                // strokeStyle: "black",
                // lineWidth: 10
            }});
            let wall4 = Bodies.rectangle(800,0,30,1200,{isStatic: true,
                render: {
                    fillStyle: "green",
                    // strokeStyle: "black",
                    // lineWidth: 10
                }});
                let wall5 = Bodies.rectangle(0,0,30,5600,{isStatic: true,
                    render: {
                        fillStyle: "green",
                        // strokeStyle: "black",
                        // lineWidth: 10
                    }});
            let ball=Bodies.circle(200, 50, 40,{
                render: {
                    fillStyle: "white",

                    // strokeStyle: "blue",
                    // lineWidth: 10
                }
            });
            let floor=Bodies.trapezoid(500,530,500,100,.9,{
                isStatic: true,
                density:1000,
                render: {
                    fillStyle: "white",
                    // strokeStyle: "blue",
                    // lineWidth: 10

                }
            });


            let constraint1=Constraint.create({
                length:250,
                stiffness:.3,
                pointA: {x:300, y:300},
                bodyB: wall

            });


            World.add(engine.world, [shape,wall,wall2,ball,floor,cradle, constraint1,wall3,wall4,wall5]);

            let world = engine.world;
            let Mouse= Matter.Mouse;
            let MouseConstraint=Matter.MouseConstraint;
            let mouse = Mouse.create(render.canvas);
            let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
            World.add(world, mouseConstraint);
            render.mouse = mouse;
