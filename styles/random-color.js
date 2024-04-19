/*
* Author: Jesse Van Schothorst
* File: random-color.js
* Breif: this will export a random color based on rgb values
* From: https://github.com/enzomanuelmangano/exploring-skia/tree/main/animated-gradient
*/
export const getRandomColor = () => {
    // Generate random RGB color values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // the color in '#RRGGBB'
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};