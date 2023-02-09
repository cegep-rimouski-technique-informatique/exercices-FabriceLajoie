console.log("Hello world")

function test(a, b) {
    return a + b;
}

let nom="Vincent";
let nom2="reagirigaer";

let estPalindrome=palindrome(nom);
let estPalindrome2=palindrome(nom2);

fizzbuzz();

function palindrome(nom) {
    for(let i=0; i < (nom.length / 2); i++)
    {
        if(nom.charAt(i) != nom.charAt(nom.length - (1 + i)))
        {
            return false;
        }
    }
    return true;
}

function fizzbuzz()
{
    for(let i=1; i <= 100; i++)
    {
        if((i % 3 == 0) && (i % 5 == 0))
        {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0)
        {
            console.log("Fizz");
        }
        else if (i % 5 == 0)
        {
            console.log("Buzz");
        }
        else
        {
            console.log(i);
        }
    }
}

function fibonacci(x)
{
    if(x <= 1)
    {
        return x;
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
}

let array1 = [2, 45, 3, 12, 6, 7];
ordreDecroissant(array1);
console.log(array1);

function ordreDecroissant(x)
{
    x.sort(function(a, b){return a-b});
    var y = x.reverse();
    return y;
}

let date1 = new Date("09/11/2001");
let date2 = new Date("02/09/2023");

let nbJours = nbJours2Dates(date1, date2);
console.log(nbJours);

function nbJours2Dates(x, y)
{
    var z = y.getTime() - x.getTime();
    var w = z / (1000 * 3600 * 24);
    return w;
}

let phrase = "Bonjour ! Ça va ?";
let phraseReverse = reversePhrase(phrase);
console.log(phraseReverse);

function reversePhrase(x)
{
    var y = x.split("");
    var z = y.reverse();
    var w = z.join("");
    return w;
}

