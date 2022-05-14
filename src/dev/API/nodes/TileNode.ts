//Node represents a full Block or Tile
 TileNode extends BlockState implements Node {
  tilling_only: boolean = false;
	intersection: boolean = true;
	gravity: boolean = false;
	placeable: boolean = true;
	
  constructor(BlockBase b, data: number) {
		super(b.id, data);
	}
  constructor(s: BlockState) {
		super(s.id, s.data);
	}
	constructor(id: number, data: number) {
		super(id, data);
	}
	
	tick() {}
  render() {}
	lookupAt(position, lookat, look {}
	click(position, lookat, lookdis) {}
	get(position) {}
}
