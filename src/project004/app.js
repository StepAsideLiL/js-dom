/**
 * Project requirement
 * - Ramdomly change background color by clicking a button.
 * - Show the hex code in input field.
 * - Also a button to copy the hex code in clipboard. 
 * - Show a toast message when copied the color.
 */

// Select elements.
const body = document.getElementsByTagName( 'body' )[0];
const input = document.querySelector( '.input-box' );
const copyBtn = document.querySelector( '.input-copy' ); 
const changeBtn = document.querySelector( '.change-btn' );

let hexColorCode;

let div = null;

// Add click event to the change button element.
changeBtn.addEventListener( 'click', function( e ) {
    e.preventDefault();
    hexColorCode = generatehexBackgroundColor();
    body.style.backgroundColor = hexColorCode;
    input.value = hexColorCode;
} );

// Add click event to the copy button element.
copyBtn.addEventListener( 'click', function( e ) {
    e.preventDefault();

    navigator.clipboard.writeText( input.value );

    if ( div !== null ) {
        div.remove();
        div = null;
    }
    generateToastMessage( `${hexColorCode} Copied!` );
} );

/**
 * Generate random color hex code.
 * (16777215)10 = (ffffff)16
 * 
 * @return {string} color hex code
 */
function generatehexBackgroundColor() {
    var randomHexColor = Math.floor( Math.random() * 16777215 ).toString(16);
    console.log( `#${randomHexColor}` );
    return `#${randomHexColor}`;
}

/**
 * Generate toast message.
 * 
 * @param {string} message toast message
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
    
    document.body.appendChild( div );
}