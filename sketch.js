let colors = ["red", "blue", "red", "yellow", "yellow", "green", "blue", "green"]
let cards = []
let clicks = 0
let lastColor
let score = 0
let scoreBox

function setup() {
  createP("Matching Game")

  for (let i = 0; i < 8; i++) {
    cards[i] = createButton("Card")
    //cards[i] means one button
    //cards[i].style("background-color",colors[i])
    cards[i].id(i)
    cards[i].mouseClicked(onCardClick)
  }
  scoreBox = createP("Score: 0")
}

function onCardClick() {
  clicks++
  console.log(this.id())

  let currentColor = colors[this.id()]

  if (clicks == 2) {
    if (currentColor == lastColor) {
      console.log("right!")
      score += 2
      scoreBox.html("Score: " + score)
    } else {
      console.log("wrong!")
    }
  }
  lastColor = currentColor

  this.style("background-color", colors[this.id()])

  if (clicks > 2) {
    resetButtons()
  }
}

function resetButtons() {
  clicks = 0
  for (let i = 0; i < 8; i++) {
    cards[i].style("background-color", "grey")
  }
}
