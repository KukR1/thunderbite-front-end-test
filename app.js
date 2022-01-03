const Application = PIXI.Application;

const app = new Application({
   width: 500,
   height: 500,
   transparent: false,
   antialias: true,
});
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
/* Getting rid of white spaces */
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = "absolute";

/* Adding background Image */
const bgnTexture = PIXI.Texture.from("./assets/header.png");
const bgnSprite = new PIXI.Sprite(bgnTexture);
bgnSprite.width = window.innerWidth;
bgnSprite.height = window.innerHeight;
app.stage.addChild(bgnSprite);

const container = new PIXI.Container();

const showdownoff = PIXI.Sprite.from("./assets/showdown-off.png");
container.addChild(showdownoff);
showdownoff.anchor.set(0.5);
showdownoff.x = window.innerWidth / 2;
showdownoff.y = window.innerHeight / 2;

const vegas = PIXI.Sprite.from("./assets/vegas@2x.png");
container.addChild(vegas);
vegas.anchor.set(0.5);
vegas.x = window.innerWidth * 0.435;
vegas.y = window.innerHeight * 0.41;

const slots = PIXI.Sprite.from("./assets/slots@2x.png");
container.addChild(slots);
slots.anchor.set(0.5);
slots.x = window.innerWidth * 0.58;
slots.y = window.innerHeight * 0.41;

const bolt = PIXI.Sprite.from("./assets/bolt@2x.png");
container.addChild(bolt);
bolt.anchor.set(0.5);
bolt.x = window.innerWidth * 0.509;
bolt.y = window.innerHeight * 0.405;

app.stage.addChild(container);
document.body.appendChild(app.view);
