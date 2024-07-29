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
  /* ------------------------------- Load Songs ------------------------------- */
  arcadeRetroSong = loadSound('arcadeRetroSong.wav');
  barking = loadSound('barking.wav');
  fastPunch = loadSound('fastPunch.wav');
  fastTransition = loadSound('fastTransition.wav');
  retroNotif = loadSound('retroNotif.wav');
  roar = loadSound('roar.wav');
  toyWhistle = loadSound('toyWhistle.wav');
  transition = loadSound('transition.wav');
  whoosh = loadSound('whoosh.wav');

  let spacing = 20;

  let b1 = new Button(weight / 3, height / 3 - spacing, 200, 80, color(226, 132, 19), color(244, 190, 124), arcadeRetroSong);
  let b2 = new Button(weight / 2, height / 3 - spacing, 200, 80, color(0, 159, 183), color(153, 241, 255), barking);
  let b3 = new Button(2 * weight / 3, height / 3 - spacing, 200, 80, color(145, 145, 233), color(204, 204, 245), fastPunch);

  let b4 = new Button(weight / 3, height / 2, 200, 80, color(205, 92, 92), color(240, 128, 128), fastTransition);
  let b5 = new Button(weight / 2, height / 2, 200, 80, color(72, 209, 204), color(175, 238, 238), retroNotif);
  let b6 = new Button(2 * weight / 3, height / 2, 200, 80, color(255, 215, 0), color(255, 255, 0), roar);

  let b7 = new Button(weight / 3, 2 * height / 3 + spacing, 200, 80, color(255, 163, 175), color(255, 214, 220), toyWhistle);
  let b8 = new Button(weight / 2, 2 * height / 3 + spacing, 200, 80, color(143, 45, 86), color(216, 131, 166), transition);
  let b9 = new Button(2 * weight / 3, 2 * height / 3 + spacing, 200, 80, color(236, 78, 32), color(234, 162, 133), whoosh);

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
  background(247, 178, 183);
  noStroke();
  for (let i = 0; i < btn_top.length; i++) {
    btn_top[i].show();
    btn_middle[i].show();
    btn_bottom[i].show();
  }
}

function mousePressed() {
  for (let i = 0; i < btn_top.length; i++) {
    btn_top[i].clicked(mouseX, mouseY);
    btn_middle[i].clicked(mouseX, mouseY);
    btn_bottom[i].clicked(mouseX, mouseY);
  }
}

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
    this.w= w;
    this.h = h;
    this.color = color;
    this.accent = accent;
    this.sound = sound;
  }

  show()  {
    noStroke();
    fill(this.color);
    rect((this.x - 100), this.y, this.w, 50);

    fill(this.accent);
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color);
    arc(this.x, (this.y + 50), this.w, this.h, TWO_PI, PI);
    }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);

    if (d < this.w / 2) {
      this.y = this.y + 10;
      this.sound.play();
    }
  }
}