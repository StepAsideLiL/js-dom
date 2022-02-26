/**
 * Project requirement
 * - Ramdomly change background color by clicking a button.
 * - Show the hex code in input field.
 * - Also a button to copy the hex code in clipboard. 
 * - Show a toast message when copied the color.
 * - Type color hex code in the input field to change background color.
 */

const body = document.getElementsByTagName( 'body' )[0];
const input = document.querySelector( '.input-box' );
const copyBtn = document.querySelector( '.input-copy' ); 
const btn = document.querySelector( '.change-btn' );

let hexColorCode;

let div = null;

// Event Listener: button click to change background color.
btn.addEventListener( 'click', function( e ) {
    e.preventDefault();
    hexColorCode = generatehexBackgroundColor();
    body.style.backgroundColor = hexColorCode;
    input.value = hexColorCode;
} );

// Event Listener: button click to copy hex code.
copyBtn.addEventListener( 'click', function( e ) {
    e.preventDefault();

    navigator.clipboard.writeText( input.value );

    if ( div !== null ) {
        div.remove();
        div = null;
    }
    console.log(input.value);
    generateToastMessage( `${input.value} Copied!` );
} );

// Event Listener: type hex code in input field to change background color
input.addEventListener( 'input', function( e ) {
    let color = input.value;
    e.preventDefault();
    var isHex = isValidHex( color );
    if ( isHex ) {
        body.style.backgroundColor = color
    }
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

/**
 * Verify the validity of hex color code.
 * 
 * @param color {string} hex color code
 * @return {boolean}
 */
function isValidHex( color ) {
    if ( color.length !== 7 ) {
        // console.log( 'not 7 digit' );
        return false;
    }
    if ( color[0] !== '#' ) {
        // console.log( 'no # in the start' );
        return false;
    }

    var regex = /#?([\dA-Fa-f]{6})/g;

    if ( ! regex.test( color ) ) {
        // console.log( 'not a hex code' );
        return false;
    }
    return true;
}