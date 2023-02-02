const container = document.createElement("div");
document.body.appendChild(container);

for (let i = 1; i <= 100; i++) {
  const element = document.createElement("p");
  if (i % 15 === 0) {
    element.innerHTML = "FizzBuzz";
  } else if (i % 3 === 0) {
    element.innerHTML = "Fizz";
  } else if (i % 5 === 0) {
    element.innerHTML = "Buzz";
  } else {
    element.innerHTML = i;
  }
  container.appendChild(element);
}



