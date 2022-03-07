class GTTierableWindow extends UI.StandardWindow {
  currentMainWindow = this.getWindow("main");
  constructor(id, tier) {
    super(null);
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
