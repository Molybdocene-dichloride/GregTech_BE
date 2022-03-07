class OhmNetwork {
	list<Node> nets;
	
	ValidationResult ch;
	
	OhmNetwork() {
		
	}
	OhmNetwork(nodes) {
		netts[generator].invalidate(nodes);
	}
	invalidate(ValidationResult nodes) {
		checked;
		for(node : nodes.unchecked) {
			for(node : nodes) {
				if(node == node) {
					checked = node;
					break;
				}
				if(node.inter(node)) {
					
				}
			}
		}
		for(node : nodes.checked) {
			for(node : nodes) {
				if(node.inter(node)) {
					merge
				}
			}
		}
	}
	intersects() {
		
	}
}
struct ValidationResult {
	unchecked,
	checked
}
namespace OhmFactory {
	list<OhmNetwork> nets;
	map<Node, OhmNetwork> netts;
	invalidate(list<Node> nodes) {
		list<Node> generators;
		for(node : nodes) {
			if(node.generator) {
				generators[0] = node;
			} else {
				others[0] = node;
			}
		}
		ValidationResult unchecked = {unchecked: nodes, checked: list<Node>};
		for(net : netts) {
			if(netts[generator]) {
				unchecked = netts[generator].invalidate(unchecked);
			} else {
				netts[generator] = OhmNetwork(unchecked);
			}
		}
		for(generator : generators) {
			netts[generator] = OhmNetwork(unchecked);
			checked = netts[generator].constructedres();
		}
	}
}
