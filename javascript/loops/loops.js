// while, for, do while
// while (condition) {}


// let counter = 0
// let sum = 0

// while (counter <= 20) {
//     // console.log(counter)
//     if (counter % 2 == 0) {
//         console.log(counter)
//         sum += counter
//     }
//     counter += 1
// }

// console.log(sum)

// let username = "", counter = 0

// while (username != 'admin') {
//     username = prompt('Enter username')   
//     counter += 1
// }

// console.log('Welcome Admin', 'Failed attepts', counter)


// let num = 142342 // 2 + 4 + 3 + 2 + 4 + 1 = 16
// let sum = 0, pro = 1


// while (num > 0) {
//     let temp = num % 10
//     sum += temp
//     pro *= temp
//     num = Math.floor(num / 10)
// }

// console.log(sum)
// console.log(pro)



// let counter = -20


// while (counter < 20) {

//     if (counter % 2 !== 0 && counter < 0) {
//         console.log(counter)
//     }

//     counter += 1

// }


// 5! = 1 * 2 * 3 * 4 * 5 = 120


// let num = Number(prompt('Enter factorial number'))
// let factorial = 1

// let counter = 1

// while (num >= counter) {
//     factorial *= counter // 1 * 1 = 1 * 2 = 2 * 3 = 6 * 4 = 24 * 5 = 120
//     counter += 1 // 1 + 1 = 2 + 1 = 3 + 1 = 4 + 1 = 5
// }

// console.log(factorial)


// for (start; condition; action) {}

// for (let i = 1; i < 20; i += 1) {
//     console.log(i)
// }

// for (let i = 1; i < 20; i += 1) {

//     if (i % 2 == 0) {
//         console.log(i)
//     }

// }

// let sum = 0

// for (let i = 0; i < 20; i += 2) {
//     if (i == 14) {
//         break
//     }
//     sum += i
// }

// console.log(sum)

// let sum = 0

// for (let i = 1; i < 20; i = i + 1) {
//     // console.log(`${sum} + ${i} = ${sum+i}`)
//     sum = sum + i
// }   

// // console.log(sum)
// let sum = 0
// for (let i = 0; i < 20 ; i = i + 1) {
//     if (i % 2 == 0) {
//         console.log(`${sum} + ${i} = ${sum+i}`)
//         sum = sum + i
//     }
// }
// console.log (sum)


// 5! = 1 * 1 = 1
// 1 * 2 = 2
// 2 * 3 = 6
// 6 * 4 = 24
// 24 * 5 = 120 
// let factorial = 1
// for (let i = 1; i <= 5; i = i + 1) {
//     console.log(`${factorial} * ${i} = ${factorial+i}`)
//     factorial = factorial * i
// }

// console.log(factorial)


// for (let i = 0; i < 20; i = i + 1) {
//     console.log(i)
// }

// for ( let i = 10; i <= 20; i = i + 1) {
//     console.log (i*i)
// }

// let sum = 1

// for ( let i = 200 ; i <= 234; i = i + 1 ) {
//     sum = sum * i
// }
 
// console.log(sum)

//  for (let i = 1; i <=24; i = i + 1) {
//      console.log(i * 60 * 60)
//  }



// while (10 > 30) {
//     console.log('WHILE')
// }


// do {
//     console.log('DO WHILE')
// } while (10 > 30)



// let num = 142342 // 2 + 4 + 3 + 2 + 4 + 1 = 16
// let countEven = 0

// while (num > 0) {
//     let temp = num % 10
    
//     if (temp % 2 == 0) {
//         countEven = countEven + 1
//     }
    
//     num = Math.floor(num / 10)
// }

// console.log(countEven)


// let result = ''
// for (let i = 0; i < 6; i++) {
//     result += '*'
//     document.write('*')
//     console.log('*')
// }
// console.log(result)

// for (let i = 0; i < 4; i++) {

//     for (let j = 0; j < 4; j++) {
//         document.write('*')
//     }

//     document.write('<br>')
// }


// for (let i = 0; i < 4; i++) {

//     for (let j = 0; j < 4; j++) {
//         document.write('row: ' + i + ' column: ' + j)
//         document.write('<br>')
//     }

// }

// &nbsp

// let size = Number(prompt('Enter size of pri')) // 6

// for (let i = 1; i <= size; i++) {
                    
//     for (let s = size; s >= i; s--) {
//         document.write('&nbsp&nbsp')
//     }

//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }

//     document.write('<br>')
// }