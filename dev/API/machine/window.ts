class UIPair {
  constructor(uis) {
    for(let i in uis) {
      this[i] = uis[i]
    }
  }
}  & {
     [key: string]: windowcontent
}


class GTWindow : UI.StandardWindow {
  currentMainWindow: this.getWindow("main");
  constructor(prefix, prototype_, prototype1) {
    super(prototype_);
    
    this.addWindow(prototype1);
    
    for(let i in this.drawing) {
      if(this.getWindow("main").drawing[i].bitmap && this.getWindow("main").drawing[i].bitmap.contains("*")) {
        this.getWindow("main").drawing[i].bitmap.substring(0, this.getWindow("main").drawing[i].bitmap.indexOf("*") - 1) + prefix + this.getWindow("main").drawing[i].bitmap.substring(this.getWindow("main").drawing[i].bitmap.indexOf("*") + 1);
      }
    }
    
    for(let i in this.getElements("main")) {
      if(this.getElement("main", i).bitmap && this.getElement("main", i).bitmap.contains("*")) {
        this.getElement("main", i).bitmap.substring(0, this.getElement("main", i).bitmap.indexOf("*") - 1) + prefix + this.getElement("main", i).bitmap.substring(this.getElement("main", i).bitmap.indexOf("*") + 1);
      }
    }
    for(let i in this.getElements("main1")) {
      if(this.getElement("main1", i).bitmap && this.getElement("main1", i).bitmap.contains("*")) {
        this.getElement("main1", i).bitmap.substring(0, this.getElement("main1", i).bitmap.indexOf("*") - 1) + prefix + this.getElement("main1", i).bitmap.substring(this.getElement("main1", i).bitmap.indexOf("*") + 1);
      }
    }
  },
  getMainWindow() {
    return this.currentMainWindow;
  },
  getElements(window) {
    return this.getWindow(window).getElements();
  },
  getElements() {
    return this.currentMainWindow.getElements();
  }
  getElement(window, name) {
    return this.getWindow(window).getElements().get(name);
  },
  getElement(name) {
    return this.currentMainWindow.getElements().get(name);
  }
  getContent() {
    return this.currentMainWindow.getContent();
  }
  getContent(window) {
    return this.getWindowContent(window);
  }
  getStyle() {
    return this.currentMainWindow.getStyle();
  }
}