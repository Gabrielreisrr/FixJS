const fizzBuss = () => {
    for (let i = 0; i <= 100; i++) {
        console.log(i % 3 === 0 && i % 5 === 0 ? "fizzBuzz" : i % 3 === 0 ? "fizz" : i % 5 === 0 ? "buss" : i);
    }
}


fizzBuss();