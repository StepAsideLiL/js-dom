/**
 * Project requirement
 * - Ramdomly change background color by clicking a button.
 * - Show the hex code in input field.
 */

// Select elements
const body = document.getElementsByTagName( 'body' )[0];
const input = document.querySelector( '.input-box' );
const changeBtn = document.querySelector( '.change-btn' );

// Add click event to the button element.
changeBtn.addEventListener( 'click', function(e) {
    e.preventDefault();
    var hexColorCode = generateHexBackgroundColor();
    body.style.backgroundColor = hexColorCode;
    input.value = hexColorCode;
} );

/**
 * Generate random hex color code.
 * 
 * @returns {string} hex color code.
 */
function generateHexBackgroundColor() {
    var randomHexColor = Math.floor( Math.random() * 16777215 ).toString(16);
    console.log( `#${randomHexColor}` );
    return `#${randomHexColor}`;
}