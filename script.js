function setup()
{
	createCanvas(600, 500);
	fill(0);
}

function draw()
{
	var angle;

	background(228, 225, 232);
	strokeWeight(5);
	
	fill(250);
	stroke(255);
	ellipse(300, 250, 275, 275);
	noFill();
	strokeWeight(1);
	stroke(230);
	ellipse(300, 250, 270, 270);

	var time = new Date();
	var hr = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();
	if (hr > 12)
	{
		hr = hr - 12;
	}

	stroke(50);
	noFill();
	strokeCap(SQUARE);

	// Hour
	strokeWeight(5);
	angle = (hr * Math.PI / 6) - (Math.PI/2);
	line(300, 250, 300 + (67 * Math.cos(angle)), 250 + (67 * Math.sin(angle)));

	// Minute
	strokeWeight(3);
	angle = (min * Math.PI / 30) - (Math.PI/2);
	line(300, 250, 300 + (95 * Math.cos(angle)), 250 + (95 * Math.sin(angle)));

	// Second
	strokeWeight(2);
	stroke(255, 0, 0);
	angle = (sec * Math.PI / 30) - (Math.PI/2);
	line(300, 250, 300 + (100 * Math.cos(angle)), 250 + (100 * Math.sin(angle)));

	// Pin
	stroke(1);
	fill(255);
	ellipse(300, 250, 10, 10);


}