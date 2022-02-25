/**
 * Project requirement
 * - Ramdomly change background color by clicking a button and show the hax code in input field.
 */

const body = document.getElementsByTagName( 'body' )[0];
const input = document.querySelector( '.input-box' );
const btn = document.querySelector( '.change-btn' );

btn.addEventListener( 'click', function(e) {
    e.preventDefault();
    var haxColorCode = generateHaxBackgroundColor();
    body.style.backgroundColor = haxColorCode;
    input.value = haxColorCode;
} );

function generateHaxBackgroundColor() {
    var randomHexColor = Math.floor( Math.random() * 16777215 ).toString(16);
    console.log( `#${randomHexColor}` );
    return `#${randomHexColor}`;
}