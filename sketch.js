/* ----------------------------- Variable Setup ---------------------------- */
let height = window.innerHeight;
let weight = window.innerWidth;

let arcadeRetroSong;
let barking;
let fastPunch;
let fastTransition;
let retroNotif;
let roar;
let toyWhistle;
let transition;
let whoosh;

let btn_top = [];
let btn_middle = [];
let btn_bottom = [];

function setup() {
  canvas = createCanvas(weight, height);

  /* ---------------------------- Load sound files ---------------------------- */
  arcadeRetroSong = loadSound('sound/arcadeRetroSong.wav');
  barking = loadSound('sound/barking.wav');
  fastPunch = loadSound('sound/fastPunch.wav');
  fastTransition = loadSound('sound/fastTransition.wav');
  retroNotif = loadSound('sound/retroNotif.wav');
  roar = loadSound('sound/roar.wav');
  toyWhistle = loadSound('sound/toyWhistle.wav');
  transition = loadSound('sound/transition.wav');
  whoosh = loadSound('sound/whoosh.wav');

  let spacing = 20;

/* --------------- Create buttons and add to respective arrays -------------- */
  let b1 = new Button(weight / 3, height / 3 - spacing, 200, 80, color(102, 51, 153), color(153, 102, 204), arcadeRetroSong);
  let b2 = new Button(weight / 2, height / 3 - spacing, 200, 80, color(75, 0, 130), color(138, 43, 226), barking);
  let b3 = new Button(2 * weight / 3, height / 3 - spacing, 200, 80, color(123, 104, 238), color(147, 112, 219), fastPunch);

  let b4 = new Button(weight / 3, height / 2, 200, 80, color(186, 85, 211), color(218, 112, 214), fastTransition);
  let b5 = new Button(weight / 2, height / 2, 200, 80, color(148, 0, 211), color(186, 85, 211), retroNotif);
  let b6 = new Button(2 * weight / 3, height / 2, 200, 80, color(138, 43, 226), color(153, 50, 204), roar);

  let b7 = new Button(weight / 3, 2 * height / 3 + spacing, 200, 80, color(147, 112, 219), color(123, 104, 238), toyWhistle);
  let b8 = new Button(weight / 2, 2 * height / 3 + spacing, 200, 80, color(153, 50, 204), color(186, 85, 211), transition);
  let b9 = new Button(2 * weight / 3, 2 * height / 3 + spacing, 200, 80, color(218, 112, 214), color(186, 85, 211), whoosh);

  btn_top.push(b1);
  btn_top.push(b2);
  btn_top.push(b3);

  btn_middle.push(b4);
  btn_middle.push(b5);
  btn_middle.push(b6);

  btn_bottom.push(b7);
  btn_bottom.push(b8);
  btn_bottom.push(b9);
}

function draw() {
  background(230, 215, 255);
  noStroke();

  /* ---------------------------- Display buttons ---------------------------- */
  for (let i = 0; i < btn_top.length; i++) {
    btn_top[i].show();
    btn_middle[i].show();
    btn_bottom[i].show();
  }
}

  /* -------------------------- Check for button clicks ------------------------- */
function mousePressed() {
  for (let i = 0; i < btn_top.length; i++) {
    btn_top[i].clicked(mouseX, mouseY);
    btn_middle[i].clicked(mouseX, mouseY);
    btn_bottom[i].clicked(mouseX, mouseY);
  }
}

  /* -------------------------- Reset button positions ------------------------- */
function mouseReleased() {
  let spacing = 20;
  for (let i = 0; i < btn_top.length; i++) {
    btn_top[i].y = height / 3 - spacing;
    btn_middle[i].y = height / 2;
    btn_bottom[i].y = 2 * height / 3 + spacing;
  }
}

class Button {
  constructor(x, y, w, h, color, accent, sound) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.accent = accent;
    this.sound = sound;
  }

  /* ---------------------------- Draw button shapes ---------------------------- */
  show() {
    noStroke();
    fill(this.color);
    rect((this.x - 100), this.y, this.w, 50);

    fill(this.accent);
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color);
    arc(this.x, (this.y + 50), this.w, this.h, TWO_PI, PI);
  }

  /* -------------------------- Check for button clicks ------------------------- */
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.w / 2) {
      this.y = this.y + 10;
      this.sound.play();
    }
  }
}