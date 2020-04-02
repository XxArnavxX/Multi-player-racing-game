var canvas, backgroundImg;
var gameState = 0;
var playerCount;

var database;

var form, game, player;

function setup(){
    canvas = createCanvas(800, 800);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    
}