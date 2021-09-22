class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "EnterYourName");
    this.playButton = createButton("Play");
    this.titleImage = createImg("assets/title.png");
    this.greeting = createElement("h2");
  }
  setElementsPosition(){
    this.input.position(width/2-110,height/2-80);
    this.playButton.position(width/2-90,height/2-20);
    this.greeting.position(width/2-300,height/2-100);
    this.titleImage.position(10,10);
    

  }
  display(){
    this.setElementsPosition();
    this.handleMousepressed();
  }
  handleMousepressed(){
    this.playButton.mousePressed(()=> {
      this.input.hide();
      this.playButton.hide();
      var message = ` Hello ${this.input.value()} </br>wait for another player to join...`;
      this.greeting.html(message);
    })
  }
}
