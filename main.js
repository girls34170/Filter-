nosex=0;
nosey=0;
function preload(){
    clips=loadImage("https://i.postimg.cc/Gptf6kMT/download-removebg-preview-Copy.png");
}
function setup (){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    //starting posenet model
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function modelloaded(){
    console.log("model has loaded");
}
function gotposes(results){
 if(results.length>0){
  console.log(results);
  nosex=results[0].pose.nose.x-50;
  nosey=results[0].pose.nose.y-35;
}
}
function draw(){
    image(video,0,0,300,300);
    image(clips,nosex,nosey,100,50);
}
function takesnapshot(){
    save("clips.png");
}