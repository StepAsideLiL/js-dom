# Project 004

## Project requirements
- Change the background color randomly by clicking a button generating hex color code.
- Show the hex color code in a input field.
- A button to copy the hex code into the clipboard.
- Show a toast message when the color is copied.
- Type color hex code in the input field to change background color.

## Algorithm
1. Select elements (*body*, *input field*, *change button* and *copy button*).
2. define variable `hexColorCode, div=null`.
3. Add click event to *change button*.
   - `hexColorCode = generateHexBackgroundColor()`.
   - set color hex code into *body*.
   - set hex code into *input field*.
4. Add click event to *copy button*.
   - copy hex code in to clipboard.
   - if `div != null` then remove div and `div=null`.
   - call generateToastMessage(`hexColorCode` Copied) function.
5. Add input event to *input field*.
   - call `isValidHex()` function with input parameter.
   - if `isValidHex() == true` set color hex code into *body*.
6. `generateHexBackgroundColor()`
   - return random hex color code
7. `generateToastMessage(hexColorCode Copied)`
   - create a div element and assign to `div`.
   - add toast message and slide in animation class into `div`.
   - add click event to `div`.
     - remove slide in class and add slide out class.
     - add animationend event to `div`.
       - remove `div` and `div=null`.
   - append `div` to document as child.
8. `isValidHex(color)`
   - return true if color is valid hex color with #. Example: `#acacac`.
   - else false.

<br />

## The project [Preview](https://raw.githack.com/StepAsideLiL/js-dom/main/src/project005/index.html).

<br />

### Note: There is a problem    `generateHexBackgroundColor`. Sometimes it generates less digit.