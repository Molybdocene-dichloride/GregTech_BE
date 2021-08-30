///<reference path="C:\\Users\\111\\Desktop\\projects\\innercore-mod-toolchain-master\\toolchain-mod\\toolchain\\declarations\\core-engine.d.ts"/>
class Colour {
  r: number; 
  g: number;
  b: number;
  a?: number;
}
class ChunkBase extends Animation.Base {
  render: ChunkRender;
  constructor(x: number, y: number, z: number, colour: Colour) {
    super(x, y, z);
    if(this.render == null) this.render = new ChunkRender(colour);
    this.describe({render: this.render.getId()});
  }
}
class ChunkRender extends Render {
  colour: Colour;
  wall: Render.ModelPart[];
  constructor(colour: Colour) {
    super();
    this.colour = colour;
    for(let i = 0; i < 6; i++) {
      this.wall.push(this.addWallPart("wall", i));
    }
  }
  addWallPart(name: string, side: number) : Render.ModelPart {
    let pos = {x: PipeNetBuilder.directions[side].x * 16, y: PipeNetBuilder.directions[side].y * 16, z: PipeNetBuilder.directions[side].z * 16};
    
    let part = this.addPart(name + side);
    
    let mesh = new RenderMesh();
    
    mesh.addVertex(0, 0, 0, 0, 0);
    mesh.addVertex(0, 256, 0, 0, 0);
    mesh.addVertex(0, 0, 0, 0, 0);
    
    let c = PipeNetBuilder.getNormalRelativeCoords(pos.x, pos.y, pos.z, side);
    
    mesh.addVertex(c.x, 0, c.z, 0, 0);
    mesh.addVertex(c.x, 256, c.z, 0, 0);
    mesh.addVertex(c.x, 0, c.z, 0, 0);
    
    mesh.addVertex(c.x, 0, c.z, 0, 0);
    mesh.addVertex(0, 0, 0, 0, 0);
    mesh.addVertex(c.x, 0, c.z, 0, 0);
    
    mesh.addVertex(c.x, 256, c.z, 0, 0);
    mesh.addVertex(0, 256, 0, 0, 0);
    mesh.addVertex(c.x, 256, c.z, 0, 0);
    
    mesh.setColor(this.colour.r, this.colour.g, this.colour.b, this.colour.a);
    
    part.setMesh(mesh);
    
    return part;
  }
}