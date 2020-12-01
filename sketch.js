let colors = ["red","blue","red","yellow","yellow","green","blue","green"]
let cards = []

function setup() {
  createP("Matching Game")
  
  for (let i=0; i<8; i++) {
    cards[i] = createButton("Card")
    //cards[i] means one button
    cards[i].style("background-color",colors[i])
    cards[i].mouseClicked(onCardClick)
  }  
}

function onCardClick() {
  let thisColor = this.style("background-color")
  console.log(thisColor)
}
