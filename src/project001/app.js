/**
 * Project requirement
 * - Change the background color by generating random color
 */

// Select the elements.
const body = document.getElementsByTagName('body')[0];
const btn = document.querySelector('.change-btn');

// add event listener to the button element.
btn.addEventListener( 'click', function( e ) {
    e.preventDefault();
    body.style.backgroundColor = changeBackgroundColor();
} );

// function to change background color randomly.
function changeBackgroundColor() {
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