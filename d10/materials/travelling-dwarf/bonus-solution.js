
var y = 0;

while (y < 20 | x < 20) {
	var x = 1;
  if (g.at(x,y)="color grey") {
  	var orientation = d.orientation()
    d.orient(orientation)
    d.move();
    x=x+1;
  } else {
    d.move();
    x=x+1;
  }

  y = y + 1;
}