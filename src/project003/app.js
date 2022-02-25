/**
 * Project requirement
 * - Ramdomly change background color by clicking a button.
 * - Show the hax code in input field.
 * - Also a button to copy the hax code in clipboard. 
 */

const body = document.getElementsByTagName( 'body' )[0];
const input = document.querySelector( '.input-box' );
const copyBtn = document.querySelector( '.input-copy' ); 
const btn = document.querySelector( '.change-btn' );
var haxColorCode;

btn.addEventListener( 'click', function( e ) {
    e.preventDefault();
    haxColorCode = generateHaxBackgroundColor();
    body.style.backgroundColor = haxColorCode;
    input.value = haxColorCode;
} );

copyBtn.addEventListener( 'click', function( e ) {
    e.preventDefault();
    navigator.clipboard.writeText( input.value );
    alert( `Copied Color ${ haxColorCode }` );
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