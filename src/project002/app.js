/**
 * Project requirement
 * - Ramdomly change background color by clicking a button.
 * - Show the hex code in input field.
 */

const body = document.getElementsByTagName( 'body' )[0];
const input = document.querySelector( '.input-box' );
const btn = document.querySelector( '.change-btn' );

btn.addEventListener( 'click', function(e) {
    e.preventDefault();
    var hexColorCode = generatehexBackgroundColor();
    body.style.backgroundColor = hexColorCode;
    input.value = hexColorCode;
} );

function generatehexBackgroundColor() {
    var randomHexColor = Math.floor( Math.random() * 16777215 ).toString(16);
    console.log( `#${randomHexColor}` );
    return `#${randomHexColor}`;
}