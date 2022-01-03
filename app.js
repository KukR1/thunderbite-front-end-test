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
container.sortableChildren = true;

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
vegas.zIndex = 1;
const slots = PIXI.Sprite.from("./assets/slots@2x.png");
container.addChild(slots);
slots.anchor.set(0.5);
slots.x = window.innerWidth * 0.58;
slots.y = window.innerHeight * 0.41;
slots.zIndex = 1;

const bolt = PIXI.Sprite.from("./assets/bolt@2x.png");
container.addChild(bolt);
bolt.anchor.set(0.5);
bolt.x = window.innerWidth * 0.509;
bolt.y = window.innerHeight * 0.405;
bolt.alpha = 0;
bolt.zIndex = 1;

const sLetter = PIXI.Sprite.from("./assets/s@2x.png");
container.addChild(sLetter);
sLetter.anchor.set(0.5);
sLetter.x = window.innerWidth * 0.37;
sLetter.y = window.innerHeight * 0.525;
sLetter.zIndex = 0;
sLetter.alpha = 0;

const hLetter = PIXI.Sprite.from("./assets/h@2x.png");
container.addChild(hLetter);
hLetter.anchor.set(0.5);
hLetter.x = window.innerWidth * 0.41;
hLetter.y = window.innerHeight * 0.53;
hLetter.zIndex = 0;
hLetter.alpha = 0;

const oLetter = PIXI.Sprite.from("./assets/o-1@2x.png");
container.addChild(oLetter);
oLetter.anchor.set(0.5);
oLetter.x = window.innerWidth * 0.44;
oLetter.y = window.innerHeight * 0.53;
oLetter.zIndex = 0;
oLetter.alpha = 0;

const wLetter = PIXI.Sprite.from("./assets/w-1@2x.png");
container.addChild(wLetter);
wLetter.anchor.set(0.5);
wLetter.x = window.innerWidth * 0.48;
wLetter.y = window.innerHeight * 0.52;
wLetter.zIndex = 0;
wLetter.alpha = 0;

const dLetter = PIXI.Sprite.from("./assets/d@2x.png");
container.addChild(dLetter);
dLetter.anchor.set(0.5);
dLetter.x = window.innerWidth * 0.525;
dLetter.y = window.innerHeight * 0.51;
dLetter.zIndex = 0;
dLetter.alpha = 0;

const o2Letter = PIXI.Sprite.from("./assets/o-2@2x.png");
container.addChild(o2Letter);
o2Letter.anchor.set(0.5);
o2Letter.x = window.innerWidth * 0.558;
o2Letter.y = window.innerHeight * 0.515;
o2Letter.zIndex = 0;
o2Letter.alpha = 0;

const w2Letter = PIXI.Sprite.from("./assets/w-2@2x.png");
container.addChild(w2Letter);
w2Letter.anchor.set(0.5);
w2Letter.x = window.innerWidth * 0.59;
w2Letter.y = window.innerHeight * 0.525;
w2Letter.zIndex = 0;
w2Letter.alpha = 0;

const nLetter = PIXI.Sprite.from("./assets/n@2x.png");
container.addChild(nLetter);
nLetter.anchor.set(0.5);
nLetter.x = window.innerWidth * 0.633;
nLetter.y = window.innerHeight * 0.525;
nLetter.zIndex = 0;
nLetter.alpha = 0;

const drop = PIXI.Sprite.from("./assets/must_drop.png");
drop.width = 700;
drop.height = 200;
container.addChild(drop);
drop.anchor.set(0.5);
drop.x = window.innerWidth * 0.5;
drop.y = window.innerHeight * 0.62;
drop.zIndex = 1;
drop.alpha = 0;

class Attributes {
   constructor(total, delay, currFrame, direction, startAnimation, endAnimation) {
      this.total = total;
      this.delay = delay;
      this.currFrame = currFrame;
      this.direction = direction;
      this.startAnimation = startAnimation;
      this.endAnimation = endAnimation;
   }
}
const boltAttr = new Attributes(0, 0.9, 0, 1, 100, 0);
app.ticker.add((delta) => {
   boltAttr.total += delta;
   boltAttr.currFrame += delta;
   boltAttr.endAnimation += delta;
   if (boltAttr.total > boltAttr.startAnimation) {
      if (boltAttr.endAnimation <= 400) {
         if (boltAttr.currFrame >= boltAttr.delay) {
            boltAttr.currFrame = 0;
            if (boltAttr.direction === 1) {
               if (bolt.alpha < 1) {
                  bolt.alpha += 1 * delta;
               } else {
                  boltAttr.direction = -1;
               }
            } else {
               if (bolt.alpha > 0) {
                  bolt.alpha -= 1 * delta;
               } else {
                  boltAttr.direction = 1;
               }
            }
         }
      } else {
         bolt.alpha = 1;
      }
   }
});

const vegasAttr = new Attributes(0, 1.5, 0, 1, 0, 0);

app.ticker.add((delta) => {
   vegasAttr.currFrame += delta;
   vegasAttr.endAnimation += delta;
   if (vegasAttr.endAnimation <= 100) {
      if (vegasAttr.currFrame >= vegasAttr.delay) {
         vegasAttr.currFrame = 0;
         if (vegasAttr.direction === 1) {
            if (vegas.alpha < 1) {
               vegas.alpha += 1 * delta;
            } else {
               vegasAttr.direction = -1;
            }
         } else {
            if (vegas.alpha > 0) {
               vegas.alpha -= 1 * delta;
            } else {
               vegasAttr.direction = 1;
            }
         }
      }
   } else {
      vegas.alpha = 1;
   }
});
const slotsAttr = new Attributes(0, 1.5, 0, 1, 0, 0);

app.ticker.add((delta) => {
   slotsAttr.currFrame += delta;
   slotsAttr.endAnimation += delta;
   if (slotsAttr.endAnimation <= 100) {
      if (slotsAttr.currFrame >= slotsAttr.delay) {
         slotsAttr.currFrame = 0;
         if (slotsAttr.direction === 1) {
            if (slots.alpha < 1) {
               slots.alpha += 1 * delta;
            } else {
               slotsAttr.direction = -1;
            }
         } else {
            if (slots.alpha > 0) {
               slots.alpha -= 1 * delta;
            } else {
               slotsAttr.direction = 1;
            }
         }
      }
   } else {
      slots.alpha = 1;
   }
});

setTimeout(function () {
   (async () => {
      await delay(200);
      sLetter.alpha = 1;
      await delay(200);
      hLetter.alpha = 1;
      await delay(200);
      oLetter.alpha = 1;
      await delay(200);
      wLetter.alpha = 1;
      await delay(200);
      dLetter.alpha = 1;
      await delay(200);
      o2Letter.alpha = 1;
      await delay(200);
      w2Letter.alpha = 1;
      await delay(200);
      nLetter.alpha = 1;
   })();
}, 3000);
async function delay(duration) {
   return new Promise((resolve) => {
      setTimeout(() => resolve(), duration);
   });
}

setTimeout(function () {
   var timesRun = 0;
   drop.alpha = 1;
   var interval = window.setInterval(function () {
      timesRun += 1;
      if (timesRun === 10) {
         clearInterval(interval);
      }
      if (drop.alpha == 1) {
         drop.alpha = 0;
      } else {
         drop.alpha = 1;
      }
   }, 100);
}, 5000);

app.stage.addChild(container);
document.body.appendChild(app.view);
