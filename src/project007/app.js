/**
 * Project requirement
 * - Ramdomly change background color by clicking a button.
 * - Show the hex code in input field.
 * - Also a button to copy the hex code in clipboard. 
 * - Show a toast message when the hex color is copied.
 * - Type color hex code in the input field to change background color.
 * - write hex code without hash in input field.
 * - Show the rbg color code in another input field without editing functionality.
 * - Add a button to copy the rgb color code in clipboard.
 * - Show a toast message when the rgb color is copied.
 */

// Select elements.
const body = document.getElementsByTagName( 'body' )[0];
const hexInput = document.querySelector( '.hex-input-box' );
const hexCopyBtn = document.querySelector( '.hex-input-copy' );
const rgbInput = document.querySelector( '.rgb-input-box' );
const rgbCopyBtn = document.querySelector( '.rgb-input-copy' );
const changeBtn = document.querySelector( '.change-btn' );

let rgbColor;
let hexColor;

let div = null;

// Event Listener: button click to change background color.
changeBtn.addEventListener( 'click', function( e ) {
    e.preventDefault();
    
    let rgbColorCode = generateRgbColorCode();

    rgbColor = generateRgbColor( rgbColorCode );
    hexColor = generateHexColor( rgbColorCode );

    body.style.backgroundColor = `#${hexColor}`;

    hexInput.value = hexColor;
    rgbInput.value = rgbColor;
} );

// Event Listener: button click to copy hex code in clipboard.
hexCopyBtn.addEventListener( 'click', function( e ) {
    e.preventDefault();

    let color = hexInput.value[0] === '#' ? hexInput.value.slice(1).toUpperCase() : hexInput.value.toUpperCase();
    navigator.clipboard.writeText( `#${color}` );

    if ( div !== null ) {
        div.remove();
        div = null;
    }
    // console.log(hexInput.value);
    generateToastMessage( `#${color} Copied!` );
} );

// Event Listener: type hex code in input field to change background color
hexInput.addEventListener( 'input', function( e ) {
    e.preventDefault();
    let color = hexInput.value;
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

// Event Listener: button click to copy RGB color code in clipboard.
rgbCopyBtn.addEventListener( 'click', function( e ) {
    e.preventDefault();

    let color = rgbColor;

    navigator.clipboard.writeText( color );

    if ( div !== null ) {
        div.remove();
        div = null;
    }
    // console.log(hexInput.value);
    generateToastMessage( `${color} Copied!` );
} );

/**
 * Generates RGB color code.
 * 
 * @returns {object} Object of color code red, green and blue.
 */
function generateRgbColorCode() {
    let red = Math.floor( Math.random() * 256 );
    let green = Math.floor( Math.random() * 256 );
    let blue = Math.floor( Math.random() * 256 );
    return {
        red: red,
        green: green,
        blue: blue
    };
}

/**
 * Generate RGB color.
 * 
 * @param {object} rgb Array of color code red, green and blue.
 * @returns {string} RGB color.
 */
function generateRgbColor( { red, green, blue } ) {
    return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * Generate hex color.
 * 
 * @param {object} rgb Array of color code red, green and blue.
 * @returns {string} Hex color.
 */
function generateHexColor( { red, green, blue } ) {
    let r = generateValidHexCode( red );
    let g = generateValidHexCode( green );
    let b = generateValidHexCode( blue );
    return `${r}${g}${b}`.toUpperCase();
}

/**
 * Generate valid hex color.
 * 
 * @param {string} code Single color code of RGB color code.
 * @returns {string} Valid hex code of single color of RGB color code.
 */
function generateValidHexCode( code ) {
    return code.toString( 16 ).length !== 2 ? `0${code.toString( 16 )}` : code.toString( 16 );
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