const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
   
    drops = new Drops(500,500);
}

function draw(){
    
}   

