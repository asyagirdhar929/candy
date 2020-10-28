
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var back;

function preload()
{

}
function setup() 
{
  back=new backg(200,200,400,10);
}

    function draw(){
back.display();
}