// Create the class ColorButton with one more property (fColor) 
// which will inherit from the Button class. 
// fColor is used to specify the font color of the button.
// Override show() method to render the instance of the button based on 4 properties
// (btnText, btnBgColor, btnTitle, fColor).
// Create and display one instance of the ColorButton.

import { myButton } from "./myButton.js";

export class ColorButton extends myButton {
    constructor (btnText, btnBgColor, btnTitle, fColor) {
        super(btnText, btnBgColor, btnTitle);
        this.fColor = fColor;
    }
    show() {
        document.write(`
            <button 
                title="${this.btnTitle}" 
                style="background-color: ${this.btnBgColor}; color: ${this.fColor};">
                ${this.btnText}
            </button>
        `);
    }

        //     show() {
        //     const btn = document.createElement('button');
        //     btn.textContent = this.btnText;
        //     btn.title = this.btnTitle;
        //     btn.style.backgroundColor = this.btnBgColor;
        //     if (this.textColor) btn.style.color = this.textColor; // For your ColorButton

        //     // 3. Add it to the body of the page
        //     document.body.appendChild(btn);
        // }

}

