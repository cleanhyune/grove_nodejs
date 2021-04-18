const a = 5

console.log(`the value is ${a}`)

const obj = {a:1, b:2, c:3}

console.log(1, obj)

setInterval(() => {
    console.log(`now time is ${new Date()}`)
}, 5000)

console.log('blue print! \033[36m' + new Date() + '\033[0m:')