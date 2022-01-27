class GravitationalField : Field {
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

vector<vector<Node>> nw_small_case(list<Node> nodes) {
	supermassive;
	lowmassive;
	for(node : nodes) {
		if(m > 10e10) {
			supermassive.add(node);
		} else {
			lowmassive.add(node);
		}
	}
	b
	for(node : supermassive) {
		a
		a.add(node);
		for(node : lowmassive) {
			if(m1 * m2 / r ^ 2 > 10e11 && m1 > m2 * 1000000) {
				a.add(node);
			}
		}
		for(node : supermassive) {
			if(m1 * m2 / r ^ 2 > 10e11 && m1 > m2 * 1000000) {
				a.add(node);
			}
		}
		b.add(a)
	}
	return b;
}
void nw_small(list<Node> nodes) {
	node.addAccel(g);
}
//not
vector<vector<Node>> nw_case(list<Node> nodes) {
	min = 0;
	max = c^2;
	min = 0.05;
	max = 1;
}
void nw(list<Node> nodes) {
	
}
