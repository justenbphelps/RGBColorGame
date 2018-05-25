
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   //
//          Random Color Game           //
//          by: Justen Phelps           //
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   //

let numSquares = 6
let colors = generateRandomColors(numSquares)
const squares = document.querySelectorAll('.square')
let pickedColor = pickColor()
const colorDisplay = document.getElementById('colorDisplay')
const messageDisplay = document.querySelector('#message')
let h1 = document.querySelector('h1')
const topContainer = document.querySelector('#topContainer')
const resetButton = document.getElementById('reset')
let popSound = new Audio('pop.wav')
let winSound = new Audio('win.wav')
popSound.volume = 0.3
winSound.volume = 0.05
colorDisplay.textContent = pickedColor;


let easyButton = document.querySelector('#easyButton')
let hardButton = document.querySelector('#hardButton')




function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "Click a square to guess";
    resetButton.textContent = "New Colors";
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block'
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = 'none'
        }
    }
    topContainer.style.backgroundColor = "white";
}

// Easy button
easyButton.addEventListener('click', function(){
    hardButton.classList.remove('selected')
    easyButton.classList.add('selected')
    numSquares = 3
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for (let i = 0; i < squares.length; i++) {
      if (colors[i]) {
          squares[i].style.backgroundColor = colors[i]
      } else {
          squares[i].style.display = 'none'
      }
    }
})

// Hard button
hardButton.addEventListener('click', function () {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display = 'block'
    }
})

// Reset Button
resetButton.addEventListener('click', function(){
    reset()
})


// Correct / False Button Functions
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener('click',function(){
        let clickedColor = this.style.backgroundColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct'
            changeColors(clickedColor)
            topContainer.style.backgroundColor = clickedColor
            resetButton.textContent = 'Play Again'
            winSound.play()
        } else {
            this.style.backgroundColor = 'white'
            messageDisplay.textContent = 'Try Again'
            popSound.play()
        }
    })
}

// loop through and change each square color
function changeColors(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color 
    }
}
// returns random color value
function pickColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}
// pushes random color into arr
function generateRandomColors(num){
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr
}
// generates random color
function randomColor(){
   let r = Math.floor(Math.random() * 256)
   let g = Math.floor(Math.random() * 256)
   let b = Math.floor(Math.random() * 256)

   return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}