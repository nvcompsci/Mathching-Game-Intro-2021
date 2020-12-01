let colors = ["red","blue","red","yellow","yellow","green","blue","green"]
let cards = []
let clicks = 0

function setup() {
  createP("Matching Game")
  
  for (let i=0; i<8; i++) {
    cards[i] = createButton("Card")
    //cards[i] means one button
    //cards[i].style("background-color",colors[i])
    cards[i].id(i)
    cards[i].mouseClicked(onCardClick)
  }  
}

function onCardClick() {
  clicks++
  console.log(this.id())
  
  this.style("background-color",colors[this.id()])
  
  if (clicks > 2) {
    resetButtons()
  }
}

function resetButtons() {
  clicks = 0
  for (let i=0; i < 8; i++) {
    cards[i].style("background-color","grey")
  }
}
