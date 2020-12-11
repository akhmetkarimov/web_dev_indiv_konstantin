// if (condition) {}
// else if (condition) {}
// else if (condition) {}
// else if (condition) {}
// else if (condition) {}
// else {}

// ==, ===, >, <, >=, <=, !, !=, !==

// if (10 == 20) {
//     console.log('10==10')
// } else if (20 < 5) {
//     console.log('20 > 5 1')
// } else if (20 > 5) {
//     console.log('20 > 5 2')
// } else if (20 > 5) {
//     console.log('20 > 5 3')
// } else if (20 > 5) {
//     console.log('20 > 5 4')
// } else {
//     console.log('else out')
// }

// if (20 > 5) {
//     console.log('20 > 5 3')
// } 

// if (20 > 5) {
//     console.log('20 > 5 4')
// }

// if (20 > 5) {
//     console.log('20 > 5 5')
// }


// let num1 = Number(prompt('Enter number 1'))
// let num2 = Number(prompt('Enter number 2'))
// let num3 = Number(prompt('Enter number 3'))


// if (num1 > num2 && num1 > num3)  {
//     c
// } else if (num2 > num1 && num2 > num3) {
//     console.log(num2)
// } else {
//     console.log(num3)
// }


// let max = 0

// if (num1 > max ) {
//     max = num1 
// } 
// if (num2 > max) {
//     max = num2
// }
// if (num3 > max) {
//     max = num3
// }

// console.log (max)





// let n = Number(prompt('Enter number'))

// if (n % 2 == 0) {
//     console.log('Even')
// } else {
//     console.log('Odd')
// }

// ||, &&

// true || fasle
//  true && true

// if (10 > 5 && 2 < -1) {
//     console.log('AND')
// } else {
//     console.log('AND else')
// }

// if (10 < 5 || 2 < -1) {
//     console.log('OR')
// } else {
//     console.log('OR else')
// }


// let result = Number(prompt('Enter number')) % 2 == 0 ? 'Even' : 'Odd'

// console.log(result)


// let username = prompt('Enter username')

// if (username == 'admin') {
//     console.log('Welcome admin')
// } else {
//     console.log('Error')
// }



// let x = Number(prompt('Enter x'))
// let y = Number(prompt('Enter y'))
// if (x>0 && y>0){
// console.log ('1')}
//  else if (x<0 && y>0) {
//      console.log ('2')
//  }
//  else if (x<0 && y<0) {
//      console.log ('3')
//  }
//  else if (x>0 && y<0){
//      console.log ('4')
//  }

let a =  prompt('a')
let b = prompt('b')
let c = prompt('c')
let d = ((b*2)- 4*a*c)

if (d>0) {
    console.log(-b - Math.sqrt(d) / 2 * a)
    console.log(-b + Math.sqrt(d) / 2 * a)
} else {
    console.log(-b / 2 * a)
}