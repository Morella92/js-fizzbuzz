console.log('Fizzbuzz')

// Scrivi un programma che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // console.log(i)

    // ma che per i multipli di 3 stampi “Fizz” al posto del numero

    if (i % 15 === 0) {

        console.log('Fizzbuzz')

    } else if (i % 5 === 0) {

        console.log('Buzz')

    } else if (i % 3 === 0){

        console.log('Fizz')

    } else {

        console.log(i)
        
    }
    

}