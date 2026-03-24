class myButton {
    constructor (btnText = "A button", btnBgColor = 'lightgray', btnTitle = "Default Tooltip") {
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        this.btnTitle = btnTitle;
    }

        show() {
            const btn = document.createElement('button');
            btn.textContent = this.btnText;
            btn.title = this.btnTitle;
            btn.style.backgroundColor = this.btnBgColor;
            document.body.appendChild(btn);
        }
}

const arrTexts = ["Save Progress", "Click Me", "Download", "See More"];
const arrColors = ["Green", "Grey", "Grey", "Red"];
const arrButtons = [];

function generateButtons() {
    arrTexts.forEach((text, index) => {
        const color = arrColors[index];
        const title = `${text} is shown on the ${color} background`;
        const button = new myButton(text, color, title);
        arrButtons.push(button);   
    });
}

function displayButtons() {
    arrButtons.forEach((button, index) => {
        setTimeout(() => {
            button.show();
        }, index * 3000);
    });
}

class ColorButton extends myButton {
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
}

generateButtons();
displayButtons();
const colorBtn = new ColorButton("Submit", "Blue", "Submit your form", "White");
colorBtn.show();
