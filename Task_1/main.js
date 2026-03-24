import { generateButtons, displayButtons } from "./myFunctions.js";
import { ColorButton } from "./myColorButton.js";
import { arrButtons } from "./myArrays.js";
generateButtons();
const colorBtn = new ColorButton("Submit", "Blue", "Submit your form", "White");
arrButtons.push(colorBtn);
displayButtons();