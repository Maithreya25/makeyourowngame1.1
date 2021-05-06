var character,characterimg;
var gamestate = 0;
var bots,megabot;
var bullet,bulletimg;
var backgorund1,background2,backgound1img,background2img;
var killcount,killcountimg;
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;
var engine,world;


function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;
}

function draw(){

}