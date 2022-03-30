/**
 * Project requirement
 * - Ramdomly change background color by clicking a button.
 * - Show the hex code in input field.
 * - Also a button to copy the hex code in clipboard. 
 * - Show a toast message when copied the color.
 * - Type color hex code in the input field to change background color.
 * - write hex code without hash in input field.
 */

// Select elements.
const body = document.getElementsByTagName( 'body' )[0];
const input = document.querySelector( '.input-box' );
const copyBtn = document.querySelector( '.input-copy' ); 
const changeBtn = document.querySelector( '.change-btn' );

let hexValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
let hexColorCode;

let div = null;

// Event Listener: button click to change background color.
changeBtn.addEventListener( 'click', function( e ) {
    e.preventDefault();
    hexColorCode = generateHexBackgroundColor();
    body.style.backgroundColor = `#${hexColorCode}`;
    input.value = hexColorCode;
} );

// Event Listener: button click to copy hex code in clipboard.
copyBtn.addEventListener( 'click', function( e ) {
    e.preventDefault();

    let color = input.value[0] === '#' ? input.value.slice(1).toUpperCase() : input.value.toUpperCase();
    navigator.clipboard.writeText( `#${color}` );

    if ( div !== null ) {
        div.remove();
        div = null;
    }
    // console.log(input.value);
    generateToastMessage( `#${color} Copied!` );
} );

// Event Listener: type hex code in input field to change background color
input.addEventListener( 'input', function( e ) {
    e.preventDefault();
    let color = input.value;
    // console.log(color);
    let isHex = isValidHex( color );
    let hasHash = color[0] === '#' ? true : false;
    // console.log(hasHash);
    if ( isHex && hasHash ) {
        body.style.backgroundColor = color;
    }
    else {
        body.style.backgroundColor = `#${color}`;
    }
} );

/**
 * Generate random color hex code.
 * 
 * @return {string} color hex code
 */
function generateHexBackgroundColor() {
    let hex = '';
    for ( let i = 0; i < 6; i++ ) {
        const index = Math.floor( Math.random() * hexValues.length );
        hex += hexValues[ index ];
    }
    // console.log( hex );
    return hex;
}

/**
 * Generate toast message.
 * 
 * @param message {string} toast message
 * @return void
 */
function generateToastMessage( message ) {
    div = document.createElement( 'div' );

    div.innerText = message;
    div.className = 'toast-message toast-message-slide-in';

    /**
     * Event Listener
     * - Remove toast message by clicking on toast message.
     */
    div.addEventListener( 'click', function(e) {
        e.preventDefault();
        div.classList.remove( 'toast-message-slide-in' );
        div.classList.add( 'toast-message-slide-out' );

        // Event Listener: remove div element at the end of the animation.
        div.addEventListener( 'animationend', function(e) {
            e.preventDefault();
            div.remove();
            div = null;
        } );
    } );
    
    document.body.appendChild( div );
}

/**
 * Verify the validity of hex color code.
 * 
 * @param color {string} hex color code
 * @return {boolean}
 */
function isValidHex( color ) {
    if ( color.length === 6 || color.length === 7  ) {
        // console.log( '6 or 7 digit' );
        var regex = /#?[\dA-Fa-f]{6}/g;
        if ( regex.test( color ) ) {
            // console.log( 'hex code' );
            return true;
        }
    }
    // console.log('is not hex');
    return false;
}