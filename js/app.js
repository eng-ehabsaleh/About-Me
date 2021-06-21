'use strict';
let name = prompt('Hi, what\'s your name')
alert('Hi ' + name +' I would like to play a qussing game with you about me, let\'s go ')
let fir = prompt('I\'am above 25 years old? yes or no')
switch (fir.toLocaleLowerCase()){
    case 'yes':
    case 'y':
        console.log(fir);
        alert('correct,let\'s go to the second quastion')
        break;
    case 'no':    
    case 'n':
        console.log(fir);
        alert('booooo,I\'m 26')
}
let sec = prompt('I\'m from jordan? yes or no').toLocaleLowerCase();
let yes ='yes';
let y ='y';
if(sec.toLocaleLowerCase()==yes || sec.toLocaleLowerCase()==y) {
    console.log(sec);
    alert('nice, I\'m from jordn-amman');
} else {
    console.log(sec);
    alert('boooooo, I live in amman-jordan');
}
let third = prompt('Do you think that I have a degree in programming? yes or no ')
 switch (third.toUpperCase()){
     case 'NO':
     case 'N':
          console.log(third);
          alert('correct, so far I don\'t have a degree in programming')
          break;
     case 'YES':
     case 'Y': 
     console.log(third);
     alert('sadlly i don\'t have one yet')          
    }
let fourth = prompt('I\'m still learning about programming ? yes or no')
 switch (fourth.toLocaleLowerCase()){
     case 'yes':
     case 'y':
        console.log(fourth);
        alert('correct, I\'m still studing @ ASAC in 201 level')
             break;
            
     case 'n':
     case 'no':    
         console.log(fourth);
         alert('false, I\'m still a student')
        break;
 }
 let fifth = prompt('Did you enjoy our gussing game').toLocaleLowerCase();
 if(fifth.toLocaleLowerCase() ==yes || fifth.toLocaleLowerCase()==y){
console.log(fifth);
alert('I\'m glade that you enjoied our game ' + name)
 } else {
     console.log(fifth);
     alert('Sorry to bother you ' + name)

 }