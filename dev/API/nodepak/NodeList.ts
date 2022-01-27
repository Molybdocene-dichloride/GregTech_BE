class NodeList : Node {
	private nodes;
	
	NodeList(tilling_only: boolean = false, intersection: boolean = false, gravity: boolean = true, renderable: boolean = true) {
		super(true, intersection, gravity, renderable);
	}
	invalidate() {
		
	}
	tick() {
		for(i in nodes) nodes[i].interact(nodes);
	}
	render() {
		for(i in nodes) {
			if(nodes[i].isVisible()) nodes[i].render();
		}
	}
	lookupAt(position, lookat, lookdis): Node {
		for(i in nodes) {
			if(nodes[i].isVisible()) nodes[i].lookupAt(clk);
		}
	}
	click(position, lookat, lookdis): Node {
		for(i in nodes) {
			if(nodes[i].isClickable()) nodes[i].click(clk);
		}
	}
	get(position): Node {
		for(i in nodes) {
			nodes[i].lookup(clk);
		}
	}
}
