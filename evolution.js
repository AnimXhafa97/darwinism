running = true;

function createCanvas() {
    var canvas = document.getElementById('canvas')
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d')
    }
}

//helper function for getting a random integer from min - max, inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)+min)
}


class Bubble {

  constructor () {
    this.x = 100
    this.y = 200
  }

  move() {
    this.x = this.x + getRandomInt(-5, 5)
    this.y = this.y + getRandomInt(-5, 5)
  }

  show() {
    var canvas = getElementById('canvas')
    var ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.arc(100, 100, 25, 0, 2 * Math.PI)
    ctx.fill();
    ctx.stroke()
  }

}

function runAlgo() {
  while (running) {
    let bubble = Bubble()
  }
}

function stopAlgo() {
  running = false;
}