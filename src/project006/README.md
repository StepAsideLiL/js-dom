# Project 004

## Project requirements
- Change the background color randomly by clicking a button generating hex color code.
- Show the hex color code in a input field.
- A button to copy the hex code into the clipboard.
- Show a toast message when the color is copied.
- Type color hex code in the input field to change background color.
- Type color hex code without the hash.

## Algorithm
1. Select elements (*body*, *input field*, *change button* and *copy button*).
2. define variables `hexColorCode, hexValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ], div=null`.
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
   - define `hex` string variable.
   - loop with 6 time
     - randomly pick index value from 0 to 15 assign it to `index` variable.
     - `hex=hexValues[index]`.
   - return `hex`.
7. `generateToastMessage(hexColorCode Copied)`
   - create a div element and assign to `div`.
   - add toast message and slide in animation class into `div`.
   - add click event to `div`.
     - remove slide in class and add slide out class.
     - add animationend event to `div`.
       - remove `div` and `div=null`.
   - append `div` to document as child.
8. `isValidHex(color)`
   - return `true` if color is valid hex color. Example: `#acacac` or `acacac`.
   - else return `false`.

<br />

## The project [Preview](https://raw.githack.com/StepAsideLiL/js-dom/main/src/project006/index.html).

<br />

### Note: `generateHexBackgroundColor()` function in this project use new method to generate hex color code. It is more accute way to generate 6 digit hex color.