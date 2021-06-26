'use strict';
let score = 0;
let name = prompt('Hi, what\'s your name');
alert('Hi ' + name + ' I would like to play a qussing game with you about me, let\'s go ');
let fir = prompt('I\'am above 25 years old? yes or no');
function ehab1(fir) {
    switch (fir.toLocaleLowerCase()) {
        case 'yes':
        case 'y':
            console.log(fir);
            alert('correct,let\'s go to the second quastion');
            score++;
            break;
        case 'no':
        case 'n':
            console.log(fir);
            alert('booooo,I\'m 26');
    }
} ehab1(fir);
let sec = prompt('I\'m from jordan? yes or no').toLocaleLowerCase();
let yes = 'yes';
let y = 'y';
function ehab2(sec) {
    if (sec.toLocaleLowerCase() == yes || sec.toLocaleLowerCase() == y) {
        console.log(sec);
        alert('nice, I\'m from jordn-amman');
        score++;
    } else {
        console.log(sec);
        alert('boooooo, I live in amman-jordan');
    }
} ehab2(sec);
let third = prompt('Do you think that I have a degree in programming? yes or no ');
function ehab3(third) {
    switch (third.toUpperCase()) {
        case 'NO':
        case 'N':
            console.log(third);
            alert('correct, so far I don\'t have a degree in programming');
            score++;
            break;
        case 'YES':
        case 'Y':
            console.log(third);
            alert('sadlly i don\'t have one yet');
    }
} ehab3(third);
let fourth = prompt('I\'m still learning about programming ? yes or no');
function ehab4(fourth) {
    switch (fourth.toLocaleLowerCase()) {
        case 'yes':
        case 'y':
            console.log(fourth);
            alert('correct, I\'m still studing @ ASAC in 201 level');
            score++;
            break;

        case 'n':
        case 'no':
            console.log(fourth);
            alert('false, I\'m still a student');
            break;
    }
} ehab4(fourth);
let fifth = prompt('Did you enjoy our gussing game').toLocaleLowerCase();
function ehab5(fifth) {
    if (fifth.toLocaleLowerCase() == yes || fifth.toLocaleLowerCase() == y) {
        console.log(fifth);
        alert('I\'m glade that you enjoied our game ' + name);
    } else {
        console.log(fifth);
        alert('Sorry to bother you ' + name);
    }
} ehab5(fifth);

//  }<-- this is an infinite loop --->
//  let num = 3;
//  let six = prompt('guisse a number from 1-6');
//  while(six > 6){
//     six = prompt('ya habibi wallah men 1-6','yalla men 1-6');}
//     while(six!=num){

//      switch(six){
//          case '6':
//              six = prompt('you are high','go down')
//              console.log(six);
//              break;
//          case '5':
//              six = prompt('you are high','go down')
//              console.log(six);
//              break;
//          case '4':
//              six = prompt('you are so close','go down')
//              console.log(six);
//              break;
//          case '2':
//             six = prompt('you are so close','go up')
//             console.log(six);
//             break;
//          case '1':
//              six = prompt('you picked a far low number','go up')
//              console.log(six); 
//              break;     

//          case '3':
//              alert('great,correct answer')
//              console.log(six);
//              break;

//              default:
//                  while(six > 6 || six < 1){
//                  six = prompt('from 1-6 only','play with me')
//                 console.log(six);}


//      }
//     }<---- this is an infinite loop ----> 








// let age = prompt('Guess how old I\'m ?', 'your answer should be a range like : 10-20');

// while (!age) {
//     age = prompt('Enter a Number Please', 'Ex:100-110');
// }
// let q = 0;



// function ehab6(q) {
//     while (q < 3) {
//         if (age == '20-30') {
//             alert('That\'s right');
//             score++;
//             break;
//         }
//         if (age < '20-30') {

//             age = prompt('Try a higher value');
//             q++

//         } else {

//             age = prompt('Try a lower value');
//             q++

//         }
//     }
// } ehab6(q);

let f = prompt('guess who many years of experiance do i have', "it\'s less than 5 years");
let z = 0;
function ehab6(){while (f > 5) {
    z = prompt('you have to enter a number', 'it should be less than 5')

for (let i = 0; i < 3;) {
    if (z > 5) {
        alert('you went so high');
        z = prompt('try lower number', 'less than 5'); i++
    } if (z = 4) {
        alert('great I have 4 years of experience'); i++; score++;
    }
    else {
        alert('alert you went so down')
        z = prompt('try a higer number', 'also less than 5 '); i++

    }

}}


let car = ['Benz', 'BMW', 'Golf', 'bugatti']
let correct = false;
let v = '';
function ehab7(v) {
    for (let k = 0; k < 6; k++) {
        v = prompt('Guess my Favorite car ', 'Choose a German car');



        for (let m = 0; m < car.length; m++) {

            if (v == car[m]) {
                alert('Good Job');
                score++;
                correct = true
                k = 7;
                break;
            }
            if (correct) {
                break;
            }
        }

    }
} ehab7(v);
alert('My Favorite car is : BMW');


alert('Thank you For your time ' + name + ',out of 6 your score is: ' + score);
