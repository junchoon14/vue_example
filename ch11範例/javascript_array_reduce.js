const scores = [59,62,38,77,86,12,98]
let sum = 0
scores.map((score)=> {
    sum += score
})

console.log(sum/scores.length)

console.log(scores.reduce(
    (sum, score) => sum + score)
    /
    scores.length
)

