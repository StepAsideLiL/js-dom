/**
 * Project requirement
 * - Ramdomly change background color by clicking a button.
 * - Show the hax code in input field.
 * - Also a button to copy the hax code in clipboard. 
 * - Show a toast message when copied the color.
 */

const body = document.getElementsByTagName( 'body' )[0];
const input = document.querySelector( '.input-box' );
const copyBtn = document.querySelector( '.input-copy' ); 
const btn = document.querySelector( '.change-btn' );

var haxColorCode;

let div = null;

btn.addEventListener( 'click', function( e ) {
    e.preventDefault();
    haxColorCode = generateHaxBackgroundColor();
    body.style.backgroundColor = haxColorCode;
    input.value = haxColorCode;
} );

copyBtn.addEventListener( 'click', function( e ) {
    e.preventDefault();

    navigator.clipboard.writeText( input.value );

    if ( div !== null ) {
        div.remove();
        div = null;
    }
    generateToastMessage( `${haxColorCode} Copied!` );
} );

/**
 * Generate random color hax code.
 * (16777215)10 = (ffffff)16
 * 
 * @return string color hax code
 */
function generateHaxBackgroundColor() {
    var randomHexColor = Math.floor( Math.random() * 16777215 ).toString(16);
    console.log( `#${randomHexColor}` );
    return `#${randomHexColor}`;
}

/**
 * Generate toast message.
 * 
 * @param 
 * 
 * @return void
 */
function generateToastMessage( message ) {
    div = document.createElement( 'div' );

    div.innerText = message;
    div.className = 'toast-message toast-message-slide-in';

    /**
     * Remove toast message by clicking on toast message.
     */
    div.addEventListener( 'click', function(e) {
        e.preventDefault();
        div.classList.remove( 'toast-message-slide-in' );
        div.classList.add( 'toast-message-slide-out' );

        div.addEventListener( 'animationend', function(e) {
            e.preventDefault();
            div.remove();
            div = null;
        } );
    } );

    /**
     * To remove toast message after certain period of time.
     */
    // setTimeout( function(e) {
    //     div.classList.remove( 'toast-message-slide-in' );
    //     div.classList.add( 'toast-message-slide-out' );

    //     div.addEventListener( 'animationend', function(e) {
    //         e.preventDefault();
    //         div.remove();
    //         // div = null;
    //     } );
    // }, 3000 );
    
    document.body.appendChild( div );
}