// alert('Hello alert message')
console.log('Hello console message')
document.write('Hello document message')

// var, let, const

// var/let/cosnt variable-name = value

console.log(myVar)

var myVar = 'Hello this is my variable'

myVar = 'change myVar'

console.log(myVar)

let myLet = 'This is my let vaiable'

myLet = 'change myLet'

console.log(myLet)

const myConst = 'This is my const vaiable'

console.log(myConst)


console.log(10 + 20 + '20' + 10)

console.log(10 + '20' - 15)


let num1 = 50 // 40
let num2 = 40 // 50

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)


console.log(num1, num2)

// let num3 = num1 // 50
// num1 = num2 // 40
// num2 = num3 // 50

num1 = num1 + num2
num2 = num1 - num2
// num1 = num1 - num2
num1 -= num2

console.log(num1, num2)


let str1 = 'Welcome, '
let str2 = 'Yedil'

let result = str1 + str2

console.log(result)


console.log(Math.floor(2.9))
console.log(Math.ceil(2.1))
console.log(Math.round(2.6))

console.log(Math.pow(4, 4))
console.log(Math.sqrt(25))

console.log(Math.min(23, 564, 123, 22, 53))
console.log(Math.max(23, 564, 123, 22, 53))

console.log(Math.abs(-5))

let rand = Math.floor(Math.random() * 100)

console.log(rand)


let name = prompt()
let res = confirm()

console.log(name)
console.log(res)


// let n1 = parseInt(prompt('Enter num 1'))
// let n2 = parseInt(prompt('Enter num 2'))

// let n1 = Number(prompt('Enter num 1'))
// let n2 = Number(prompt('Enter num 2'))

let n1 = +(prompt('Enter num 1'))
let n2 = +(prompt('Enter num 2'))

console.log(n1 + n2)

// camleCase, PascalCase, sanake_case, kebab-case, SCREAMCASE, UPPER_SNAKE_CASE