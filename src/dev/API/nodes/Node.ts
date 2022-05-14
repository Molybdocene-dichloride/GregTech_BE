interface Node {
  placeable: boolean:
	tilling_only: boolean;
	intersection: boolean;
	gravity: boolean;
	
	//Node(tilling_only: boolean = false, intersection: boolean = false, renderable: boolean = false);
	
	invalidate();
	tick();
	render();
	lookupAt(position, lookat, lookdis);
	click(position, lookat, lookdis);
	get(position);
}
