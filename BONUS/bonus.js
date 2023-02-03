const container = document.getElementById('container')

for (let i = 1; i <= 100; i++) {
  // console.log(i)

  let message = i

  // Per i numeri che sono sia multipli di 3 che di 5 stampi (quindi multipli di 15) “FizzBuzz”
  if (i % 15 === 0) {

    message = 'Fizzbuzz'
      // console.log('Fizzbuzz')

      // per i multipli di 5 stampi “Buzz”
  } else if (i % 5 === 0) {

    message= 'Buzz'
      // console.log('Buzz')

      // ma che per i multipli di 3 stampi “Fizz” al posto del numero
  } else if (i % 3 === 0){

    message= 'Fizz'
      // console.log('Fizz')

  } 
  //else {

  //     console.log(i)

  //}
  
  console.log(message)
  let divString = '<div>' + message + '</div>'
  container.innerHTML += divString
  // questa formula è uguale a container.innerHTML = container.innerHTML + divString

}

