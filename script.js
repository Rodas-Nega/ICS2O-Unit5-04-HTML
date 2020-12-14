'use strict'

document.getElementById('solution').addEventListener('click', calculateAreaOfTrapezoid)

function calculateAreaOfTrapezoid () {
  const a = document.getElementById('side_a').value // assigning a side (a) value to length variable 
  const b = document.getElementById('side_b').value // assigning a side (b) value to length variable 
  const height = document.getElementById('height').value // assigning a value to height variable
  const area = (parseInt(a) + parseInt(b)) / 2 * height // assigning an area variable to a trapezoid area equation
  document.getElementById('solution').innerHTML = area + ' cm2 ' // show answer
  if (a === 0) {
    alert("Error: Dimensions can't be a '0'")
  } else if (a <= 0) {
    alert("Error: Dimensions can't be a negative integer")
  }
  if (b === 0) {
    alert("Error: Dimensions can't be a '0'")
  } else if (b <= 0) {
    alert("Error: Dimensions can't be a negative integer")
  }
  if (height === 0) {
    alert("Error: Dimensions can't be a '0'")
  } else if (height <= 0) {
    alert("Error: Dimensions can't be a negative integer")
  }
}
