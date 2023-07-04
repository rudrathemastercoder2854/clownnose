noseX=0;
noseY=0;
function preload(){
clownnose= loadImage('https://i.postimg.cc/zDs1Tn8c/clown-nose.png');
}
function setup(){
  canvas=  createCanvas(500,400);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(500,400);
  video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}
function draw(){
  image(video,0,0,400,400);
  fill(255,0,0);
  stroke(255,0,0);
  image(clownnose,noseX,noseY,30,30);
}
function take_snapshot(){
    save('filter_name.png');
}  
function modelLoaded(){
  console.log("PoseNet Loaded Succesfully");
  
}function gotPoses(results){
 if(results.length > 0){
  console.log(results);
noseX=results[0].pose.nose.x-65;
noseY=results[0].pose.nose.y-5;
 console.log("The nose x" + noseX);
 console.log("The nose y" + noseY);
 }
}
