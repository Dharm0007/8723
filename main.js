function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');

    document.getElementById("sqare_side").innerHTML = "width and Height of a square will be = " + difference +"px";
    Fill('#F90093');
    stroke('#F90093');
    sqare(noseX, noseY, 100);

}

function modelLoaded() {
    console.log('poseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.leftWrist.x;
        nosey = results[0].pose.leftWrist.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + " difference = " + difference);

    }
}