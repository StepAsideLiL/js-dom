/**
 * Project requirement
 * - Ramdomly change background color by clicking a button.
 * - Show the hex code in input field.
 * - Also a button to copy the hex code in clipboard. 
 */

// Select elements.
const body = document.getElementsByTagName( 'body' )[0];
const input = document.querySelector( '.input-box' );
const copyBtn = document.querySelector( '.input-copy' ); 
const changeBtn = document.querySelector( '.change-btn' );
var hexColorCode;

// Add click event to the changeBtn element.
btn.addEventListener( 'click', function( e ) {
    e.preventDefault();
    hexColorCode = generatehexBackgroundColor();
    body.style.backgroundColor = hexColorCode;
    input.value = hexColorCode;
} );

// Add click event to the copyBtn element.
copyBtn.addEventListener( 'click', function( e ) {
    e.preventDefault();

    // Copy to clipboard.
    navigator.clipboard.writeText( input.value );
    alert( `Copied Color ${ hexColorCode }` );
} );

/**
 * Generate random color hex code.
 * (16777215)10 = (ffffff)16
 * 
 * @return string color hex code
 */
function generatehexBackgroundColor() {
    var randomHexColor = Math.floor( Math.random() * 16777215 ).toString(16);
    console.log( `#${randomHexColor}` );
    return `#${randomHexColor}`;
}