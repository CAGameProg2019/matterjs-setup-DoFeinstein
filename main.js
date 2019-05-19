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
// var polyX = 200;
// var polyX = 200
Engine.run(engine);
Render.run(render);
// var keyPressed = {
//   w: false,
//   a: false,
//   s: false,
//   d: false
//
// };
// window.addEventListener("keydown", function(event){
//   if(event.key === "w") {
//     keyPressed.w = true;
//   }
//    if(event.key === "a") {
//     keyPressed.a = true;
//   } if(event.key === "s") {
//     keyPressed.s = true;
//   } if(event.key === "d") {
//     keyPressed.d = true;
//   }
// });
// window.addEventListener("keyup", function(event){
//   if(event.key === "w") {
//     keyPressed.w = false;
//   }
//    if(event.key === "a") {
//     keyPressed.a = false;
//   } if(event.key === "s") {
//     keyPressed.s = false;
//   } if(event.key === "d") {
//     keyPressed.d = false;
//   }
// });
//

let shape=Bodies.polygon(200,200,5,100);
let wall = Bodies.polygon(50,300,4,30,{isStatic: true});
let wall2 = Bodies.polygon(700,300,4,30,{isStatic: true});
let ball=Bodies.circle(200, 50, 40);
let floor=Bodies.trapezoid(340,400,500,100,.9,{isStatic: true});
let myCar=Composites.car(350, 0, 400, 50, 100);
let soft = Composites.softBody(20,20,10,10,5,5,true,10,{isStatic: false});
let wasd = 3
World.add(engine.world, [shape,wall,wall2,ball,floor,myCar,soft]);

let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);
render.mouse = mouse;


// update(){
// if(keyPressed.w) {
//    polyY -= wasd;
//  } if(keyPressed.a) {
//    polyX -= wasd;
//  } if(keyPressed.s) {
//    polyeY += wasd;
//  } if(keyPressed.d) {
//    polyeX += wasd;
//  }
// }
