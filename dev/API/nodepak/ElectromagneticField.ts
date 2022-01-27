class ElectromagneticField : Field {
	const constant = 6.67e-11;
	GravitationalField() {
		ranges
	}
	void interact(list<Node> nodes) {
		for(def : defs) {
			caches.add(def(nodes));
		}
		for(cache : caches) {
			cases[i](cache);
		}
	}
}

vector<vector<Node>> ohm_case(list<Node> nodes) {
	OhmFactory.invalidate(nodes);
}
void ohm(list<Node> nodes) {
	
}

vector<vector<Node>> chemical_case(list<Node> nodes) {
	
}
void chemical(list<Node> nodes) {
	
}
