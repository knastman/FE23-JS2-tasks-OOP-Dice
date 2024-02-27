// Styling för tärningar kan du hitta här: https://github.com/cleivas/FE22-js2/tree/main/05%20-%20oop/dice%20styling 
// Klassen
// - Vidareutveckla tärnings-övningen
// - Konstruktorn behöver inte ha någon parameter. 
//- Varje tärning ska ha 6 sidor.

// I main
// Varje tärning som skapas utifrån klassen ska 
  // - visas på en webbsida tillsammans med två knappar, freeze och unfreeze 
  // - När man klickar på tärningen ska metoden roll anropas och det nya värdet av currentValue ska synas
  // - Man ska kunna ändra på frozen-egenskapen genom att klicka på knapparna. (Alltså bestämma om tärningen ska gå att kasta eller inte.)


// import { Die } from './modules/dice.js'
import { Dice } from './modules/dice.js';

// const dice = new Dice();

// dice.roll();
// dice.roll();
// dice.roll();
// dice.freeze();
// dice.roll();
// dice.unFreeze();
// dice.roll();


// const diceContainer = document.querySelector('#diceContainerGrid');
const contentContainer = document.querySelector('#contentContainer');
const roleDiceBtn = document.querySelector('#rollDice');

const dice = [];
const cssClasses = ['one', 'two', 'three', 'four', 'five', 'six'];

//Skapar instanserna dvs varje tärning (utan värden)
for(let i=0; i<5; i++){
  dice.push( new Dice() );  
}

//Rita upp tärningarna första gången
for(const die of dice){
  die.roll();

  console.log(die.currentValue, cssClasses[die.currentValue-1])
  
  const dieContainer= document.createElement('div');
  dieContainer.classList.add('die');
  dieContainer.classList.add(cssClasses[die.currentValue-1])
  

  const buttonContainer = document.createElement('div');
  const freezeButton = document.createElement('button');
  const unFreezeButton = document.createElement('button');
  buttonContainer.classList.add('buttonContainer');

  freezeButton.addEventListener('click', freeze);
  freezeButton.addEventListener('click', ()=>{
    die.freeze();
    freezeButton.classList.add('frozen');
    freezeButton.disabled = true;
  });
  unFreezeButton.addEventListener('click', ()=>{
    die.unFreeze();
    unFreezeButton.classList.add('unFrozen');
    unFreezeButton.disabled = true;
  });

  //Bygger en div för varje dot, motsvarande värdet
  for(let i=0; i<die.currentValue; i++){
    const dotDiv = document.createElement('div');
    dieContainer.append(dotDiv);
  }

  // dieContainer.addEventListener('click', rollDie);
  dieContainer.addEventListener('click', ()=>{
    dieContainer.classList.remove(cssClasses[die.currentValue-1])
    let dieStatus = false;

    if (!dieStatus){
      die.roll();
    }
    dieContainer.innerHTML = '';
    dieContainer.classList.add(cssClasses[die.currentValue-1])

    for(let i=0; i<die.currentValue; i++){
      const dotDiv = document.createElement('div');
      dieContainer.append(dotDiv);
    }
  })

  freezeButton.innerText = 'Freeze';
  unFreezeButton.innerText = 'Unfreeze';

  contentContainer.append(dieContainer);
  contentContainer.append(buttonContainer);
  buttonContainer.append(freezeButton,unFreezeButton );

}

// const dieContainer = document.querySelector('.die');

// function rollDie(die){
//   const currentDie = die.currentTarget;
//   console.log(currentDie);
//   contentContainer.innerHTML = '';
//   let dieStatus = false;
  
//     for(const die of dice){
//       if (!dieStatus){
//         die.roll();
//       }
//       const dieContainer= document.createElement('div');
//       // const dieDiv = document.createElement('div');
//       dieContainer.classList.add('die');
//       dieContainer.classList.remove(cssClasses[die.current-1])

//       dieDiv.classList.remove(cssClasses[die.current-1])


//       const buttonContainer = document.createElement('div');
//       const freezeButton = document.createElement('button');
//       const unFreezeButton = document.createElement('button');
//       buttonContainer.classList.add('buttonContainer');
//       freezeButton.innerText = 'Freeze';
//       unFreezeButton.innerText = 'Unfreeze';
//       // freezeButton.addEventListener('click', freeze);
//       freezeButton.addEventListener('click', ()=>{
//         die.freeze();
//         freezeButton.classList.add('frozen');
//         freezeButton.disabled = true;
//       });
//       unFreezeButton.addEventListener('click', ()=>{
//         die.unFreeze();
//         unFreezeButton.classList.add('unFrozen');
//         unFreezeButton.disabled = true;
//       });



//       //Bygger en div för varje dot som motsvarar värdet
//       for(let i=0; i<die.currentValue; i++){
//         const dotDiv = document.createElement('div');
//         let cssClass = cssClasses[die.currentValue-1];
//         dieContainer.classList.add(cssClass);
      
//         dieContainer.append(dotDiv);
//       }


//       contentContainer.append(dieContainer);
//       dieContainer.addEventListener('click', rollDie);

//       // dieContainer.addEventListener('click', ()=>{
//       //   dieContainer.innerHTML = '';
      
      
//       contentContainer.append(buttonContainer);
//       buttonContainer.append(freezeButton,unFreezeButton );


//     }

// }


// function rollDice(){
//   contentContainer.innerHTML = '';
//   let dieStatus = false;
 
//     for(const die of dice){
//       if (!dieStatus){
//         die.roll();
//       }

//       const dieContainer= document.createElement('div');
//       const dieDiv = document.createElement('div');
//       dieContainer.classList.add('die');

//       const buttonContainer = document.createElement('div');
//       const freezeButton = document.createElement('button');
//       const unFreezeButton = document.createElement('button');
//       buttonContainer.classList.add('buttonContainer');
//       freezeButton.innerText = 'Freeze';
//       unFreezeButton.innerText = 'Unfreeze';
//       // freezeButton.addEventListener('click', freeze);
//       freezeButton.addEventListener('click', ()=>{
//         die.freeze();
//         freezeButton.classList.add('frozen');
//         freezeButton.disabled = true;
//       });
//       unFreezeButton.addEventListener('click', ()=>{
//         die.unFreeze();
//         unFreezeButton.classList.add('unFrozen');
//         unFreezeButton.disabled = true;
//       });

//       // const currentValueDie = die.currentValue;

//       //Bygger en div för varje dot som motsvarar värdet
//       for(let i=0; i<die.currentValue; i++){
//         const dotDiv = document.createElement('div');
//         let cssClass = cssClasses[die.currentValue-1];
//         dieContainer.classList.add(cssClass);
      
//         dieContainer.append(dotDiv);
//       }

//       // switch (die.currentValue) {
//       //   case 1:
//       //     dieContainer.classList.add('one');
//       //     // dieContainer.append(dieDiv);
//       //     break;
//       //   case 2:
//       //     dieContainer.classList.add('two');
//       //     // dieContainer.append(dieDiv, dieDiv2);
//       //     break;
//       //   case 3:
//       //     dieContainer.classList.add('three');
//       //     // dieContainer.append(dieDiv, dieDiv2, dieDiv3);
//       //     break;
//       //   case 4:
//       //     dieContainer.classList.add('four');
//       //     // dieContainer.append(dieDiv, dieDiv2, dieDiv3, dieDiv4);
//       //     break;
//       //   case 5:
//       //     dieContainer.classList.add('five');
//       //     // dieContainer.append(dieDiv, dieDiv2, dieDiv3, dieDiv4, dieDiv5);
//       //     break;
//       //   case 6:
//       //     dieContainer.classList.add('six');
//       //     // dieContainer.append(dieDiv, dieDiv2, dieDiv3, dieDiv4, dieDiv5, dieDiv6);
//       //     break;
//       //   default: 
//       //   console.log('diceCurrentValue is default');
//       // }


//       contentContainer.append(dieContainer);

//       // dieContainer.addEventListener('click', ()=>{
//       //   dieContainer.innerHTML = '';
        

//       //   if (!dieStatus){
//       //     die.roll();
//       //   }
//       //   switch (die.currentValue) {
//       //     case 1:
//       //       dieContainer.classList.remove('two', 'three', 'four', 'five', 'six');
//       //       dieContainer.classList.add('one');
//       //       // dieContainer.append(dieDiv);
//       //       break;
//       //     case 2:
//       //       dieContainer.classList.add('two');
//       //       // dieContainer.append(dieDiv, dieDiv2);
//       //       break;
//       //     case 3:
//       //       dieContainer.classList.add('three');
//       //       // dieContainer.append(dieDiv, dieDiv2, dieDiv3);
//       //       break;
//       //     case 4:
//       //       dieContainer.classList.add('four');
//       //       // dieContainer.append(dieDiv, dieDiv2, dieDiv3, dieDiv4);
//       //       break;
//       //     case 5:
//       //       dieContainer.classList.add('five');
//       //       // dieContainer.append(dieDiv, dieDiv2, dieDiv3, dieDiv4, dieDiv5);
//       //       break;
//       //     case 6:
//       //       dieContainer.classList.add('six');
//       //       // dieContainer.append(dieDiv, dieDiv2, dieDiv3, dieDiv4, dieDiv5, dieDiv6);
//       //       break;
//       //     default: 
//       //     console.log('diceCurrentValue is default');
//       //   }

//       //   for(let i=0; i<die.currentValue; i++){
//       //     const dotDiv = document.createElement('div');
//       //     dieContainer.append(dotDiv);
//       //   }
//       // });
      
//       contentContainer.append(buttonContainer);
//       buttonContainer.append(freezeButton,unFreezeButton );


//     }

// }

// function freeze(){
//   dice.freeze();
// }






// const dice = new Dice();
// dice.roll();
    // dice.getCurrentValue();
    // createDie(dice.getCurrentValue());





// const diceCurrentValue = 0;
// switch (diceCurrentValue) {
//   case 1:
//     console.log('diceCurrentValue is 1');
//     break;
//   case 2:
//     console.log('diceCurrentValue is 2');
//     break;
//   case 3:
//     console.log('diceCurrentValue is 3');
//   case 4:
//     console.log('diceCurrentValue is 4');
//   case 5:
//     console.log('diceCurrentValue is 5');
//   case 6:
//     console.log('diceCurrentValue is 6');

//   default:
//     console.log(`Current value is ${diceCurrentValue}.`);
// }





// DENNA ÄR GJORD IHOP MED CLARA men nedan ej hennes utan mitt


// const diceContainer = document.querySelector('#diceContainer');
// console.log(diceContainer);

// function createDie(){
//   // const newBodyDiv = document.createElement('div');
//   const dieContainer= document.createElement('div');
//   const divDie1 = document.createElement('div');
//   const buttonDiv = document.createElement('div');
//   const freezeButton = document.createElement('button');
//   const unFreezeButton = document.createElement('button');
//   dieContainer.classList.add('die');
//   dieContainer.classList.add('one');
//   diceContainer.classList.add('diceContainer');
//   freezeButton.innerText = 'Freeze';
//   unFreezeButton.innerText = 'Unfreeze';

//   diceContainer.append(dieContainer);
//   dieContainer.append(divDie1);
//   diceContainer.append(buttonDiv);
//   buttonDiv.append(freezeButton,unFreezeButton );
//   // dieContainer.append(divDie1);
//   return 
// }


// const dice = [];

// for (let i=0; i<5; i++){ //5 pga 5 tärningar i yatzy
//   dice.push (new Die())
// };

// console.log('dice');
// console.log(dice);


// console.log('Roll dice');
// dice[0].roll();
// // dice.roll();

// console.log('freeze');
// dice[0].freeze();
// // dice.freeze();
// console.log('Roll dice');
// dice[0].roll();
// // dice[0].unFreeze();

// console.log('Loggar dice igen');
// console.log(dice);
// console.log(dice[0]);
// console.log(dice[0].current);


//I hennes kod flytta in for-loopen till en funktion (så kallar man på den istället för att lägga in forloopen igen som hon gjort (enligt henne själv))
// Lägg till knappar under tärningarna med "freeze" och "unfreeze"





//_____________________________________

// Övning 3 - Tärning

// Definiera  en klass för en tärning
// I konstruktorn ska du kunna ange hur många sidor tärningen ska ha
// Varje tärning ska kunna “kastas”. Alltså ha en metod som genererar ett random nummer från 1 till så många sidor tärningen har och returnerar det numret.


// import { Dice } from './modules/dice.js'

// const diceInfo = new Dice(6);
// console.log(diceInfo);
// diceInfo.throwDice();




//Funtionen Clara gör visar varför det blir problem med this, för man anropar inte ngt object och drför förstår den inte vad this är och blir undefined









