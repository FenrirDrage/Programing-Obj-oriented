//exercicio1 - ask 2 numbers and show the sum the nterval between them
function exercicio1() {
    let num1 = prompt("Enter the first number: ");
    let num2 = prompt("Enter the second number: ");
    
    if (parseInt(num1) < parseInt(num2)) {
        let sum = 0;
        for (let i = parseInt(num1); i <= parseInt(num2); i++) {
            sum += i;
        }
        alert(`The sum of the interval between ${num1} and ${num2} is ${sum}`);
    }
}

//exercicio2 - ask numbers till user insert 0 and show the lower and higher number
function exercicio2() {
    let num = prompt("Enter a number: ");
    let lower = parseInt(num);
    let higher = parseInt(num);

    while (num != 0) {
    if (parseInt(num) < lower) {
        lower = parseInt(num);
    }
    if (parseInt(num) > higher) {
        higher = parseInt(num);
    }
    num = prompt("Enter a number: ");
    }  
    alert(`The lower number is ${lower} and the higher number is ${higher}`);
}

//exercicio3 - calc TMB using equiation mifflin-st jeor
function exercicio3() {
    let weight = prompt("Enter your weight in kg: ");
    let height = prompt("Enter your height in cm: ");
    let age = prompt("Enter your age: ");
    let sex = prompt("Enter your sex (M/F): ");
    let tmb = 0;

    if (sex == "F") {
    //Sexo feminino: (10 x peso em kg) + (6,25 x altura em cm) – (5,0 x idade em anos) – 161
    tmb = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    } else {
        //Sexo masculino: (10 x peso em kg) + (6,25 x altura em cm) – (5,0 x idade em anos) + 5
        tmb = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    }
    alert(`Your TMB is ${tmb}`);
    
}

//exercicio4 - ask a number and check if it a perfect number
function exercicio4() {
    let num = prompt("Enter a number: ");
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    if (sum == num) {
        alert(`${num} is a perfect number`);
    } else {
        alert(`${num} is not a perfect number`);
    }
}

