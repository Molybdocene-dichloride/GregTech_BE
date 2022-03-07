class TheUniverse : NodeList {
	list<Field> fields;
	
	TheUniverse(list<Field> fields, intersection: boolean = false, renderable: boolean = true) {
		super(true, intersection, renderable, id, data);
		this.fields = fields;
	}
	tick() {
		for(i in fields) fields[i].interact(nodes);
	}
}
//gr
