function preload() {
    img = loadImage('bdimg.jpg');
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color ="";
}

function draw() {
    image(img, 0, 0, 640, 480);
    image(video, 200, 150, 280, 180);
    
    

    bezier(180, 120, 50, 50, 190, 230, 115, 250);
    bezier(180, 120, 60, 60, 200, 240, 115, 250);
    bezier(180, 120, 70, 70, 210, 250, 115, 250);
    fill(2, 204, 128);
    circle(180, 130, 50);
    circle(180, 350, 50);
    circle(500, 350, 50);
    circle(500, 130, 50);

    fill(255, 204, 0);
    rect(170, 155, 20, 170);
    rect(205, 340, 270, 20);
    rect(490, 155, 20, 170);
    rect(205, 120, 270, 20);




    tint(tint_color);
    
    
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}