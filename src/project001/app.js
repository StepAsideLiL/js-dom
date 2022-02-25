/**
 * Project requirement
 * - Change the background rgba color by generating random color
 * 
 * Solution
 * - JavaScript Math.random() gives float number
 * - 1 to 10 random number => Math.floor( Math.random() * 10 ) + 1
 * - min to max random number => Math.floor( Math.random() * ( (max + 1) - min ) ) + min
 */

// Select the elements.
const body = document.getElementsByTagName( 'body' )[0];
const btn = document.querySelector( '.change-btn' );

// add event listener to the button element.
btn.addEventListener( 'click', function( e ) {
    e.preventDefault();
    body.style.backgroundColor = generateRgbaBackgroundColor();
} );

// function to change background color randomly.
function generateRgbaBackgroundColor() {
    // var backgroungColor = Math.floor(Math.random()*16777215).toString(16);
    // console.log('#'+backgroungColor);
    // return '#'+backgroungColor;

    var red = Math.floor( Math.random() * 256 );
    var green = Math.floor( Math.random() * 256 );
    var blue = Math.floor( Math.random() * 256 );
    var alpha = Math.random().toFixed(1);
    var randomColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

    console.log(randomColor);

    return randomColor;
}