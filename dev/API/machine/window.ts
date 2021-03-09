class UIPair {
  constructor(uis) {
    for(let i in uis) {
      this[i] = uis[i]
    }
  }
}  & {
     [key: string]: GTWindow
}
class GTWindow : UI.StandardWindow {
  constructor(prefix, prototype_) {
    super(prototype_);
    
    for(let i in this.drawing) {
      if(this.drawing[i].bitmap && this.drawing[i].bitmap.contains("*")) {
        this.drawing[i].bitmap.substring(0, this.drawing[i].bitmap.indexOf("*") - 1) + prefix + this.drawing[i].bitmap.substring(this.drawing[i].bitmap.indexOf("*") + 1);
      }
    }
    
    for(let i in this.elements) {
      if(this.elements[i].bitmap && this.elements[i].bitmap.contains("*")) {
        this.elements[i].bitmap.substring(0, this.elements[i].bitmap.indexOf("*") - 1) + prefix + this.elements[i].bitmap.substring(this.elements[i].bitmap.indexOf("*") + 1);
      }
    }
  }
  
}