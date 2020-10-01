'use strict';

function Numbers( number ) {
    this.number = number;
}

Numbers.prototype.numbersToSelect = function ( totalNumbers ) {

    let totalNumbersArr = [];

    for ( let i = 1; i <= totalNumbers; i++ ) {
        totalNumbersArr.push(i);
    }

    return totalNumbersArr;
}

Numbers.prototype.ranGenerator = function () {

    let randomNumbersArr = [];

    let totalNumbers = this.numbersToSelect(80);

    // Checking length of arr
    while ( randomNumbersArr.length < 20 ) {
        let randomNumber = Math.floor(Math.random() * totalNumbers.length ) + 1;

        if ( randomNumbersArr.indexOf( randomNumber ) === -1 ) {

            randomNumbersArr.push( randomNumber );
        }
    }
    return randomNumbersArr;
}

function UserInterface() {}

UserInterface.prototype = Object.create( Numbers.prototype );

UserInterface.prototype.bingoNumbersColor = function ( number ) {
    let backgroundColor;

    if (number <= 10) {
        backgroundColor = 'hsl(61, 100%, 80%, 0.6)';
    }
    else if (number <= 20) {
        backgroundColor = 'hsl(205, 100%, 89%, 0.6)';
    }
    else if (number <= 30) {
        backgroundColor = 'hsl(286, 100%, 86%, 0.6)';
    }
    else if (number <= 40) {
        backgroundColor = 'hsl(112, 100%, 86%, 0.6)';
    }
    else if (number <= 50) {
        backgroundColor = 'hsl(43, 100%, 87%, 0.6)';
    }
    else if (number <= 60) {
        backgroundColor = 'hsl(305, 73%, 95%, 0.6)';
    }
    else if (number <= 70) {
        backgroundColor = 'hsl(356, 99%, 78%, 0.6)';
    }
    else {
        backgroundColor = 'hsl(144, 99%, 78%, 0.6)';
    }

    return backgroundColor;
}

// Style and display bingo element
UserInterface.prototype.displayBingoElement = function ( number ) {
    const bingoContainer = document.querySelector( '.bingoContainer' );
    const bingoElement = document.createElement( 'div' );

    bingoElement.className = 'bingoElement';
    bingoElement.textContent = number;
    bingoElement.style.borderRadius = '50%';
    bingoElement.style.margin = '5px';
    bingoElement.style.padding = '10px';
    bingoElement.style.textAlign = 'center';
    bingoElement.style.lineHeight = '50px';
    bingoElement.style.backgroundColor = userInterface.bingoNumbersColor( number );

    return ( bingoContainer.appendChild( bingoElement ) );
}

// Displaying number Element
UserInterface.prototype.displayNumberElement = function ( number ) {
    const container = document.querySelector('.container');

    const numbersForSelect = document.createElement('div');
    numbersForSelect.className = 'numberDiv';
    numbersForSelect.textContent = number;

    return ( container.appendChild( numbersForSelect ) );
}

UserInterface.prototype.displayTicketSingleElement = function ( number ) {
    const ticketContainer = document.querySelector('.ticketNumberDivContainer');

    const numbersForSelect = document.createElement('div');
    numbersForSelect.className = 'ticketNumberDiv';
    numbersForSelect.textContent = number;

    return ( ticketContainer.appendChild( numbersForSelect ) );
}

//Display ticket Element
UserInterface.prototype.displayTicketElement = function ( elementTextContent ) {

    elementTextContent.forEach( element => {
        this.displayTicketSingleElement( element );
    });
}


UserInterface.prototype.createDivForSingleElement = function ( func, innerFunc ) {

    let returnedElementsArr = []
    let elementsArr = func;
    
    elementsArr.forEach( ( element ) => {
        returnedElementsArr.push( innerFunc ( element ) );
    });

    return returnedElementsArr;
}

UserInterface.prototype.createStartButton = function ( text, message ) {
    const startButton = document.createElement('div');

    startButton.className = 'startDiv' ;
    startButton.innerHTML = `
        <h1> ${text} </h1>
        <p> ${message} </p>
    `;

    return document.body.appendChild( startButton );
}

UserInterface.prototype.checkingTicketAndOutNum = function ( outNumbers, ticketNumbers ){

    const correctTicketNumbers = [];
    let missedNumbers = [];

    outNumbers.forEach( ( element ) => {
        if( ticketNumbers.indexOf( element ) !== -1 )
        {    
            correctTicketNumbers.push( element );  
        }
        else 
        {
            missedNumbers.push( element );
        }
    });

    return [ correctTicketNumbers, missedNumbers ];
}

UserInterface.prototype.mobileOutput = function ( content ) {
    let mobileOut = document.createElement('div');
    mobileOut.className = 'mobile__output';
    mobileOut.appendChild( content );

    document.body.appendChild( mobileOut );
}

UserInterface.prototype.selectedNumbers = function () {

    let cnt = 0;
    let selectedNumbersArr = [];
    let allElementsForSelect = this.createDivForSingleElement( this.numbersToSelect(80), this.displayNumberElement );

    allElementsForSelect.forEach( ( element ) => {

        element.addEventListener( 'click',  ( e ) => {

            const ticketNum = document.querySelectorAll('.ticketNumberDiv');

            ticketNum.forEach( ( number ) => {
                number.remove();
                console.log( number );
            });
            

            if ( selectedNumbersArr.length <= 6 ) {

                
                if ( selectedNumbersArr.indexOf( +element.textContent ) !== -1 ) {
                    
                    selectedNumbersArr.splice( selectedNumbersArr.indexOf( +element.textContent ), 1 );
                    element.style.backgroundColor = '#fff';
                    cnt--;
                }
                
                else if ( selectedNumbersArr.length < 6 ) {
                    selectedNumbersArr.push( +element.textContent );
                    element.style.backgroundColor = '#bbb';
                    cnt++;
                }
                

                if ( selectedNumbersArr.length == 6 ) {
                    
                    
                    this.createStartButton( 'START', 'Press to start game!').addEventListener( 'click', ( e ) => {
                        
                        let ranNumbers = this.ranGenerator();
                        let corrNumbers;
                        let missNumbers;
                        
                        [ corrNumbers, missNumbers ] = this.checkingTicketAndOutNum( ranNumbers, selectedNumbersArr );
                        
                        for ( let i = 0; i < ranNumbers.length; i++ ){
                            
                            setTimeout(() => {

                                if( window.outerWidth <= 900 )
                                {
                                    this.mobileOutput( this.displayBingoElement( ranNumbers[i] ) );
                                }
                                else {
                                    
                                    this.displayBingoElement( ranNumbers[i] );
                                }
                                
                                
                                setTimeout(() => {
                                    if ( corrNumbers.indexOf ( ranNumbers[i] ) !== -1 ){
                                        
                                        const cn = [];
                                        cn.push( ranNumbers[i] );
                                        
                                        allElementsForSelect.forEach( ( elem )=>{
                                            
                                            let elemInt = +elem.textContent; 
                                            
                                            if( cn.indexOf ( elemInt ) !== -1 )
                                            {
                                                elem.style.backgroundColor ='red';
                                                elem.style.color="#fff";
                                                
                                                ticketNum.forEach( ( number ) => {
                                                    let intNum = +number.textContent;
                                                    
                                                    if( cn.indexOf( intNum ) !== -1 )
                                                    {
                                                        number.style.backgroundColor ='red';
                                                    }
                                                });
    
                                            }
    
                                        });
    
                                    }
                                    else if ( missNumbers.indexOf( ranNumbers[i] ) !== -1 ){
                                        
                                        const mn = [];
                                        mn.push( ranNumbers[i] );
                                        
                                        allElementsForSelect.forEach( ( elem )=>{
                                            
                                            let elemInt = +elem.textContent; 
                                            
                                            if( mn.indexOf ( elemInt ) !== -1 )
                                            {
                                                elem.style.backgroundColor ='blue';
                                                elem.style.color="#fff";
                                            }
                                        });
                                    }
                                    
                                    
                                }, 1500 );
                                
                                setTimeout(() => {
                                    if ( document.querySelector('.mobile__output') )
                                    {
                                        document.querySelector('.mobile__output').remove();
                                    }

                                }, 2500);

                                
                            }, i * 3000 );
                            
                        }
                        
                        
                        const startButton = document.querySelector( '.startDiv' );
                        startButton.remove();
                        
                        setTimeout( () => {
                            if( corrNumbers.length >= 3 )
                            {
                                let msgWin = document.querySelector('.message__content--text');
                                
                                msgWin.innerHTML = `<h1>Congratulations, you WON. <a href="https://nikolaveljo.github.io/Bingo/">click here</a> to play again</h1>  
                                <p>You got ${corrNumbers.length} correct numbers !</p>`;
                                msgWin = document.querySelector( '.message' ).style.visibility = 'visible';
                            }
                            else {          
                                let msgLose = document.querySelector( '.message' );
                                let msgLoseText = document.querySelector( '.message__content--text' );
                                
                                msgLoseText.innerHTML = `<h1>You lose, <a href="https://nikolaveljo.github.io/Bingo/">click here</a> and try again</h1> <p>You got only ${ corrNumbers.length } correct noumbers !</p>`;
                                msgLose.style.visibility = 'visible';
                            }
                            
                        }, 21 * 3000 );
                        
                        e.preventDefault();
                    });
                              
                    if ( document.querySelectorAll( '.startDiv' ).length >= 2 ){

                        document.querySelector('.startDiv').remove();

                    }
                }
                else {

                    if ( document.querySelector('.startDiv') ){

                        document.querySelector('.startDiv').remove();

                    }
                }

            }

            this.displayTicketElement( selectedNumbersArr );

            e.preventDefault();
        });

    });


    return selectedNumbersArr;
}

let singleNumber = new Numbers( 1 );
let userInterface = new UserInterface();
userInterface.selectedNumbers();
