const types = {
  "0": "injury",
  "1": "victory",
  "2": "sadness",
}

// Data about team
const data = [
  // games, % wins, fans
  [8.5, 0.65, 1.2],
  [9.5, 0.8, 1.3],
]

// Weight for team
const weight = [
  [0.1, 0.1, -0.3], // injury
  [0.1, 0.2, 0.0], // victory
  [0.0, 1.3, 0.1], // sadness
]

function weightedSum (input, weight) {
  return weight.reduce((acc, curWeight, index) => {
    return acc + (input[index] * curWeight)
  }, 0)
}

function weightedSumWithMatrix (input, weights) {
  return input.map((item, index) => {
    const weightForCurInput = weights[index]
    return weightedSum(input, weightForCurInput)
  })
}

function neuralNetwork (inputs, weights) {
  const result = []

  inputs.forEach((input) => {
    const resultInput = weightedSumWithMatrix(input, weights)
    result.push(resultInput)
  })

  return result
}

console.log(neuralNetwork(data, weight))
