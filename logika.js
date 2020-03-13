// if (selectedNumbersArr.length <= 6) {

    
//     if (selectedNumbersArr.indexOf(+element.textContent) !== -1) {
        
//         selectedNumbersArr.splice(selectedNumbersArr.indexOf(+element.textContent), 1);
//         element.style.backgroundColor = '#fff';
//         //console.log('Number Selected! ');
//         cnt--;
//     }
    
//     else if (selectedNumbersArr.length < 6) {
//         selectedNumbersArr.push(+element.textContent);
//         element.style.backgroundColor = '#bbb';
//         cnt++;
//     }
    
//     if (selectedNumbersArr.length == 6) {
        
//         this.createStartButton('START', 'Press to start game!').addEventListener('click', (e) => {

//             let ranNumbers = this.ranGenerator();
//             let corrNumbers;
//             let missNumbers;
//             console.log(ranNumbers);
            
//             [corrNumbers, missNumbers] = this.checkingTicketAndOutNum(ranNumbers, selectedNumbersArr);
//             console.log(corrNumbers);
            
//                 for (let i = 0; i < ranNumbers.length; i++){
//                     setTimeout(() => {
                    
//                     this.displayBingoElement(ranNumbers[i]);

//                         if ( checkingCorrectNoumbers ){

//                         }
//                         else if (checkingMissedNumbers){
                            
//                         }
                    
//                     }, i * 1000);
//                 }
                
//                 const startButton = document.querySelector('.startDiv');
//                 startButton.remove();

//                 setTimeout( checkingOutcome() );

//                 }, 21 * 1000);
            
//             e.preventDefault();
//         });
//     }

// }


// /**
//  * Znaci kako mozemo da resimo ovu krajnje nezgodnu situaciju
//  * 
//  * 
//  * user moze da selektuje sve brojeva
//  * 
//  * ako je selektovao manje od 6 brojeva {
//  *      -moze da selektuje sve brojeve
//  * }
//  * 
//  * ukoliko je selektovao 6 {
//  *      -start dugme se prikazuje na monitoru.
//  *      -moze da klikne dugme start.
//  *      -i moze da klikne na jedne od tih 6 brojeva.
//  * }
//  */

//  let selektovaniBrojevi = [1,2,3,4,5,6];
//  console.log(selektovaniBrojevi.length);

//  if(selektovaniBrojevi.length <= 6){

//     console.log('mozes dodati broj')

//  }
//  else {
//      console.log('ne mozes dodati broj')
//  }



// function checkingOutcome(){

//     if(corrNumbers.length >= 3){
//        console.log(document.querySelector('.message'));
//        let msgWin = document.querySelector('.message').style.visibility = 'visible';
//            msgWin.innerHTML = `<h1>Congratulations, you WON.If you want to play again <a href="http://127.0.0.1:5501/index.html">click here</a></h1>
//            <p>You got ${corrNumbers.length} correct noumbers !</p>`
//    }
//    else {
       
//        let msgLose = document.querySelector('.message');
//        let msgLoseText = document.querySelector('.message__content--text');
//        msgLoseText.innerHTML = `<h1>You lose, you can <a href="http://127.0.0.1:5501/index.html">click here</a> and try again</h1>
//                            <p>You got only ${corrNumbers.length} correct noumbers !</p>`;
//        console.log(`Bad luck you have , try again`);
//        msgLose.style.visibility = 'visible';

//    }

// }

// function checkingCorrectNoumbers(){

//     if (corrNumbers.indexOf(ranNumbers[i]) !== -1){

//         const cn = [];
//         cn.push(ranNumbers[i]);

//         allElementsForSelect.forEach((elem)=>{

//             let elemInt = +elem.textContent; 

//             if(cn.indexOf(elemInt) !== -1)
//             {

//                 elem.style.backgroundColor ='red';
//                 elem.style.color="#fff";
//                 console.log(ticketNum)
//                 ticketNum.forEach((number) => {
//                         let intNum = +number.textContent;
//                     if(cn.indexOf(intNum) !== -1){
//                         number.style.backgroundColor ='red';
//                     }
//                 });
//             }
//         });
//     } 

// }

// function checkingMissedNumbers(){
//     if (missNumbers.indexOf(ranNumbers[i]) !== -1){
                        
//         const mn = [];
//         mn.push(ranNumbers[i]);
        
//         allElementsForSelect.forEach((elem)=>{

//             let elemInt = +elem.textContent; 

//             if(mn.indexOf(elemInt) !== -1)
//             {

//                 elem.style.backgroundColor ='blue';
//                 elem.style.color="#fff";
//             }
//             });
//         } 
// }