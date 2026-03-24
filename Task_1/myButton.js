export class myButton {
    constructor (btnText = "A button", btnBgColor = 'lightgray', btnTitle = "Default Tooltip") {
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        this.btnTitle = btnTitle;
    }

        show() {
        document.write(`
            <button 
                title="${this.btnTitle}" 
                style="background-color: ${this.btnBgColor};">
                ${this.btnText}
            </button>
        `);

        // show() {
        //     const btn = document.createElement('button');
        //     btn.textContent = this.btnText;
        //     btn.title = this.btnTitle;
        //     btn.style.backgroundColor = this.btnBgColor;
        //     document.body.appendChild(btn);
        // }
}}
