# Project 007

## Project requirements
- Change the background color randomly by clicking a button generating hex color code.
- Show the hex color code in a input field.
- A button to copy the hex code into the clipboard.
- Show a toast message when the color is copied.
- Type color hex code in the input field to change background color.
- Type color hex code without the hash.
- Show the RGB color code in another input field without editing functionality.
- Add a button to copy the RGB color code into the clipboard.
- Show a toast message when the rgb color is copied.

## Algorithm
1. Select elements (*body*, *input field for hex color*, *copy button for hex color*, *input field for rgb color*, *copy button for rgb color*, and *change button*).
2. define `rgbColor, hexColor, div=null` variables in golobal scope.
3. Add click event to *change button*.
   - `rgbColorCode = generateRgbColorCode()`.
   - `rgbColor = generateRgbColor(rgbColorCode)`.
   - `hexColor = generateHexColor(rgbColorCode)`.
   - set `hexColor` into *body*.
   - set `hexColor` into *input field for hex color*.
   - set `rgbColor` into *input field for rgb color*.
4. Add click event to *copy button for hex color*.
   - assign valid hex code to `color` with upper case lettar.
   - copy hex code in to clipboard.
   - if `div != null` then remove div and `div=null`.
   - call generateToastMessage(#`color` Copied) function.
5. Add input event to *input field for hex color*.
   - call `isValidHex()` function with input parameter.
   - if `isValidHex() == true` set `color` hex code into *body*.
6. Add click event to *copy button for rgb color*.
   - assign valid rgb code to `color`.
   - copy `color` in to clipboard.
   - if `div != null` then remove div and `div=null`.
   - call generateToastMessage(`color` Copied) function.
7. `generateRgbColorCode()`
   - randomly generate `red, green, blue` rgb color value.
   - return `{red, green, blue}` color object.
8. `generateRgbColor({red, green, blue})`
   - return `rgb(red, green, blue)`.
9. `generateHexColor({red, green, blue})`
   - `r = generateValidHexCode(red), g = generateValidHexCode(green), b = generateValidHexCode(blue)`.
   - `return rgb.toUpperCase()`.
10. `generateValidHexCode(code)`
    - return two digit hex code.
7. `generateToastMessage(message)`
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

## The project [Preview](https://raw.githack.com/StepAsideLiL/js-dom/main/src/project007/index.html).

<br />
Note: We rewrite the color code generator function and divided into smaller function.