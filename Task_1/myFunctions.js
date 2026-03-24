import { arrTexts, arrColors, arrButtons } from "./myArrays.js";
import { myButton } from "./myButton.js";

export function generateButtons() {
    arrTexts.forEach((text, index) => {
        const color = arrColors[index];
        const title = `${text} is shown on the ${color} background`;
        const button = new myButton(text, color, title);
        arrButtons.push(button);   
    });
}

export function displayButtons() {
    arrButtons.forEach((button, index) => {
        setTimeout(() => {
            button.show();
        }, 2000 + (index * 2000));
    });
}
