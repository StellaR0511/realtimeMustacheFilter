function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(400,300);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function preload(){
}

function draw(){
image(video,0,0,400,300);

}
function modelLoaded(){
    console.log("Model is Loaded!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}