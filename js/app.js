'use strict';

/*let name = prompt('Hi, what\'s your name')
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

 }<-- this is an infinite loop --->
 let num = 3;
 let six = prompt('guisse a number from 1-6');
 while(six > 6){
    six = prompt('ya habibi wallah men 1-6','yalla men 1-6');}
    while(six!=num){
 
     switch(six){
         case '6':
             six = prompt('you are high','go down')
             console.log(six);
             break;
         case '5':
             six = prompt('you are high','go down')
             console.log(six);
             break;
         case '4':
             six = prompt('you are so close','go down')
             console.log(six);
             break;
         case '2':
            six = prompt('you are so close','go up')
            console.log(six);
            break;
         case '1':
             six = prompt('you picked a far low number','go up')
             console.log(six); 
             break;     

         case '3':
             alert('great,correct answer')
             console.log(six);
             break;

             default:
                 while(six > 6 || six < 1){
                 six = prompt('from 1-6 only','play with me')
                console.log(six);}


     }
    }<---- this is an infinite loop ----> */


/*for (let i = 1; i < 4; i++){
    let my =prompt('guess my age,you only has 4  opportunities to get the correct answer ?','hint: it\'s between 30 & 20');
    switch(my){
        case '30':
            alert('you are so high');
            my = prompt('try again','between 20 -30');
            break;
        case '29':   
            alert('you are high');
            my = prompt('try again','between 20 -30');
            break;
        case '28':   
            alert('you are high');
            my = prompt('try again','between 20 -30');
            break;
        case '28':   
            alert('you are high');
            my = prompt('try again','between 20 -30');
            break;
        case '27':
            alert('you are high');
            my = prompt('try again','between 20 -30');
            break;
        case '26':
            alert('correct;I\'m 26 years old');
            break;
        case '25':
            alert('you are below the correct answer');
            my = prompt('try again','between 20 -30');
            break;
        case '24':
            alert('you are below the correct answer');
            my = prompt('try again','between 20 -30');
            break;
        case '23':
            alert('you are below the correct answer');
            my = prompt('try again','between 20 -30');
            break;
        case '22':
            alert('you are below the correct answer');
            my = prompt('try again','between 20 -30');
            break;
        case '21':
            alert('you are below the correct answer');
            my = prompt('try again','between 20 -30');
            break;
        case '20':
            alert('you are far below the correct answer');
            my = prompt('try again','between 20 -30');
            break;                                         
    }
}*/


for(let i=0;i<3;i++){
    let six=prompt('guess my age','it\'s between 20-30');
    if(six>26){
        alert('too high');
        six=prompt('try a lower number');  
}
    if(six<26){
        alert('too low');
        six=('try a higher number');
}
}



